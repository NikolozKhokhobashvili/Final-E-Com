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


const CartPageProducts: React.FC<CartItemProps> = ({ key, productid, quantity, name, price, src }) => {


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


    useEffect(() => {
        setTotalQuant(quantity)
    }, [quantity])


    return (
        <div className="flex flex-col gap-[40px] mt-[48px]">
            <div className="w-[628px] h-[80px] flex items-center gap-[32px]">
                <div className="w-[80px] h-[80px] border border-2-[#F6F6F6] bg-[white] flex  justify-center items-center">
                    <img src={src} alt="cover" className="w-[70x] h-[70px]" />
                </div>
                <div key={key} className="flex items-center justify-between w-[300px]">
                    <h3 className="font-inter font-[500] text-[14px] leading-[24.5px] item-center w-[168px] text-[#0E1422]  h-[25px] overflow-scroll">
                        {name}
                    </h3>
                    <span className="font-inter font-[500] text-[14px] leading-[24.5px] text-[#0E1422]">${totalprice}</span>
                </div>
                <div className="w-[107] h-[40px] rounded-[4px] border  border-[#E6E7E8] px-[10px] items-center flex justify-between gap-2">
                    <button onClick={handleMinus} className=" mr-[5px]  w-6 h-6 text-black">
                        -
                    </button>
                    <span>{totalQuant}</span>
                    <button onClick={handlePlus} className=" ml-[5px] w-6 h-6 text-black">
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartPageProducts