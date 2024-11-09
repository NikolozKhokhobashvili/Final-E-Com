import React from 'react'
import Layout from '../components/Layout'
import CartOrderSummary from '../components/CartOrderSummary'

const CartPage = () => {
    return (
        <Layout>
            <div className="w-full h-[160px] absolute top-[124px] bg-[#F6F6F6]   px-[162px] flex gap-[8px items-center">
                <div className=" h-[91px] w-[1116px] relative rounded-[4px] flex gap-[4px] items-center">
                    <h3 className='absolute top-0 left-0 font-inter font-[700] text-[24px] leading-[29.05px] text-[#0E1422]'>Cart</h3>
                    <span className="w-[80px] h-[25px] font-inter font-[500] text-[14px] leading-[24.5px] text-[#5C5F6A]">
                        Ecommerce
                    </span>
                    <div className="w-[24px] h-[24px] p-[6px] flex gap-[10px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="12"
                            viewBox="0 0 6 12"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.81168 5.46731C6.06095 5.74435 6.06303 6.19578 5.81633 6.47571L0.948585 12L0.0460425 10.9967L4.46723 5.97935L0 1.01366L0.89321 0L5.81168 5.46731Z"
                                fill="#71747E"
                            />
                        </svg>
                    </div>
                    <span className=" h-[25px] font-inter font-[500] text-[14px] leading-[24.5px] text-[#0E1422]">
                        Cart
                    </span>
                </div>
            </div>

            <h5 className='font-inter font-[600] text-[16px] leading-[19.36px] text-[#0E1422] absolute top-[356px] left-[175px]'>Your cart</h5>
            <CartOrderSummary/>
        </Layout>
    )
}

export default CartPage