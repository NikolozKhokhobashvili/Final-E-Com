import React from 'react'

const CheckoutInfo = () => {
    return (
        <div>
            <h5 className='absolute top-[356px] left-[175px] font-inter font-[600] text-[16px] leading-[19.36px] text-[#0E1422]'>Shipping Address</h5>
            <div className='w-[536px] h-[237px] absolute top-[439px] left-[174px] flex flex-col gap-[16px] '>
                <div className='w-[534px] h-[69px]'>
                    <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#474B57]'>Street Address</span>
                    <input className='w-[534px] h-[45px] rounded-[6px] border py-[10px] px-[15px] flex gap-[8px] border-[#E6E7E8] placeholder:font-inter font-[500] text-[16px] leading-[24.5px] text-[#474B57]' type="text" />
                </div>
                <div className='w-[534px] h-[69px] flex gap-[16px] '>
                    <div className='w-[259px] h-[69px]'>
                        <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#474B57]'>City</span>
                        <input className='w-[259px] h-[45px] rounded-[6px] border py-[10px] px-[15px] flex gap-[8] border-[#E6E7E8]' type="text" />
                    </div>
                    <div className='w-[259px] h-[69px]'>
                        <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#474B57]'>State</span>
                        <input className='w-[259px] h-[45px] rounded-[6px] border py-[10px] px-[15px] flex gap-[8] border-[#E6E7E8]' type="text" />
                    </div>
                </div>
                <div className='w-[534px] h-[69px] flex gap-[16px] '>
                    <div className='w-[259px] h-[69px]'>
                        <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#474B57]'>Zip Code</span>
                        <input className='w-[259px] h-[45px] rounded-[6px] border py-[10px] px-[15px] flex gap-[8] border-[#E6E7E8]' type="text" />
                    </div>
                    <div className='w-[259px] h-[69px]'>
                        <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#474B57]'>Country</span>
                        <input className='w-[259px] h-[45px] rounded-[6px] border py-[10px] px-[15px] flex gap-[8] border-[#E6E7E8]' type="text" />
                    </div>
                </div>

            </div>
            <div className='w-[534px] h-[69px] absolute top-[727px] left-[174px] flex gap-[16px] '>
                <div className='w-[259px] h-[69px]'>
                    <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#474B57]'>City</span>
                    <input className='w-[259px] h-[45px] rounded-[6px] border py-[10px] px-[15px] flex gap-[8] border-[#E6E7E8]' type="text" />
                </div>
                <div className='w-[259px] h-[69px]'>
                    <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#474B57]'>State</span>
                    <input className='w-[259px] h-[45px] rounded-[6px] border py-[10px] px-[15px] flex gap-[8] border-[#E6E7E8]' type="text" />
                </div>
            </div>
            <div className='w-[1px] h-[504px] absolute top-[340px] left-[830px] rotate-[-180 deg] bg-[#E6E7E8]'></div>
        </div>
    )
}

export default CheckoutInfo