import React from "react";

const Hero = () => {
    return (
        <div className="bg-[#F6F6F6] w-[100%] h-[440px] absolute top-[126px] overflow-hidden ">
            <h2 className="font-inter font-[600] text-[32px] leading-[38.73px] tracking-[-3.5%] text-[#202533]  h-[39px] absolute top-[136px] left-[182px]">Fresh Arrivals Online</h2>
            <p className="font-inter font-[400] text-[14px] leading-[24.5px] text-[#474B57] w-[266px] h-[25px] absolute top-[187px] left-[180px]">Discover Our Newest Collection Today.</p>
            <div className="flex items-center w-[183px] h-[44px] absolute  top-[260px] left-[182px] rounded-[4px] py-[12px] px-[24px] bg-[#0E1422] gap-[6px] cursor-pointer">
                <span className="font-inter font-[500] text-[14px] leading-[24.5px] text-[#FFFFFF] w-[105px] h-[25px]">View Collection</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 14 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2896 5.49578C13.5701 5.77425 13.5701 6.22575 13.2896 6.50422L7.75414 12L6.73841 10.9916L11.766 6L6.73841 1.00845L7.75414 0L13.2896 5.49578Z" fill="#FFFFFF" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9972 6.71308H0.5V5.28692H12.9972V6.71308Z" fill="#FFFFFF" />
                </svg>
            </div>
            <div className="w-[340px] h-[340px] absolute top-[89px] left-[922px] opacity-[0.6] bg-[#E9E9EB] rounded-[100%] outline-none">

            </div>
            <img className="w-[38px] h-[37.32px] absolute top-[92.32px] left-[930px]" src="/Images/burstpucker.svg" alt="burstpucker" />
            <img className="w-[255px] h-[382px] absolute top-[66px] left-[1011px] outline-none" src="/Images/heroimage.svg" alt="heroimage" />
        </div>
    )
}

export default Hero;