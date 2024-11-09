import React, { useState } from 'react'

const SideBar = () => {

    const [hidden, setHidden] = useState('')
    const [hidden2, setHidden2] = useState('')
    const [hidden3, setHidden3] = useState('')
    const [hidden4, setHidden4] = useState('')


    const Click = () => {
        setHidden('border')
        setHidden2('')
        setHidden3('')
        setHidden4('')
    }
    const Click2 = () => {
        setHidden('')
        setHidden2('border')
        setHidden3('')
        setHidden4('')
    }
    const Click3 = () => {
        setHidden('')
        setHidden2('')
        setHidden3('border')
        setHidden4('')
    }
    const Click4 = () => {
        setHidden('')
        setHidden2('')
        setHidden3('')
        setHidden4('border')
    }

    const [size, setSize] = useState('')
    const [size2, setSize2] = useState('')
    const [size3, setSize3] = useState('')
    const [size4, setSize4] = useState('')

    const ChangeSize = () => {
        localStorage.setItem('size', 'S');
        setSize('#0E1422')
        setSize2('')
        setSize3('')
        setSize4('')
    }
    const ChangeSize2 = () => {
        localStorage.setItem('size', 'M');
        setSize('')
        setSize2('#0E1422')
        setSize3('')
        setSize4('')
    }
    const ChangeSize3 = () => {
        localStorage.setItem('size', 'L');
        setSize('')
        setSize2('')
        setSize3('#0E1422')
        setSize4('')
    }
    const ChangeSize4 = () => {
        localStorage.setItem('size', 'XL');
        setSize('')
        setSize2('')
        setSize3('')
        setSize4('#0E1422')
    }
   


    return (
        <div className='w-[248px] h-[828px] absolute top-[220px] left-[175px] rounded-[6px] border py-[24px] px-[12px] flex flex-col gap-[70px] border-[#E6E7E8]'>
            <div className='w-[216px] h-[335px] '>
                    
                <span className='font-inter font-[500] text-[14px] leading-[24.5px] items-center text-[#0E1422]'>Categories</span>
                <div className='w-[200px] h-[294px] relative top-[41px] flex flex-col'>
                    <div className='w-[200px] h-[49px] border-b py-[12px] px-[4px] flex gap-[8px] border-[#E9E9EB] items-center'>
                        <input className='w-[18px] h-[18px] rounded-[3px] border-[2px] border-[#E6E7E8] hover:cursor-pointer' type="checkbox" />
                        <span className='font-inter font-[400] text-[14px] leading-[24.5px] text-[#474B57]'>Perfume</span>
                    </div>
                    <div className='w-[200px] h-[49px] border-b py-[12px] px-[4px] flex gap-[8px] border-[#E9E9EB] items-center'>
                        <input className='w-[18px] h-[18px] rounded-[3px] border-[2px] border-[#E6E7E8] hover:cursor-pointer' type="checkbox" />
                        <span className='font-inter font-[400] text-[14px] leading-[24.5px] text-[#474B57]'>Trousers</span>
                    </div>
                    <div className='w-[200px] h-[49px] border-b py-[12px] px-[4px] flex gap-[8px] border-[#E9E9EB] items-center'>
                        <input className='w-[18px] h-[18px] rounded-[3px] border-[2px] border-[#E6E7E8] hover:cursor-pointer' type="checkbox" />
                        <span className='font-inter font-[400] text-[14px] leading-[24.5px] text-[#474B57]'>Shoe</span>
                    </div>
                    <div className='w-[200px] h-[49px] border-b py-[12px] px-[4px] flex gap-[8px] border-[#E9E9EB] items-center'>
                        <input className='w-[18px] h-[18px] rounded-[3px] border-[2px] border-[#E6E7E8] hover:cursor-pointer' type="checkbox" />
                        <span className='font-inter font-[400] text-[14px] leading-[24.5px] text-[#474B57]'>Handbag</span>
                    </div>
                    <div className='w-[200px] h-[49px] border-b py-[12px] px-[4px] flex gap-[8px] border-[#E9E9EB] items-center'>
                        <input className='w-[18px] h-[18px] rounded-[3px] border-[2px] border-[#E6E7E8] hover:cursor-pointer' type="checkbox" />
                        <span className='font-inter font-[400] text-[14px] leading-[24.5px] text-[#474B57]'>Hat</span>
                    </div>
                    <div className='w-[200px] h-[49px] border-b py-[12px] px-[4px] flex gap-[8px] border-[#E9E9EB] items-center'>
                        <input className='w-[18px] h-[18px] rounded-[3px] border-[2px] border-[#E6E7E8] hover:cursor-pointer' type="checkbox" />
                        <span className='font-inter font-[400] text-[14px] leading-[24.5px] text-[#474B57]'>Thermos</span>
                    </div>
                </div>
            </div>
            <div className='w-[215px] h-[76px]'>
                <span className='font-inter font-[500] text-[14px] leading-[24.5px] items-center text-[#0E1422]'>Color</span>
                <div className='w-[200px] h-[32px] relative top-[41px] flex gap-[10px]'>
                    <button className='grid place-items-center' onClick={Click}>
                        <input className={`w-[32px] h-[32px] col-start-1 row-start-1  hover:cursor-pointer appearance-none ${hidden} border-[#0E1422] rounded-full`} type="radio" />
                        <div className={`w-[24px] h-[24px] col-start-1 row-start-1  bg-[#A3BEF8] rounded-full`}></div>
                    </button>
                    <button className='grid place-items-center' onClick={Click2}>
                        <input className={`w-[32px] h-[32px] col-start-1 row-start-1  hover:cursor-pointer appearance-none ${hidden2} border-[#0E1422] rounded-full`} type="radio" />
                        <div className={`w-[24px] h-[24px] col-start-1 row-start-1  bg-[#FFD58A] rounded-full`}></div>
                    </button>
                    <button className='grid place-items-center' onClick={Click3}>
                        <input className={`w-[32px] h-[32px] col-start-1 row-start-1  hover:cursor-pointer appearance-none ${hidden3} border-[#0E1422] rounded-full`} type="radio" />
                        <div className={`w-[24px] h-[24px] col-start-1 row-start-1  bg-[#83B18B] rounded-full`}></div>
                    </button>
                    <button className='grid place-items-center' onClick={Click4}>
                        <input className={`w-[32px] h-[32px] col-start-1 row-start-1  hover:cursor-pointer appearance-none ${hidden4} border-[#0E1422] rounded-full`} type="radio" />
                        <div className={`w-[24px] h-[24px] col-start-1 row-start-1  bg-[#4078FF] rounded-full`}></div>
                    </button>
                </div>
            </div>
            <div className='w-[215px] h-[137px]'>
                <span className='font-inter font-[500] text-[14px] leading-[24.5px] items-center text-[#0E1422]'>Size</span>
                <div className='w-[200px] h-[88px] relative top-[49px] flex gap-[8px]'>
                    <button onClick={ChangeSize} className={`w-[40px] h-[40px] rounded-[4px] border border-[${size}] items-center justify-center`}>
                        <span className='font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422]'>S</span>
                    </button>
                    <button onClick={ChangeSize2} className={`w-[40px] h-[40px] rounded-[4px] border border-[${size2}] items-center justify-center`}>
                        <span className='font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422]'>M</span>
                    </button>
                    <button onClick={ChangeSize3} className={`w-[40px] h-[40px] rounded-[4px] border border-[${size3}] items-center justify-center`}>
                        <span className='font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422]'>L</span>
                    </button>
                    <button onClick={ChangeSize4} className={`w-[40px] h-[40px] rounded-[4px] border border-[${size4}] items-center justify-center`}>
                        <span className='font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422]'>XL</span>
                    </button>
                </div>
            </div>

            <div className='w-[216px] h-[104px]'>
                <span className='font-inter font-[500] text-[14px] leading-[24.5px] items-center text-[#0E1422]'>Price</span>
                <input type="range" className="h-2 w-full cursor-ew-resize appearance-none rounded-full bg-gray-200 disabled:cursor-not-allowed" />
                <span>10$</span>
                <span className='absolute right-3'>300$</span>
            </div>
            

        </div>
    )
}

export default SideBar