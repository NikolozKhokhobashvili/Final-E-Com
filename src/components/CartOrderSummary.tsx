import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartPageProducts from './CartPageProducts';


const CartOrderSummary = () => {

  const statusTab = useSelector((store: any) => store.cart.statusTab);
  const cartItems = useSelector((store: any) => store.cart.items);


  const totalPrice = cartItems.reduce((total: number, prod: {
    quantity: number; price: number;
  }, quantity: any) => total + prod.price * prod.quantity, 0)

  const [taxTotal, setTaxTotal] = useState(0)



  useEffect(() => {
    const TaxTotalFunc = () => {
      if (totalPrice.toFixed(2) > 0) {
        setTaxTotal(3.00)
      } else {
        setTaxTotal(0)
      }
    }
    TaxTotalFunc()
  }, [totalPrice])

  return (
    <div>
      <div className='w-[341px] h-[430px] absolute top-[340px] left-[925px] rounded-4px border border-[#E6E7E8]'>
        <h5 className='absolute top-[32px] left-[24px] font-inter font-[600] text-[16px] leading-[19.36px] text-[#0E1422]'>Order Summary</h5>
        <div className='w-[293px] h-[25px] absolute top-[91px] left-[24px] flex justify-between items-center'>
          <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#5C5F6A]'>Subtotal:</span>
          <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#0E1422]'>${totalPrice.toFixed(2)}</span>
        </div>
        <div className='w-[293px] h-[25px] absolute top-[128px] left-[24px] flex justify-between items-center'>
          <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#5C5F6A]'>Shipping: </span>
          <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#0E1422]'>Free</span>
        </div>
        <div className='w-[293px] h-[25px] absolute top-[165px] left-[24px] flex justify-between items-center'>
          <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#5C5F6A]'>Tax: </span>
          <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#0E1422]'>{taxTotal}</span>
        </div>
        <div className='border-b w-[293px] h-[24px] absolute top-[190px] left-[24px]'></div>
        <div className='w-[293px] h-[25px] absolute top-[239px] left-[24px] flex justify-between items-center'>
          <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#5C5F6A]'>Total </span>
          <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#0E1422]'>${(totalPrice + taxTotal).toFixed(2)}</span>
        </div>
        <Link to='/checkout'>
          <button className='w-[296px] h-[44px] absolute top-[296px] left-[24px] rounded-[4px] py-[12px] px-[24px] flex justify-center items-center text-center gap-[6px] bg-[#0E1422] text-white font-inter font-[500] text-[14px] leading-[24.5px]'>Checkout</button>
        </Link>
        <Link to='/list'>
          <span className='font-inter font-[500] text-[12px] leading-[18px] underline decoration-solid text-[#0E1422] absolute top-[372px] left-[116px]'>Continue Shopping</span>
        </Link>
      </div>

      <div className='w-[628px] h-[296px] absolute top-[393px] left-[175px] border-t overflow-scroll border-[#E9E9EB]'>
        {cartItems.map((item: { productid: number; quantity: number; name: string; price: number; src: string }) => (
          <CartPageProducts
            key={item.productid}
            productid={item.productid}
            quantity={item.quantity}
            name={item.name}
            price={item.price}
            src={item.src}
          />
        ))}
      </div>

    </div>
  )
}

export default CartOrderSummary