import React from "react";
import { Link } from "react-router-dom";

const Youlike = () =>{

    // const [data, setData] = useState([])

    // const FetchData = async () => {
    //     try {
    //         const res = await fetch('https://fakestoreapi.com/products?limit=4')
    //         if (!res.ok) {
    //             throw new Error("Network response was not ok");
    
    //         }
    //         const data = await res.json()
    //         setData(data)

    //         console.log(data);
            
    
    //     } catch (error) {
    //         console.error(error);
    
    //     }
    // }
    
    // useEffect(() => {
    //     FetchData()
    // }, [])

    const data = 
    [
        {
          "id": 0,
          "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          "price": 109.95,
          "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          "rating": {
            "rate": 3.9,
            "count": 120
          }
        },
        {
          "id": 1,
          "title": "Mens Casual Premium Slim Fit T-Shirts ",
          "price": 22.3,
          "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          "rating": {
            "rate": 4.1,
            "count": 259
          }
        },
        {
          "id": 2,
          "title": "Mens Cotton Jacket",
          "price": 55.99,
          "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          "rating": {
            "rate": 4.7,
            "count": 500
          }
        },
        {
          "id": 3,
          "title": "Mens Casual Slim Fit",
          "price": 15.99,
          "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          "rating": {
            "rate": 2.1,
            "count": 430
          }
        }
      ]

    return(
        <div className="flex w-[1092px] h-[434px] justify-between">
            {data.map((product: any) => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                        <div className="w-[264px] h-[434px] rounded-[4px] py-[16px] px-[8px] space-y-[24px]">
                            <div className="w-[248px] h-[312px] rounded-[4px] bg-[white]">
                                <img className="w-[200px] h-[275px] relative left-[6px]" src={product.image} alt="cover" />
                            </div>
                            <div className="w-[239px] h-[65px] relative top-[1px] left-[-1px] space-y-[12px]">
                                <span className="w-[94px] h-[25px] font-inter font-[500] text-[14px] leading-[24.5px] text-center text-[#000000] overflow-hidden">{product.title}</span>
                                <div className="w-[239px] h-[28px] space-x-[16px] items-center ">
                                    <span className="w-[89px] h-[28px] rounded-[100px] border py-[2px] px-[16px] gap-[8px] border-[#E6E7E8] font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422]">IN STOCK</span>
                                    <span className="w-[47px] h-[25px] font-inter font-[400] text-[14px] leading-[24.5px] items-center text-[#474B57]">${product.price}</span>
                                </div>
                            </div>
                            
                        </div>
                    </Link>
                ))}
        </div>
    )
}

export default Youlike;