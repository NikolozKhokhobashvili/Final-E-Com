import React from "react";
import { Link } from "react-router-dom";



    


const Header = () => {

    return (
        <header className=" w-[1116px] max-h-[84px]  h-[100%] absolute left-[162px] top-[40px] right-[162px] border-b-[1px] border-white">
            <div className="flex justify-between items-center w-[100%] h-[45px]  px-[12px] relative top-[20px]">
                <div className="flex items-center gap-[12px]">
                    <div className="bg-[#0E1422] rounded-[100px] w-[40px] h-[40px] px-[7px] py-[6px] flex justify-center">
                        <Link to='/'><img className="w-[16px] h-[26px] fill-white outline-none" src="/Images/logo.svg" alt="logo" /></Link>
                    </div>
                    <Link to='/'><h1 className="font-manrope font-[800] text-[20px] leading-[27.32px] tracking-[-3.5%] text-[#0E1422] outline-none">Ecommerce</h1></Link>
                </div>
                <nav className="space-x-[32px] flex items-center">
                    <Link className="font-inter font-[500] text-[14px] leading-[24.5px] text-[#717171] w-[40px] h-[25px] outline-none" to="/">Home</Link>
                    <div className="flex max-w-[106px] h-[25px] gap-[25px] items-center">
                        <Link className="font-inter font-[500] text-[14px] leading-[24.5px] text-[#717171] w-[40px] h-[25px] outline-none" to="/categories">Categories</Link>
                        <img className="w-[40px] h-[40px] px-[4px] py-[8px] gap-[10px]" src="/Images/dropdown.svg" alt="dropdown" />
                    </div>
                    <Link className="font-inter font-[500] text-[14px] leading-[24.5px] text-[#717171] w-[40px] h-[25px] outline-none" to="/about">About</Link>
                    <Link className="font-inter font-[500] text-[14px] leading-[24.5px] text-[#717171] w-[40px] h-[25px] outline-none" to="/contact">Contact</Link>
                </nav>
                <div className="w-[370px] h-[45px] gap-[32px] flex items-center">
                    <div className="flex items-center w-[264px] h-[45px] rounded-[6px] border-[1px] px-[15px] py-[10px] gap-[8px] border-[#E6E7E8]">
                        <img className="w-[24px] h-[24px] py-[1px] px-[2px] gap-[10px]" src="/Images/search.svg" alt="search-logo" />
                        <input className="placeholder:text-[#878A92] placeholder:font-inter placeholder:font-[500] placeholder:text-[14px] placeholder:leading-[24.5px] outline-none " type="search" placeholder="Search products" />
                    </div>
                    <img className="w-[18px] h-[18px] hover:cursor-pointer" src="/Images/cart.svg" alt="cart" />
                    <img className="w-[18px] h-[18px] hover:cursor-pointer" src="/Images/profile.svg" alt="profile" />
                </div>
            </div>
        </header>
    )
}

export default Header;