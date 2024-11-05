import React from "react";
import { products } from './Products'


const Cartitem = () => {
   
    
    
    return (
        <div className="flex flex-col">
                <div className="w-[352px] h-[112px] relative top-[20px] left-[32px] border-b border-[#E9E9EB] flex justify-between items-center gap-5">
                    <div className="w-[80px] h-[80px] border border-[#F6F6F6] bg-[white] flex  justify-center items-center">
                        <img src="" alt="cover" className="w-[70x] h-[70px]" />
                    </div>
                    <h3 className="font-inter font-[500] text-[14px] leading-[24.5px] item-center w-[168px]  h-[25px] overflow-scroll">Name</h3>
                    <p>$10</p>
                    <div className="w-20 flex justify-between gap-2">
                        <button className="bg-gray-200 rounded-full w-6 h-6 text-black">-</button>
                        <span>1</span>
                        <button className="bg-gray-200 rounded-full w-6 h-6 text-black">+</button>
                    </div>
                </div>
        </div>
    )
}

export default Cartitem;