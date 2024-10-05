"use client"
import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import React from 'react'
import { GiPadlock } from 'react-icons/gi'
import { useForm } from 'react-hook-form'
import { loginSchema, LoginSchema } from '@/lib/schemas/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInUser } from '@/app/actions/authActions'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export default function LoginForm() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched'
  });
  const onSubmit = async (data: LoginSchema) => {
    const result = await signInUser(data);
    if (result.status === 'success') {
      router.push('/members');
      router.refresh();
    } else {
      toast.error(result.error as string);
    }
  }
  return (
    <Card className=' w-2/5  mx-auto'>
      <CardHeader className=' flex flex-col justify-center items-center gap-2'>
        <div className=' flex flex-row justify-center  items-center gap-3 text-secondary '>
          <GiPadlock size={30} />
          <h1 className=' text-3xl font-semibold'>Login</h1>
        </div>
        <p className='  text-neutral-500'> welcome back to the shop</p>
      </CardHeader>
      <CardBody>
        <form className=' space-y-4' onSubmit={handleSubmit(onSubmit)}>
          <Input label="Email" type=' Email' variant='bordered' {...register('email')} isInvalid={!!errors.email} errorMessage={errors.email?.message as String} />
          <Input label="Password" type='Password' variant='bordered' {...register('password')} isInvalid={!!errors.password} errorMessage={errors.password?.message as String} />
          <Button isLoading={isSubmitting} isDisabled={!isValid} fullWidth color='secondary' type='submit'>Login</Button>
        </form>
      </CardBody>
    </Card>
  )
}
