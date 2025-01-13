import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../store/app/Cart";



interface CartItemProps {
  key: number;
  productid: number;
  quantity: number;
  name: string;
  price: number;
  src: string
}

const Cartitem: React.FC<CartItemProps> = ({ key, productid, quantity, name, price, src }) => {

  const dispatch = useDispatch()

  const [totalQuant, setTotalQuant] = useState<number>(quantity)

  const totalprice = (price * quantity).toFixed(2)
  const handleMinus = () => {
    dispatch(changeQuantity({
      productid: productid,
      quantity: quantity - 1
    }))
  }
  const handlePlus = () => {
    dispatch(changeQuantity({
      productid: productid,
      quantity: quantity + 1
    }))
  }


  useEffect(()=>{
    setTotalQuant(quantity)
  },[quantity])

  return (
    <div className="flex flex-col">
      <div className="w-[352px] h-[112px] relative top-[20px] left-[32px] border-b border-[#E9E9EB] flex justify-between items-center gap-5">
        <div className="w-[80px] h-[80px] border border-[#F6F6F6] bg-[white] flex  justify-center items-center">
          <img src={src} alt="cover" className="w-[70px] h-[70px]" />
        </div>
        <div key={key}>
          <h3 className="font-inter font-[500] text-[14px] leading-[24.5px] item-center w-[168px]  h-[25px] overflow-scroll">
            {name}
          </h3>
          <span>${totalprice}</span>
        </div>
        <div className="w-20 flex justify-between gap-2">
          <button onClick={handleMinus} className="bg-gray-200 rounded-full w-6 h-6 text-black">
            -
          </button>
          <span>{totalQuant}</span>
          <button onClick={handlePlus} className="bg-gray-200 rounded-full w-6 h-6 text-black">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
