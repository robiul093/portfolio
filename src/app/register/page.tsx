"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export default function RegisterPage() {

    type TFormInput = {
            name?: string,
            email: string,
            password: string,
        }
        const { register, handleSubmit, formState: { errors } } = useForm<TFormInput>();
    
        const onsubmit = (data: TFormInput) => {
            console.log(data)
        }
    
  return (
    <div className="md:w-[60%] mx-auto min-h-screen my-10">
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <h1 className="text-4xl font-bold text-center py-5 border-b-2 w-[60%] mx-auto">Create an Account</h1>
                <form onSubmit={handleSubmit(onsubmit)} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register('name', { required: 'Name is required***' })}
                            aria-invalid={errors.name ? "true" : "false"}
                            type="text"
                            className="input input-bordered w-full px-4 py-2 border-[1.5px] rounded-md focus:outline-none focus:ring-2 focus:ring-black opacity-60 text-black/75"
                        />
                        <p className="text-[#BD1616] font-semibold text-[14px] ml-3 flex justify-start">{errors.name?.message}</p>

                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register('email', { required: 'Email is required***', minLength: 6 })}
                            aria-invalid={errors.email ? "true" : "false"}
                            type="text"
                            className="input input-bordered w-full px-4 py-2 border-[1.5px] rounded-md focus:outline-none focus:ring-2 focus:ring-black opacity-60 text-black/75"
                        />
                        <p className="text-[#BD1616] font-semibold text-[14px] ml-3 flex justify-start">{errors.email?.message}</p>

                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register('password', { required: 'Password is required***' })}
                            aria-invalid={errors.password ? "true" : "false"}
                            type="password"
                            className="input input-bordered w-full px-4 py-2 border-[1.5px] rounded-md focus:outline-none focus:ring-2 focus:ring-black opacity-60 text-black/75"
                        />
                        <p className="text-[#BD1616] font-semibold text-[14px] ml-3 flex justify-start">{errors.password?.message}</p>
                    </div>

                    <button className="btn btn-neutral mt-4 w-full py-2 rounded-md">
                        Register
                    </button>

                   
                </form>

                <p className="text-center mt-2 text-sm text-gray-500">
                    Or Sign Up Using
                </p>


                <div className="flex justify-center gap-4 mt-4 mb-6">
                    <button
                        className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
                        // onClick={() =>
                        //     signIn("google", {
                        //         callbackUrl: "http://localhost:3000/dashboard",
                        //     })
                        // }
                    >
                        <Image
                            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                            width={30}
                            height={30}
                            alt="Google logo"
                        />
                    </button>
                    <button
                        className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
                        // onClick={() =>
                        //     signIn("github", {
                        //         callbackUrl: "http://localhost:3000/dashboard",
                        //     })
                        // }
                    >
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                            width={25}
                            height={25}
                            alt="GitHub logo"
                        />
                    </button>
                </div>
                <p className="text-black/45 flex justify-center mb-5 font-normal text-[16px]">Already have an account? <Link href='/login' className="underline ml-1">Login</Link></p>
            </div>
        </div>
  )
}
