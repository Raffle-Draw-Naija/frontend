import { Link } from 'react-router-dom'
import './table.scss'

// interface TableProp {
//     headerStyle?: string
//     bodyStyle?: string
//     headerData?: string[]
//     title?: string
//     linkText?: string
//     linkUrl?: string
//     children?: React.ReactNode
// }

// interface TableItemProp {
//     Icon?: any
//     text?: string
//     isLink?: boolean
//     linkUrl?: string
//     width?: string | number
// }

export const Table = ({ headerStyle = "", bodyStyle = "", headerData = [], title = '', linkText = '', linkUrl = '', children }) => {
    return (
        <div className='flex flex-col gap-2 w-full'>
            <div className="flex justify-between items-start px-2">
                <h2 className='text-custom-grey text-xl font-extrabold'>
                    {title}
                </h2>
                {linkUrl.trim().length > 0 && (
                    <Link to={linkUrl} className='controlled-link'>
                        {linkText}
                    </Link>
                )}
            </div>
            <div className={`${bodyStyle} table-responsive justify-center rounded-xl bg-light`}>
                <table className='w-full text-custom-grey border-separate border-spacing-y-6'>
                    <thead className={`${headerStyle} text-left bg-white text-[#000]`}>
                        <tr>
                            {headerData.map(h => (
                                <th key={h}>
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {children}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export const TableRow = ({ children, className = '' }) => {
    return (
        <tr className={`${className} bg-white rounded-lg py-4 px-1`}>
            {children}
        </tr>
    )
}

export const TableItem = ({ Icon = null, text = '', isLink = false, linkUrl = '#', width = '' }) => {
    return (
        <td className={`text-custom-grey`} width={width}>
            {isLink && <a href={linkUrl} className='controlled-link'>{Icon && <Icon />} {text}</a>}
            {!isLink && <p className={`truncate ${width && "overflow-hidden w-10/12"}`}>{Icon && <Icon />} {text}</p>}
        </td>
    )
}

export const TableItemContainer = ({ colSpan = 1, className = 'text-custom-grey py-4 px-1', children }) => {
    return (
        <td className={className} colSpan={colSpan}>
            {children}
        </td>
    )
}