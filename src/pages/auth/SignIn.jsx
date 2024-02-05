import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import InputWrapper from '../../components/input/InputWrapper'
import validateInputs from '../../components/input/validator'
import { useDispatch, useSelector } from 'react-redux'
import { UserServices } from '../../../services/UserService'
import "./signin.scss"
import startup from '../../assets/startup.png'
import { loginStart, loginSuccess } from '../../redux/userSlice'

export default function SignIn() {
    const navigate = useNavigate();
    const usernameRef = useRef('')
    const passwordRef = useRef('')
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const { loading } = useSelector(state => state.user)
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(loginStart)

        try {
            const formData = getFormData()

            const validate = validateInputs(formData, formErrors)

            setFormErrors(validate.errors)

            if (!validate.success) {
                return;
            }

            const res = await UserServices.authenticate(formData)
            dispatch(loginSuccess(res.data.data))
            localStorage.setItem("_token", res.data.data.token);
            localStorage.setItem("_rtoken", res.data.data.refreshToken);
            navigate("/dashboard")
        } catch (error) {
            if (!error) {
                setErrorMessage("Network Error. Try again")
                setErrors(true)
            } else {
                setErrors(true)
                setErrorMessage("Invalid Username/Password")
            }

        } finally {
            console.log('')
        }
    }

    const { username: username_err, password: password_err } = formErrors
    return (
        <div className='login'>
            <div className="row">
                <div className="col-md-6 d-sm-block d-none d-sm-none d-md-block" style={{ backgroundColor: "#3d3d91" }}>
                    <div className="d-flex align-items-center hi">
                        <img src={startup} />
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="right hi d-flex align-items-center">
                        <div className="d-flex flex-column w-100">
                            <div className="d-flex justify-content-center mb-5">
                                <img src="/logo.png" alt="Logo" className='w-[143px] h-[117px]' />
                            </div>
                            <div className="d-flex justify-content-center mb-5">
                                <div className="flex flex-col items-center gap-2 w-[80%] text-center">
                                    <h1 className='text-2xl md:text-4xl text-dark font-extrabold'>Welcome Back!</h1>
                                </div>
                            </div>

                            {/* Login Form */}
                            <form className="flex flex-col gap-8 w-full" onSubmit={handleSubmit}>
                                {errors && (<div className='alert alert-danger'>{errorMessage}</div>)}
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
                                        loading={loading && loading}
                                        type='submit'
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
