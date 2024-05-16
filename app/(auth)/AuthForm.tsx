"use client"

import { useState } from "react";
import Image from 'next/image'

// components
import Button from "../components/Button/Button";

// icons
import Facebook_logo from '@/public/images/icons/Facebook_logo.png'
import Apple_logo from '@/public/images/icons/Apple_logo.png'
import Google_logo from '@/public/images/icons/Google_logo.png'

type Props = {
    isRegister: boolean;
    handleSubmit: (e: React.FormEvent, email: string, password: string, confirmPassword: string) => void
}

function AuthForm({ isRegister, handleSubmit }: Props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <>
            <div className="bg-gradient-to-r from-teal-400 to-yellow-200 md:rounded-3xl">
                <h1 className="text-white py-6 md:py-14 w-10/12 ml-auto">{isRegister ? 'Register' : 'Login'}</h1>
            </div>
            <div className="mx-4 md:w-1/4 md:mx-auto mt-4">
                <form onSubmit={(e) => handleSubmit(e, email, password, confirmPassword)}>
                    <label>
                        <span>Email Address</span>
                        <input
                            type="email"
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </label>
                    <label>
                        <span>Password</span>
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </label>
                    {isRegister && (
                        <label>
                            <span>Confirm Password</span>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                                required
                            />
                        </label>
                    )}
                    <div className="w-full md:w-4/6 mx-auto">
                        <Button
                            type="submit"
                            text={isRegister ? 'Register' : 'Login'}
                        ></Button>
                    </div>
                </form>
            </div>
            <div className="mx-4 md:w-3/5 md:mx-auto mb-4 space-y-4">
                <div className="text-dark-gray flex">
                    <div className="flex-1 my-auto h-[1px] bg-dark-gray"></div>
                    <span className="flex-none px-1">
                        Or {isRegister ? 'Register' : 'Login'} with one of these options
                    </span>
                    <div className="flex-1 my-auto h-[1px] bg-dark-gray"></div>
                </div>

                <div className="flex justify-center items-center gap-x-4">
                    <div className="p-4 md:p-8 border border-dark-gray rounded-md">
                        <Image
                            src={Facebook_logo}
                            width={32}
                            height={32}
                            quality={100}
                            alt="Facebook logo"
                        />
                    </div>
                    <div className="p-4 md:p-8 border border-dark-gray rounded-md">
                        <Image
                            src={Google_logo}
                            width={32}
                            height={32}
                            quality={100}
                            alt="Facebook logo"
                        />
                    </div>
                    <div className="p-4 md:p-8 border border-dark-gray rounded-md h-auto">
                        <Image
                            src={Apple_logo}
                            width={32}
                            quality={100}
                            alt="Facebook logo"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default AuthForm