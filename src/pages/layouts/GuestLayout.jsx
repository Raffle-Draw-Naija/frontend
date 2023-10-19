import React from 'react'
import { Outlet } from 'react-router-dom'

// Pages that shouldn't be accessible after successful authentication 
export default function GuestLayout() {
	return (
		<div className="flex flex-col items-center justify-center w-full min-h-screen">
			<div className='w-11/12 sm:w-7/12 md:w-6/12 lg:w-4/12 max-w-lg mx-auto px-4 py-8 border-none flex flex-col items-center justify-center gap-8'>
				<img src="/logo.png" alt="Logo" className='w-[143px] h-[117px]' />
				<Outlet />
			</div>
		</div>
	)
}
