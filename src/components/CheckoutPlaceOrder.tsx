import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toggleTab } from "../store/app/Cart";
import CheckoutItems from './CheckoutItems';
import { Link } from 'react-router-dom';


const CheckoutPlaceOrder = () => {

    const cartItems = useSelector((store: any) => store.cart.items);
    const dispatch = useDispatch();

    const CloseTab = () => {
        dispatch(toggleTab());
    };

    const totalPrice = cartItems.reduce((total: number, prod: {
        quantity: number; price: number;
    }, quantity: any) => total + prod.price * prod.quantity, 0)

    const [taxTotal, setTaxTotal] = useState(0)
    const [pLink, setPLink] = useState('paymentfailed')

    useEffect(() => {
        const TaxTotalFunc = () => {
            if (totalPrice.toFixed(2) > 0) {
                setTaxTotal(3.00)
            } else {
                setTaxTotal(0)
            }
        }
        TaxTotalFunc()

        if (taxTotal !== 0) {
            setPLink('paymentsuccess')
        }
    }, [taxTotal, totalPrice])



    return (
        <div className='w-[372px] h-[504px] absolute top-[340px] left-[894px] '>
            <h5 className='font-inter font-[600] text-[16px] leading-[19.36px] text-[#0E1422] absolute top-[16px]'>Your Order</h5>
            <div className='w-[372px] h-[44px] absolute top-[99px] flex justify-between items-center'>
                <div className='w-[265px] h-[40px] flex gap-[12px] overflow-scroll'>
                    {cartItems.map((item: { productid: number; quantity: number; name: string; price: number; src: string }) => (
                        <CheckoutItems
                            key={item.productid}
                            productid={item.productid}
                            quantity={item.quantity}
                            name={item.name}
                            price={item.price}
                            src={item.src}
                        />
                    ))}

                </div>
                <button onClick={CloseTab} className='w-[108px] h-[44px] rounded-[4px] border py-[12px] px-[24px] flex gap-[6px] border-[#B6B7BC] items-center justify-center text-center font-inter font-[500] text-[14px] leading-[24.5px] text-[#5C5F6A]'>Edit Cart</button>

                <div className='w-[372px] h-[25px] absolute top-[110px]  flex justify-between items-center'>
                    <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#5C5F6A]'>Subtotal:</span>
                    <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#0E1422]'>${totalPrice.toFixed(2)}</span>
                </div>
                <div className='w-[372px] h-[25px] absolute top-[150px]  flex justify-between items-center'>
                    <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#5C5F6A]'>Shipping: </span>
                    <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#0E1422]'>Free</span>
                </div>
                <div className='w-[372px] h-[25px] absolute top-[190px]  flex justify-between items-center'>
                    <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#5C5F6A]'>Tax: </span>
                    <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#0E1422]'>${taxTotal}</span>
                </div>
                <div className='border-b w-[372px] h-[24px] absolute top-[210px] '></div>
                <div className='w-[372px] h-[25px] absolute top-[260px]  flex justify-between items-center'>
                    <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#5C5F6A]'>Total </span>
                    <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#0E1422]'>${(totalPrice + taxTotal).toFixed(2)}</span>
                </div>
                <Link to={`/${pLink}`}>
                    <button className='w-[372px] h-[44px] absolute top-[320px] right-[0px]  rounded-[4px] py-[12px] px-[24px] flex justify-center items-center text-center gap-[6px] bg-[#0E1422] text-white font-inter font-[500] text-[14px] leading-[24.5px]'>Checkout</button>
                </Link>
            </div>
        </div>
    )
}

export default CheckoutPlaceOrder