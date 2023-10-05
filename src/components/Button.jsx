import WhiteLoader from '../assets/button-loader-white.svg'
import DarkLoader from '../assets/button-loader-black.svg'

export default function Button({
    type = "button", className = '',
    loading = false, disabled = false,
    loader = 'white',
    event, children
}) {
    return (
        <button type={type} className={`flex justify-center space-x-4 items-center px-7 py-3 font-bold my-1 rounded-lg focus:brightness-110 active:brightness-125 min-h-24 hover:brightness-105 hover:shadow-lg active:shadow-lg ${className} ${(disabled || loading) && "cursor-not-allowed"}`} onClick={event} disabled={disabled || loading}>
            {loading ? (
                <img src={loader === 'white' ? WhiteLoader : DarkLoader} className='animate-spin-reverse' height={24} alt='Loading . . .' />
            ) : children}
        </button>
    )
}