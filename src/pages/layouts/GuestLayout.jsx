import React from 'react'
import { Outlet } from 'react-router-dom'

// Pages that shouldn't be accessible after successful authentication 
export default function GuestLayout() {
	return (
		<div className='max-w-lg mx-auto bg-light min-h-screen px-4 py-8 shadow-lg border rounded-xl flex flex-col items-center gap-8'>
			<Outlet />
		</div>
	)
}
