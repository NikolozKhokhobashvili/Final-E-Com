import React from "react";

import Youlike from './Youlike'


const Bestseller = () => {








    return (
        <div className="w-[1092px] h-[568px] absolute top-[992px] left-[174px]">
            <span className="relative left-[479px] w-[71px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] tracking-[5%] text-[#AAAAAA]">SHOP NOW</span>
            <h3 className="w-[139px] h-[29px] absolute top-[32px] left-[478px] font-inter font-[700] text-[24px] leading-[29.05px] text-[#0E1422]">Best Selling</h3>
            <div className="w-[1092px] h-[434px] absolute top-[141px] flex justify-between">
               
                <Youlike/>

            </div>
        </div>
    )
}

export default Bestseller;

