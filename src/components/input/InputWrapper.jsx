import { BsEye, BsEyeSlash } from "react-icons/bs"
import './input.scss'

export default function InputWrapper({
    label = '', type = 'text', id = '',
    error_msg = '', success_msg = '',
    setShowPassword = null,
    showPassword = false,
    Icon = null, children,
}) {
    const isPassword = type === 'password'

    return (
        <div className={`flex flex-col justify-center items-start p-0 gap-2 w-full input-group`}>
            <label htmlFor={id} className={`${!label && "hidden"} ${error_msg.trim().length > 0 ? "error" : ""} ${success_msg.trim().length > 0 ? "success" : ""}`}>
                {label && label}
            </label>
            <div className={`input w-full rounded-lg px-4 py-3 border flex justify-between items-center space-x-1 ${error_msg.trim().length > 0 ? "error" : ""} ${success_msg.trim().length > 0 ? "success" : ""}`}>
                {children}
                <span className={`cursor-pointer text-xl ${error_msg.trim().length > 0 ? "error" : ""} ${success_msg.trim().length > 0 ? "success" : ""}`} onClick={() => setShowPassword && setShowPassword((prevState) => !prevState)}>
                    {isPassword && (!showPassword ? <BsEye /> : <BsEyeSlash />)}
                    {Icon}
                </span>
            </div>
            {error_msg.trim().length > 0 && <small className="text-sm text-danger p-2 bg-danger-light w-full">
                {error_msg}
            </small>}
            {success_msg.trim().length > 0 && <small className="text-sm text-success p-2 bg-success-light w-full">
                {success_msg}
            </small>}
        </div>
    )
}