import React, { useRef, useState } from 'react'
import SignInLogo from '../../assets/sign_in.svg'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import InputWrapper from '../../components/input/InputWrapper'
import validateInputs from '../../components/input/validator'

export default function OldSignIn() {
    const nameRef = useRef('')
    const passwordRef = useRef('')

    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const [formErrors, setFormErrors] = useState({
        name: '',
        password: ''
    })

    const getFormData = () => {
        return {
            name: nameRef.current?.value ?? '',
            password: passwordRef.current?.value ?? '',
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setLoading(true)

        try {
            const formData = getFormData()

            const validate = validateInputs(formData, formErrors)

            setFormErrors(validate.errors)

            if (!validate.success) {
                return;
            }

            console.log({ formData });
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    const { name: name_err, password: password_err } = formErrors

    return (
        <>
            <div className="flex flex-col items-center gap-2 w-[80%] text-center">
                <h1 className='text-2xl text-dark font-extrabold'>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
            </div>

            <div className="">
                <img src={SignInLogo} alt='Sign In' />
            </div>

            {/* Login Form */}
            <form className="flex flex-col gap-8 w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 w-full">
                    {/* Input Fields */}
                    <div className="flex flex-col gap-6 w-full">
                        {/* Name Input */}
                        <InputWrapper
                            id='name'
                            type='text'
                            label='Name'
                            error_msg={name_err}
                        >
                            <input
                                type='text'
                                id='name'
                                placeholder='Enter your name'
                                ref={nameRef}
                                maxLength={255}
                            />
                        </InputWrapper>

                        {/* Password Input */}
                        <InputWrapper
                            id='password'
                            type='password'
                            label='Password'
                            setShowPassword={setShowPassword}
                            showPassword={showPassword}
                            error_msg={password_err}
                        >
                            <input
                                type='password'
                                id='password'
                                placeholder='Enter your password'
                                ref={passwordRef}
                                maxLength={255}
                            />
                        </InputWrapper>
                    </div>

                    {/* Forgot Password */}
                    <div className="flex flex-col items-end w-full">
                        <Link className='text-primary text-sm font-semibold' to={'/forgot-password'}>Forgot password</Link>
                    </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col gap-4 w-full items-center">
                    <Button
                        className='bg-primary text-light w-[60%]'
                        loading={loading}
                        type='submit'
                    >
                        Submit
                    </Button>

                    <p className='text-sm'>
                        Don&lsquo;t have an account yet?&nbsp;
                        <Link className='text-primary font-semibold' to={'/sign-up'}>Sign up here</Link>
                    </p>
                </div>
            </form>
        </>
    )
}
