import {z} from 'zod';

export const loginSchema =z.object(
    {
        email:z.string().email(),
        password:z.string().min(6,{
            message:'password should be atlwast 6 chracters'
        })
    }
)
export type LoginSchema=z.infer<typeof loginSchema>