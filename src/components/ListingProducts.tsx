import React from 'react'
import { Link } from 'react-router-dom'

const ListingProducts = () => {

    const data =
        [
            {
                id: 8,
                name: "Classic Monochrome Tees",
                category: "men's clothing",
                price: '35.00',
                src: "/Images/cover.svg",
            },
            {
                id: 9,
                name: "Monochromatic Wardrobe",
                category: "men's clothing",
                price: '27.00',
                src: "/Images/cover1.svg",
            },
            {
                id: 10,
                name: "Essential Neutrals",
                category: "men's clothing",
                price: '22.00',
                src: "/Images/cover2.svg",
            },
            {
                id: 11,
                name: "UTRAANET Black",
                category: "men's clothing",
                price: '43.00',
                src: "/Images/cover3.svg",
            },
            {
                id: 12,
                name: "Elegant Ebony Sweatshirts",
                category: "men's clothing",
                price: '35.00',
                src: "/Images/cover4.svg",
            },
            {
                id: 13,
                name: "Sleek and Cozy Black",
                category: "men's clothing",
                price: '57.00',
                src: "/Images/cover5.svg",
            },
            {
                id: 14,
                name: "Raw Black Tees",
                category: "men's clothing",
                price: '19.00',
                src: "/Images/cover6.svg",
            },
            {
                id: 15,
                name: "MOCKUP Black",
                category: "men's clothing",
                price: '30.00',
                src: "/Images/cover7.svg",
            },
            {
                id: 16,
                name: "Athletic Shirt",
                category: "men's clothing",
                price: '35.00',
                src: "/Images/cover8.svg",
            },

        ]
        
        

    return (
        <div className='w-[824px] h-[1366px] absolute top-[369px] left-[444px] grid grid-cols-3 gap-[32px]'>
            {data.map((product: any) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                    <div className="w-[264px] h-[434px] rounded-[4px]  py-[16px] px-[8px] space-y-[24px]">
                        <div className="w-[248px] h-[312px] rounded-[4px]  bg-[#F6F6F6]">
                            <img className="w-[200px] h-[275px] relative left-[6px]" src={product.src} alt="cover" />
                        </div>
                        <div className="w-[239px] h-[65px] relative top-[1px] left-[-1px] space-y-[12px]">
                            <span className="w-[94px] h-[25px] font-inter font-[500] text-[14px] leading-[24.5px] text-center text-[#000000] overflow-hidden">{product.name}</span>
                            <div className="w-[239px] h-[28px] space-x-[16px] items-center ">
                                <span className="w-[89px] h-[28px] rounded-[100px] border py-[2px] px-[16px] gap-[8px] border-[#E6E7E8] font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422]">IN STOCK</span>
                                <span className="w-[47px] h-[25px] font-inter font-[400] text-[14px] leading-[24.5px] items-center text-[#474B57]">${product.price}</span>
                            </div>
                        </div>

                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ListingProducts