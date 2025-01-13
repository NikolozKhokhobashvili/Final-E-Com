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

const CheckoutItems: React.FC<CartItemProps> = ({ key, productid, quantity, name, price, src }) => {


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
        <div>
            <div className='w-[40px] h-[40px] rounded-[100px] px-[11px] flex  justify-center items-center bg-[#F6F6F6]'>
                <img src={src} alt="cover" className="w-[35px] h-[35px]" />
            </div>

        </div>
    )
}

export default CheckoutItems