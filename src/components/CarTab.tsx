import React from "react";
import { Link } from "react-router-dom";
import Cartitem from "./Cartitem";
import { useDispatch, useSelector } from "react-redux";
import { toggleTab } from "../store/app/Cart";

const CarTab = () => {
  const statusTab = useSelector((store: any) => store.cart.statusTab);
  const cartItems = useSelector((store: any) => store.cart.items);
  const dispatch = useDispatch();

  const CloseTab = () => {
    dispatch(toggleTab());
  };

  const totalPrice = cartItems.reduce((total: number, prod: {
    quantity: number; price: number;
  }, quantity: any) => total + prod.price * prod.quantity, 0)
  



  return (
    <div
      className={`fixed top-0 right-0 bg-[white] w-[416px] h-[700px] transform transition-transform duration-500 ${statusTab === false ? "translate-x-full" : ""}`}
    >
      <div className="w-[416px] h-[72px] bg-[#F6F6F6]">
        <h5 className="font-inter font-[600] text-[16px] leading-[19.36px] text-[#0E1422] absolute top-[26.5px] left-[32px]">
          Shopping Cart
        </h5>
        <button
          onClick={CloseTab}
          className="absolute top-[26.5px] left-[360px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
              fill="#0F1729"
            />
          </svg>
        </button>
      </div>
      <div className="h-[416px] overflow-scroll">
        {cartItems.map((item: { productid: number; quantity: number; name: string; price: number; src: string }) => (
          <Cartitem
            key={item.productid}
            productid={item.productid}
            quantity={item.quantity}
            name={item.name}
            price={item.price}
            src={item.src}
          />
        ))}
      </div>
      <div className="w-[352px] h-[200px] absolute bottom-[0px] left-[32px] border-t border-[#E9E9EB]">
        <div className="w-[352px] h-[17px] relative top-[16px] flex justify-between px-[4px] outline-none">
          <h6 className="font-inter font-[500] text-[14px] leading-[16.94px] text-[#0E1422]">
            Total
          </h6>
          <h6 className="font-inter font-[500] text-[14px] leading-[16.94px] text-[#0E1422]">
            ${totalPrice.toFixed(2)}
          </h6>
        </div>
        <Link to='/cart'>
          <button className="w-[352px] h-[40px] relative top-[40px] rounded-[4px] py-[12px] px-[20px] bg-[#0E1422] text-white flex justify-center text-center items-center font-[500] font-inter text-[14px] leading-[24.5px] outline-none">
            View Cart
          </button>
        </Link>
        <Link to="/checkout">
          <span className="relative top-[72px] left-[148px] font-inter font-[500] text-[12px] leading-[18px] text-[#5C5F6A] border-b border-[#000000]">
            Checkout
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CarTab;
