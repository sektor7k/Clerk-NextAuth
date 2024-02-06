import React from 'react'
import Link from "next/link"

const Header = () => {
    return (
        <>
            <nav className='flex items-center justify-between px-6 py-4 mb-5 bg-blue-700 '>
                <div className='flex items-center '>
                    <Link href={"/"}>
                        <div className='text-lg font-bold text-white uppercase '>
                            Clerk App
                        </div>
                    </Link>
                </div>
                <div className='text-white '>
                    <Link href={'sign-in'} className='mr-4 text-gray-300 hover:text-white'>
                        Sign In
                    </Link>
                    <Link href={'sign-up'} className='mr-4 text-gray-300 hover:text-white'>
                        Sign Up
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Header