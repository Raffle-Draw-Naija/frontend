import React from 'react'

function SearchInput({ className, onClick, value, onChange, placeholder }) {
    return (
        <input
            className={className}
            type="text"
            value={value}
            onChange={onChange}
            onClick={onClick}
            placeholder={placeholder}
        />
    )
}

export default SearchInput
