"use client"
import { registerUser } from '@/app/actions/authActions';
import { registerSchema, RegisterSchema } from '@/lib/schemas/registerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react';
import React from 'react'
import { useForm } from 'react-hook-form';
import { GiPadlock } from 'react-icons/gi';

export default function RegisterForm() {
    const { register, handleSubmit, setError, formState: { errors, isValid, isSubmitting } } = useForm<RegisterSchema>({
        // resolver: zodResolver(registerSchema),
        mode: 'onTouched'
    });
    const onSubmit = async (data: RegisterSchema) => {
        const result = await registerUser(data);
        if (result.status === 'success') {
            console.log('user registered successfully')
        } else {
            if (Array.isArray(result.error)) {
                result.error.forEach((e) => {
                    const fieldName = e.path.join('.') as 'email' | 'name' | 'password';
                    setError(fieldName, { message: e.message })
                })
            } else {
                setError('root.serverError', { message: result.error });
            }
        }
    }
    return (
        <Card className=' w-2/5  mx-auto'>
            <CardHeader className=' flex flex-col justify-center items-center gap-2'>
                <div className=' flex flex-row justify-center  items-center gap-3 text-secondary '>
                    <GiPadlock size={30} />
                    <h1 className=' text-3xl font-semibold'>Register</h1>
                </div>
                <p className='  text-neutral-500'> welcome to the shop</p>
            </CardHeader>
            <CardBody>
                <form className=' space-y-4' onSubmit={handleSubmit(onSubmit)}>
                    <Input label="Name" type=' Name' variant='bordered' {...register('name')} isInvalid={!!errors.name} errorMessage={errors.name?.message} />
                    <Input label="Email" type=' Email' variant='bordered' {...register('email')} isInvalid={!!errors.email} errorMessage={errors.email?.message} />
                    <Input label="Password" type='Password' variant='bordered' {...register('password')} isInvalid={!!errors.password} errorMessage={errors.password?.message} />
                    {errors.root?.serverError && (
                        <p className='text-danger text-sm'>{errors.root.serverError.message}</p>
                    )}
                    <Button isLoading={isSubmitting} isDisabled={!isValid} fullWidth color='secondary' type='submit'>Register</Button>
                </form>
            </CardBody>
        </Card>
    )
}
