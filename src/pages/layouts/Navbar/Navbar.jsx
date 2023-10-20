import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Navbar.scss'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import { TbFilterCog } from 'react-icons/tb'
import SearchInput from '../../../components/input/SearchInput'

const Navbar = () => {
    const location = useLocation()
    const [inputSearch, setInputSearch] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleInputSearch = (e) => {
        setInputSearch(e.target.value)
        console.log(inputSearch)
    }
    const handleInputClick = () => {
        // Handle the input click event here
        console.log('Input clicked!')
    }

    return (
        <nav className="fixed top-0 z-10 px-[49px] border-b border-[#EAEEF4] flex items-center justify-between h-[90px] w-[80%] bg-[#FFF]">
            <div
                className={`${
                    location.pathname === '/dashboard/raffleStake'
                        ? 'visible'
                        : 'hidden'
                }  flex items-center w-[100%] flex-grow-1 h-[50px] gap-[25px] text-[#2E2E7A]`}
            >
                <SearchInput
                    className={`text-[16px] leading-[21.86px] text-[#979797] w-[280px] h-[90%] rounded-[8px] pl-[25px] bg-[#F5F7FB] border focus:outline-[#EAEEF4]`}
                    placeholder={`Search...`}
                    value={inputSearch}
                    onChange={handleInputSearch}
                    onClick={handleInputClick}
                />
                <div
                    className="relative inline-block text-left h-[50px] w-[235px] rounded-[30px]"
                    onClick={toggleDropdown}
                >
                    <div className="h-[100%] w-[100%] rounded-[30px]">
                        <button
                            type="button"
                            className="flex items-center gap-[4px] h-[100%] w-[235px] rounded-[30px] bg-[#eaeef430] hover:bg-[#eaeef4b2] py-[10px] pl-[20px] border border-[#EAEEF4] font-medium text-[16px] leading-[30px]"
                        >
                            Sort by: Number Picked
                            {!isOpen ? <SlArrowDown /> : <SlArrowUp />}
                        </button>
                    </div>
                    <div
                        className={`origin-top-right absolute left-3 mt-2 w-[90%] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 transition-all ease-in-out duration-1000 ${
                            isOpen ? 'block' : 'hidden'
                        }`}
                    >
                        <button
                            type="button"
                            className="block px-4 py-2 text-[14px] font-medium text-[#6F757E] hover:bg-gray-100 hover:text-[#2E2E7A] w-[100%]"
                        >
                            Number Picked
                        </button>
                        <button
                            type="button"
                            className="block px-4 py-2 text-[14px] font-medium text-[#6F757E] hover:bg-gray-100 hover:text-[#2E2E7A] w-[100%]"
                        >
                            Date
                        </button>
                        <button
                            type="button"
                            className="block px-4 py-2 text-[14px] font-medium text-[#6F757E] hover:bg-gray-100 hover:text-[#2E2E7A] w-[100%]"
                        >
                            Winning Tag
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-[13px] w-[120px] h-[100%] rounded-[30px] bg-[#eaeef430] hover:bg-[#eaeef4b2] cursor-pointer font-medium text-[16px] leading-[30px]">
                    Filter
                    <TbFilterCog className="text-[#888]" />
                </div>
            </div>

            <div className="ml-auto flex flex-grow-0 items-center w-[117px] gap-2">
                <div className="w-[40px] h-[40px]">
                    <img
                        src=""
                        alt=""
                        className="w-[100%] h-[100%] object-cover rounded-full"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <h5 className="text-[#0F1928] text-[14px] leading-[16px] font-semibold">
                        Username
                    </h5>
                    <h4 className="text-[#9FA3A9] text-[15px] leading-[16px] font-medium">
                        Admin
                    </h4>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
