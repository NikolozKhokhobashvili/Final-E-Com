import React, { useState } from "react";
import { Link } from "react-router-dom";

const Productlist = () => {

    const ProductLists: any =
        [
            {
                "id": 4,
                "name": "Elegant Ebony Sweatshirts",
                "price": "$35.00",
                "category": "men's clothing",
                "src": "/Images/maika.png"
            },
            {
                "id": 5,
                "name": "Sleek and Cozy Black",
                "price": "$57.00",
                "category": "men's clothing",
                "src": "/Images/meoremaika.png"
            },
            {
                "id": 6,
                "name": "Raw Black Tees",
                "price": "$19.00",
                "category": "men's clothing",
                "src": "/Images/mesamemaika.png"
            },
            {
                "id": 7,
                "name": "MOCKUP Black",
                "price": "$30.00",
                "category": "men's clothing",
                "src": "/Images/meotxemaika.png"
            }
        ]




    const [style, setStyle] = useState("w-[92px] h-[31px] rounded-[100px] outline-1  py-[3px] px-[16px]  outline-[#E9E9EB] font-inter font-[500] text-[14px] leading-[24.5px] text-[#000000] outline-none hover:cursor-pointer")
    const [meore, setMeore] = useState('w-[92px] h-[31px] rounded-[100px]   py-[3px] px-[16px]   font-inter font-[400] text-[14px] leading-[24.5px] text-[#5C5F6A] outline-none hover:cursor-pointer')

    const Changespan = () => {
        if (style !== "w-[92px] h-[31px] rounded-[100px] outline-1  py-[3px] px-[16px]  outline-[#E9E9EB] font-inter font-[500] text-[14px] leading-[24.5px] text-[#000000] outline-none hover:cursor-pointer") {
            setMeore('w-[92px] h-[31px] rounded-[100px]   py-[3px] px-[16px]   font-inter font-[400] text-[14px] leading-[24.5px] text-[#5C5F6A] outline-none hover:cursor-pointer')
            setStyle('w-[92px] h-[31px] rounded-[100px] outline-1  py-[3px] px-[16px]  outline-[#E9E9EB] font-inter font-[500] text-[14px] leading-[24.5px] text-[#000000] outline-none hover:cursor-pointer')
        }
    }

    const Changespan2 = () => {
        if (meore === 'w-[92px] h-[31px] rounded-[100px]   py-[3px] px-[16px]   font-inter font-[400] text-[14px] leading-[24.5px] text-[#5C5F6A] outline-none hover:cursor-pointer') {
            setStyle('w-[92px] h-[31px] rounded-[100px]   py-[3px] px-[16px]   font-inter font-[400] text-[14px] leading-[24.5px] text-[#5C5F6A] outline-none hover:cursor-pointer')
            setMeore('w-[92px] h-[31px] rounded-[100px] outline-1  py-[3px] px-[16px]  outline-[#E9E9EB] font-inter font-[500] text-[14px] leading-[24.5px] text-[#000000] outline-none hover:cursor-pointer')
        }
    }

    return (
        <div className="w-[1116px] h-[497px] absolute top-[2184px] left-[163px]">
            <div className="w-[158px] h-[31px] absolute left-[479px] flex gap-[24px] items-center">
                <span onClick={Changespan} className={style}>Featured</span>
                <span onClick={Changespan2} className={meore}>Latest</span>
            </div>
            <div className="w-[1092px] h-[434px] absolute top-[79px] left-[12px] flex justify-between">


                {ProductLists.map((item: any) => (
                    <Link key={item.id} to={`/product/${item.id}`}>
                        <div className="w-[264px] h-[434px] rounded-[4px] py-[16px] px-[8px] space-y-[24px]">
                            <div className="w-[248px] h-[312px] rounded-[4px] bg-[#F6F6F6]">
                                <img className="w-[237px] h-[312px] relative left-[6px]" src={item.src} alt="cover" />
                            </div>
                            <div className="w-[239px] h-[65px] relative top-[1px] left-[-1px] space-y-[12px]">
                                <span className="w-[94px] h-[25px] font-inter font-[500] text-[14px] leading-[24.5px] text-center text-[#000000]">{item.name}</span>
                                <div className="w-[239px] h-[28px] space-x-[16px] items-center ">
                                    <span className="w-[89px] h-[28px] rounded-[100px] border py-[2px] px-[16px] gap-[8px] border-[#E6E7E8] font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422]">IN STOCK</span>
                                    <span className="w-[47px] h-[25px] font-inter font-[400] text-[14px] leading-[24.5px] items-center text-[#474B57]">{item.price}</span>
                                </div>
                            </div>

                        </div>
                    </Link>
                ))}



            </div>
        </div>
    )
}

export default Productlist;




