import { useState } from 'react'
import './Navbar.scss'
import harmburger from "../../../assets/hamburger.png"
import SearchInput from '../../../components/input/SearchInput'

const Navbar = () => {
    const [inputSearch, setInputSearch] = useState('')

    const handleInputSearch = (e) => {
        setInputSearch(e.target.value)
        console.log(inputSearch)
    }
    const handleInputClick = () => {
        // Handle the input click event here
        console.log('Input clicked!')
    }

    return (
        <nav className="navbar d-flex justify-content-between px-[49px] border-b bg-[#FFF] border-[#EAEEF4] flex items-center justify-between h-[90px]  w-[100%]">
            <img src={harmburger} alt="" className="d-md-none d-lg-none" />
            <div className="flex-grow-1 h-[50px] gap-[25px] text-[#2E2E7A]">
                <SearchInput
                    className={`d-none d-sm-block text-[16px] leading-[21.86px] text-[#979797] w-[280px] h-[90%] rounded-[8px] pl-[25px] bg-[#F5F7FB] border focus:outline-[#EAEEF4]`}
                    placeholder={`Search...`}
                    value={inputSearch}
                    onChange={handleInputSearch}
                    onClick={handleInputClick}
                />

            </div>
            <div className="flex flex-grow-0 items-center w-[117px] gap-2 ">
                <div className="w-[40px] h-[40px]">
                    <img
                        src=""
                        alt=""
                        className="w-[100%] h-[100%] object-cover rounded-full"
                    />
                </div>
                <div className="flex flex-col gap-1 ">
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
