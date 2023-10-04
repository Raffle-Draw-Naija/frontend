import React from 'react'
import { Outlet } from 'react-router-dom'

// Pages that shouldn't be accessible after successful authentication 
export default function GuestLayout() {
	return (
		<div>
			<Outlet />
		</div>
	)
}
