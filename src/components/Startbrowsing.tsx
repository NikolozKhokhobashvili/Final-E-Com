import React from "react";

const Startbrowsing = () =>{
    return(
        <div className="w-[100%] h-[304px] absolute top-[1728px] rounded-[4px] border-t border-b bg-[#F6F6F6] border-[#F6F6F6] overflow-hidden">
            <h3 className="w-[351px] h-[29px] absolute top-[52px] left-[174px] font-inter font-[700] text-[24px] leading-[29.05px text-[#0E1422]">Browse Our Fashion Paradise!</h3>
            <p className="w-[462px] h-[50px] absolute top-[105px] left-[174px] font-inter font-[400] text-[14px] leading-[24.5px] text-[#5C5F6A]">Step into a world of style and explore our diverse collection of clothing categories.</p>
            <div className="w-[177px] h-[44px] absolute top-[187px] left-[174px] rounded-[4px] py-[12px] px-[24px] flex gap-[6px] items-center bg-[#0E1422] hover:cursor-pointer">
                <span className="w-[99px] h-[25px] font-inter font-[500] text-[14px] leading-[24.5px] text-[#FFFFFF] ">Start Browsing</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 14 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2896 5.49578C13.5701 5.77425 13.5701 6.22575 13.2896 6.50422L7.75414 12L6.73841 10.9916L11.766 6L6.73841 1.00845L7.75414 0L13.2896 5.49578Z" fill="#FFFFFF" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9972 6.71308H0.5V5.28692H12.9972V6.71308Z" fill="#FFFFFF" />
                </svg>
            </div>
            <img className="w-[225px] h-[311px] absolute top-[-17px] left-[1002px]" src="/Images/categoryimage.png" alt="categoryimage" />
        </div>
    )
}

export default Startbrowsing;