import React, { useState } from "react";

const Productlist = () =>{

    const [style, setStyle] = useState("w-[92px] h-[31px] rounded-[100px] outline-1  py-[3px] px-[16px]  outline-[#E9E9EB] font-inter font-[500] text-[14px] leading-[24.5px] text-[#000000] outline-none hover:cursor-pointer")
    const [meore, setMeore] = useState('w-[92px] h-[31px] rounded-[100px]   py-[3px] px-[16px]   font-inter font-[400] text-[14px] leading-[24.5px] text-[#5C5F6A] outline-none hover:cursor-pointer')

    const Changespan = () =>{
       if (style !== "w-[92px] h-[31px] rounded-[100px] outline-1  py-[3px] px-[16px]  outline-[#E9E9EB] font-inter font-[500] text-[14px] leading-[24.5px] text-[#000000] outline-none hover:cursor-pointer") {
            setMeore('w-[92px] h-[31px] rounded-[100px]   py-[3px] px-[16px]   font-inter font-[400] text-[14px] leading-[24.5px] text-[#5C5F6A] outline-none hover:cursor-pointer')
            setStyle('w-[92px] h-[31px] rounded-[100px] outline-1  py-[3px] px-[16px]  outline-[#E9E9EB] font-inter font-[500] text-[14px] leading-[24.5px] text-[#000000] outline-none hover:cursor-pointer')
       }
    }

    const Changespan2 = () =>{
        if (meore === 'w-[92px] h-[31px] rounded-[100px]   py-[3px] px-[16px]   font-inter font-[400] text-[14px] leading-[24.5px] text-[#5C5F6A] outline-none hover:cursor-pointer') {
            setStyle('w-[92px] h-[31px] rounded-[100px]   py-[3px] px-[16px]   font-inter font-[400] text-[14px] leading-[24.5px] text-[#5C5F6A] outline-none hover:cursor-pointer')
            setMeore('w-[92px] h-[31px] rounded-[100px] outline-1  py-[3px] px-[16px]  outline-[#E9E9EB] font-inter font-[500] text-[14px] leading-[24.5px] text-[#000000] outline-none hover:cursor-pointer')
        }
    }

    return(
        <div className="w-[1116px] h-[497px] absolute top-[2184px] left-[163px]">
            <div className="w-[158px] h-[31px] absolute left-[479px] flex gap-[24px] items-center">
                <span onClick={Changespan}  className={style}>Featured</span>
                <span onClick={Changespan2} className= {meore}>Latest</span>
            </div>
            <div className="w-[1092px] h-[434px] absolute top-[79px] left-[12px] flex justify-between">
                <div className="w-[264px] h-[434px] rounded-[4px] py-[16px] px-[8px] space-y-[24px]">
                    <div className="w-[248px] h-[312px] rounded-[4px] bg-[#F6F6F6]">
                        <img className="w-[237px] h-[312px] absolute left-[6px]" src="/Images/maika.png" alt="cover" />
                    </div>
                    <div className="w-[239px] h-[65px] relative top-[1px] left-[-1px] space-y-[12px]">
                        <span className="w-[94px] h-[25px] font-inter font-[500] text-[14px] leading-[24.5px] text-center text-[#000000]">Elegant Ebony Sweatshirts</span>
                        <div className="w-[239px] h-[28px] space-x-[16px] items-center ">
                            <span className="w-[89px] h-[28px] rounded-[100px] border py-[2px] px-[16px] gap-[8px] border-[#E6E7E8] font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422]">IN STOCK</span>
                            <span className="w-[47px] h-[25px] font-inter font-[400] text-[14px] leading-[24.5px] items-center text-[#474B57]">$35.00</span>
                        </div>
                    </div>
                </div>
                <div className="w-[264px] h-[434px] rounded-[4px] py-[16px] px-[8px] space-y-[24px]">
                    <div className="w-[248px] h-[312px] rounded-[4px] bg-[#F6F6F6]">
                        <img className="w-[237px] h-[312px] relative left-[6px]" src="/Images/meoremaika.png" alt="cover" />
                    </div>
                    <div className="w-[239px] h-[65px] relative top-[1px] left-[-1px] space-y-[12px]">
                        <span className="w-[94px] h-[25px] font-inter font-[500] text-[14px] leading-[24.5px] text-center text-[#000000]">Sleek and Cozy Black</span>
                        <div className="w-[239px] h-[28px] space-x-[16px] items-center ">
                            <span className="w-[89px] h-[28px] rounded-[100px] border py-[2px] px-[16px] gap-[8px] border-[#E6E7E8] font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422]">IN STOCK</span>
                            <span className="w-[47px] h-[25px] font-inter font-[400] text-[14px] leading-[24.5px] items-center text-[#474B57]">$57.00</span>
                        </div>
                    </div>

                </div>
                <div className="w-[264px] h-[434px] rounded-[4px] py-[16px] px-[8px] space-y-[24px]">
                    <div className="w-[248px] h-[312px] rounded-[4px] bg-[#F6F6F6]">
                        <img className="w-[237px] h-[312px] relative left-[6px]" src="/Images/mesamemaika.png" alt="cover" />
                    </div>
                    <div className="w-[239px] h-[65px] relative top-[1px] left-[-1px] space-y-[12px]">
                        <span className="w-[94px] h-[25px] font-inter font-[500] text-[14px] leading-[24.5px] text-center text-[#000000]">Raw Black Tees</span>
                        <div className="w-[239px] h-[28px] space-x-[16px] items-center ">
                            <span className="w-[89px] h-[28px] rounded-[100px] border py-[2px] px-[16px] gap-[8px] border-[#E6E7E8] font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422]">IN STOCK</span>
                            <span className="w-[47px] h-[25px] font-inter font-[400] text-[14px] leading-[24.5px] items-center text-[#474B57]">$19.00</span>
                        </div>
                    </div>

                </div>
                <div className="w-[264px] h-[434px] rounded-[4px] py-[16px] px-[8px] space-y-[24px]">
                    <div className="w-[248px] h-[312px] rounded-[4px] bg-[#F6F6F6]">
                        <img className="w-[237px] h-[312px] relative left-[6px]" src="/Images/meotxemaika.png" alt="cover" />
                    </div>
                    <div className="w-[239px] h-[65px] relative top-[1px] left-[-1px] space-y-[12px]">
                        <span className="w-[94px] h-[25px] font-inter font-[500] text-[14px] leading-[24.5px] text-center text-[#000000]">MOCKUP Black</span>
                        <div className="w-[239px] h-[28px] space-x-[16px] items-center ">
                            <span className="w-[89px] h-[28px] rounded-[100px] border py-[2px] px-[16px] gap-[8px] border-[#E6E7E8] font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422]">IN STOCK</span>
                            <span className="w-[47px] h-[25px] font-inter font-[400] text-[14px] leading-[24.5px] items-center text-[#474B57]">$30.00</span>
                        </div>
                    </div>

                </div>
                    
            </div>
        </div>
    )
}

export default Productlist;




