import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/app/Counter'
import type { RootState } from '../store/store'
import DetailsRevbtns from "../components/DetailsRevbtns";





const Product = () => {

    const count = useSelector((state: RootState) => state.value)
    const dispatch = useDispatch()


   

    const { userid } = useParams<{ userid: any }>();


    const list =
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
            },
            {
                "id": 4,
                "name": "Elegant Ebony Sweatshirts",
                "price": "$35.00",
                "src": "/Images/maika.png"
            },
            {
                "id": 5,
                "name": "Sleek and Cozy Black",
                "price": "$57.00",
                "src": "/Images/meoremaika.png"
            },
            {
                "id": 6,
                "name": "Raw Black Tees",
                "price": "$19.00",
                "src": "/Images/mesamemaika.png"
            },
            {
                "id": 7,
                "name": "MOCKUP Black",
                "price": "$30.00",
                "src": "/Images/meotxemaika.png"
            }

        ]

    const item = list[userid]

    const [none, setNone] = useState('border')
    const [meore, setMeore] = useState('')
    const [mesame, setMesame] = useState('')

    const Changecolor = () => {
        if (none === '') {
            setNone('border')
            setMeore('')
            setMesame('')
        }
        return null
    }

    const Changecolor2 = () => {
        if (meore === '') {
            setNone('')
            setMeore('border')
            setMesame('')
        }
        return null
    }
    const Changecolor3 = () => {
        if (mesame === '') {
            setNone('')
            setMeore('')
            setMesame('border')
        }
        return null
    }

    const [first, setFirst] = useState('#0E1422')
    const [second, setSecond] = useState('#E6E7E8')
    const [third, setThird] = useState('#E6E7E8')
    const [fourth, setFourth] = useState('#E6E7E8')
    const [fifth, setFifth] = useState('#E6E7E8')


    const Size = () => {
        if (first === '#E6E7E8') {
            setFirst('#0E1422')
            setSecond('#E6E7E8')
            setThird('#E6E7E8')
            setFourth('#E6E7E8')
            setFifth('#E6E7E8')
        }
        return null
    }
    const Size2 = () => {
        if (second === '#E6E7E8') {
            setFirst('#E6E7E8')
            setSecond('#0E1422')
            setThird('#E6E7E8')
            setFourth('#E6E7E8')
            setFifth('#E6E7E8')
        }
        return null
    }
    const Size3 = () => {
        if (third === '#E6E7E8') {
            setFirst('#E6E7E8')
            setSecond('#E6E7E8')
            setThird('#0E1422')
            setFourth('#E6E7E8')
            setFifth('#E6E7E8')
        }
        return null
    }
    const Size4 = () => {
        if (fourth === '#E6E7E8') {
            setFirst('#E6E7E8')
            setSecond('#E6E7E8')
            setThird('#E6E7E8')
            setFourth('#0E1422')
            setFifth('#E6E7E8')
        }
        return null
    }
    const Size5 = () => {
        if (fifth === '#E6E7E8') {
            setFirst('#E6E7E8')
            setSecond('#E6E7E8')
            setThird('#E6E7E8')
            setFourth('#E6E7E8')
            setFifth('#0E1422')
        }
        return null
    }


    const [heart, setHeart] = useState('none')

    const fav = () => {
        if (heart === 'none') {
            setHeart('red')
        } else {
            setHeart('none')
        }

    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [item])

    return (
        <div>
            <div className="w-[1116px] h-[28px] absolute top-[140px] left-[162px] right-[162px] px-[12px] flex gap-[8px items-center">
                <div className=" h-[25px] rounded-[4px] flex gap-[4px] items-center">
                    <span className="w-[80px] h-[25px] font-inter font-[500] text-[14px] leading-[24.5px] text-[#5C5F6A]">Ecommerce</span>
                    <div className="w-[24px] h-[24px] p-[6px] flex gap-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.81168 5.46731C6.06095 5.74435 6.06303 6.19578 5.81633 6.47571L0.948585 12L0.0460425 10.9967L4.46723 5.97935L0 1.01366L0.89321 0L5.81168 5.46731Z" fill="#71747E" />
                        </svg>
                    </div>
                    <span className=" h-[25px] font-inter font-[500] text-[14px] leading-[24.5px] text-[#0E1422]">{item.name}</span>
                </div>

            </div>


            <div className="w-[1092px] h-[574px] absolute top-[184px] left-[174px]">

                <div className="w-[534px] h-[574px] rounded-[5px] bg-[#F6F6F6]">

                    <img className="w-[288px] h-[404px] absolute top-[29px] left-[123px]" src={item.src} alt="shirt" />

                </div>
                <div className="w-[438px] h-[562px] absolute top-[4px] left-[654px]">
                    <div className="w-[438px] h-[29px] absolute top-[12px] flex items-center justify-between">
                        <h3 className=" h-[29px] font-inter font-[700] text-[24px] leading-[29.05px] items-center text-[#0E1422]">{item.name}</h3>
                        <div className="w-[24px] h-[24px] py-[2px] px-[3px] flex gap-[10px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" className="flex justify-center items-center hover:cursor-pointer" viewBox="0 0 18 21" fill="none">
                                <path d="M5.96889 11.859L12.04 15.441M12.0311 5.559L5.96889 9.141M17 4.2C17 5.69117 15.8061 6.9 14.3333 6.9C12.8606 6.9 11.6667 5.69117 11.6667 4.2C11.6667 2.70883 12.8606 1.5 14.3333 1.5C15.8061 1.5 17 2.70883 17 4.2ZM6.33333 10.5C6.33333 11.9912 5.13943 13.2 3.66667 13.2C2.19391 13.2 1 11.9912 1 10.5C1 9.00883 2.19391 7.8 3.66667 7.8C5.13943 7.8 6.33333 9.00883 6.33333 10.5ZM17 16.8C17 18.2912 15.8061 19.5 14.3333 19.5C12.8606 19.5 11.6667 18.2912 11.6667 16.8C11.6667 15.3088 12.8606 14.1 14.3333 14.1C15.8061 14.1 17 15.3088 17 16.8Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="w-[272px] h-[28px] absolute top-[53px] rounded-[100px] pr-[8px] flex gap-[8px]">
                        <div className="w-[167px] h-[28px] rounded-[100px] border py-[2px] px-[16px] flex gap-[8px] items-center bg-[#F6F6F6]">
                            <div className="w-[24px] h-[24px] py-[3px] px-[2px] flex-[10px] justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 16" fill="none">
                                    <path d="M8 0.5L10.472 5.43691L16 6.23344L12 10.0741L12.944 15.5L8 12.9369L3.056 15.5L4 10.0741L0 6.23344L5.528 5.43691L8 0.5Z" fill="#5C5F6A" />
                                </svg>
                            </div>
                            <label className="w-[103px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] text-[#5C5F6A]">4.2 — 54 Reviews </label>
                        </div>
                        <div className="w-[100px] h-[28px] rounded-[100px] border py-[2px] px-[16px] flex gap-[8px] border-[#E6E7E8] justify-center items-center">
                            <span className="w-[57px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] text-[#5C5F6A]">IN STOCK</span>
                        </div>
                    </div>
                    <h4 className="w-[62px] h-[22px] absolute top-[105px] font-inter font-[600] text-[18px] leading-[21.78px] items-center text-[#0E1422]">{item.price}</h4>
                    <div className="w-[152px] h-[76px] absolute top-[159px]">
                        <label className="w-[126px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] tracking-[5%] items-center text-[#5C5F6A]">Available Colors</label>
                        <div className="w-[116px] h-[32px] absolute top-[34px] flex gap-[10px] items-center">
                            <div onClick={Changecolor} className={`w-[32px] h-[32px] rounded-[100px]  border-[#0E1422] flex gap-[8px] justify-center items-center hover:cursor-pointer ${none}`}>
                                <div className="w-[24px] h-[24px] rounded-[100px] bg-[#A3BEF8]">
                                </div>
                            </div>
                            <div onClick={Changecolor2} className={`w-[32px] h-[32px] rounded-[100px] ${meore} border-[#0E1422] flex gap-[8px] justify-center items-center hover:cursor-pointer`}>
                                <div className="w-[24px] h-[24px] rounded-[100px] bg-[#FFD58A]">
                                </div>
                            </div>
                            <div onClick={Changecolor3} className={`w-[32px] h-[32px] rounded-[100px] ${mesame} border-[#0E1422] flex gap-[8px] justify-center items-center hover:cursor-pointer`}>
                                <div className="w-[24px] h-[24px] rounded-[100px] bg-[#83B18B]">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[243px] h-[76px] absolute top-[251px]">
                        <label className="w-[81px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] tracking-[5%] text-cemter text-[#5C5F6A]" >SELECT SIZE</label>
                        <div className="w-[232px] h-[40px] absolute top-[34px] flex gap-[8px] items-center">
                            <div onClick={Size} className={`w-[40px] h-[40px] rounded-[4px] border border-[${first}] flex justify-center items-center hover:cursor-pointer`}>
                                <label className="w-[8px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422] items-center flex hover:cursor-pointer">S</label>
                            </div>
                            <div onClick={Size2} className={`w-[40px] h-[40px] rounded-[4px] border border-[${second}] flex justify-center items-center hover:cursor-pointer`}>
                                <label className="w-[11px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422] items-center flex hover:cursor-pointer">M</label>
                            </div>
                            <div onClick={Size3} className={`w-[40px] h-[40px] rounded-[4px] border border-[${third}] flex justify-center items-center hover:cursor-pointer`}>
                                <label className="w-[8px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422] items-center flex hover:cursor-pointer">L</label>
                            </div>
                            <div onClick={Size4} className={`w-[40px] h-[40px] rounded-[4px] border border-[${fourth}] flex justify-center items-center hover:cursor-pointer`}>
                                <label className="w-[15px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422] items-center flex hover:cursor-pointer">XL</label>
                            </div>
                            <div onClick={Size5} className={`w-[40px] h-[40px] rounded-[4px] border border-[${fifth}] flex justify-center items-center hover:cursor-pointer`}>
                                <label className="w-[23px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422] items-center flex hover:cursor-pointer">XXL</label>
                            </div>
                        </div>
                    </div>

                    <div className="w-[164px] h-[78px] absolute top-[359px]">
                        <span className="w-[67px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] tracking-[5%] items-center text-[#5C5F6A]">Quantity</span>
                        <div className="w-[164px] h-[44px] absolute top-[34px] rounded-[4px] border flex justify-between px-[16px] border-[#E6E7E8] items-center">
                            <button onClick={() => dispatch(decrement())} className="w-[20px] h-[20px] hover:cursor-pointer relative bottom-[9px]">
                                <svg className="relative top-[10px] left-[4.17px]  flex text-center justify-center items-center" xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 13 2" fill="none">
                                    <path d="M1.16675 1H11.1667" stroke="#5C5F6A" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <span>{count}</span>
                            <button onClick={() => dispatch(increment())} className="w-[20px] h-[20px] hover:cursor-pointer relative bottom-[5px]">
                                <svg className="relative top-[10px] left-[5px]  flex text-center justify-center items-center" xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 13 2" fill="none">
                                    <path d="M1.16675 1H11.1667" stroke="#5C5F6A" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg className="relative top-[4px] left-[8.8px]  flex text-center justify-center items-center" xmlns="http://www.w3.org/2000/svg" width="2" height="10" viewBox="0 0 2 12" fill="none">
                                    <path d="M1 1V11" stroke="#5C5F6A" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <button className="w-[284px] h-[44px] absolute top-[477px] left-[1px] rounded-[4px] py-[12px] px-[24px]  gap-[6px] bg-[#0E1422] text-[#FFFFFF] font-inter font-[500] text-[14px] leading-[24.5px] flex justify-center">Add to cart</button>
                    <div className="w-[43px] h-[43px] absolute top-[477px] left-[301px] rounded-[4px] border flex gap-[10px] border-[#E6E7E8] justify-center items-center">
                        <button><svg onClick={fav} className="hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill={heart}>
                            <path d="M12.5048 19.5L5.291 13.0513C1.37045 9.18258 7.13333 1.75337 12.5048 7.76384C17.8763 1.75337 23.6141 9.20729 19.72 13.0513L12.5048 19.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></button>
                    </div>
                    <span className="w-[235px] h-[24px] absolute top-[533px] left-[1px] font-inter font-[500] text-[12px] leading-[24px] tracking-[5%] items-center text-[#5C5F6A]">— Free shipping on orders $100+</span>

                </div>

            </div>
           <DetailsRevbtns/>
           
        </div>
    )
}

export default Product;

