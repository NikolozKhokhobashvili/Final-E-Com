import React from "react";
import { Link } from "react-router-dom";


const Bestseller = () => {

    const products: any =
        [
            {
                "id": 0,
                "name": "Classic Monochrome Tees",
                "price": "$35.00",
                "src": "/Images/cover.png"
            },
            {
                "id": 1,
                "name": "Monochromatic Wardrobe",
                "price": "$27.00",
                "src": "/Images/secondcover.png"
            },
            {
                "id": 2,
                "name": "Essential Neutrals",
                "price": "$22.00",
                "src": "/Images/thirdcover.png"
            },
            {
                "id": 3,
                "name": "UTRAANET Black",
                "price": "$43.00",
                "src": "/Images/forthcover.png"
            }
        ]







    return (
        <div className="w-[1092px] h-[568px] absolute top-[992px] left-[174px]">
            <span className="relative left-[479px] w-[71px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] tracking-[5%] text-[#AAAAAA]">SHOP NOW</span>
            <h3 className="w-[139px] h-[29px] absolute top-[32px] left-[478px] font-inter font-[700] text-[24px] leading-[29.05px] text-[#0E1422]">Best Selling</h3>
            <div className="w-[1092px] h-[434px] absolute top-[141px] flex justify-between">
               

                {products.map((product: any) => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                        <div className="w-[264px] h-[434px] rounded-[4px] py-[16px] px-[8px] space-y-[24px]">
                            <div className="w-[248px] h-[312px] rounded-[4px] bg-[#F6F6F6]">
                                <img className="w-[237px] h-[312px] relative left-[6px]" src={product.src} alt="cover" />
                            </div>
                            <div className="w-[239px] h-[65px] relative top-[1px] left-[-1px] space-y-[12px]">
                                <span className="w-[94px] h-[25px] font-inter font-[500] text-[14px] leading-[24.5px] text-center text-[#000000]">{product.name}</span>
                                <div className="w-[239px] h-[28px] space-x-[16px] items-center ">
                                    <span className="w-[89px] h-[28px] rounded-[100px] border py-[2px] px-[16px] gap-[8px] border-[#E6E7E8] font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422]">IN STOCK</span>
                                    <span className="w-[47px] h-[25px] font-inter font-[400] text-[14px] leading-[24.5px] items-center text-[#474B57]">{product.price}</span>
                                </div>
                            </div>
                            
                        </div>
                    </Link>
                ))}


            </div>
        </div>
    )
}

export default Bestseller;

