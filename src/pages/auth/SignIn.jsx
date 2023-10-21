import React, { useRef, useState } from 'react'
import SignInLogo from '../../assets/sign_in.svg'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import InputWrapper from '../../components/input/InputWrapper'
import validateInputs from '../../components/input/validator'

export default function SignIn() {
    const usernameRef = useRef('')
    const passwordRef = useRef('')

    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const [formErrors, setFormErrors] = useState({
        username: '',
        password: ''
    })

    const getFormData = () => {
        return {
            username: usernameRef.current?.value ?? '',
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

    const { username: username_err, password: password_err } = formErrors

    return (
        <>
            <div className="flex flex-col items-center gap-2 w-[80%] text-center">
                <h1 className='text-2xl md:text-4xl text-dark font-extrabold'>Welcome Back!</h1>
            </div>

            {/* Login Form */}
            <form className="flex flex-col gap-8 w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 w-full">
                    {/* Input Fields */}
                    <div className="flex flex-col gap-6 w-full">
                        {/* Username Input */}
                        <InputWrapper
                            id='username'
                            type='text'
                            label='Username'
                            error_msg={username_err}
                        >
                            <input
                                type='text'
                                id='username'
                                placeholder='Enter your username'
                                ref={usernameRef}
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
                </div>
            </form>
        </>
    )
}
