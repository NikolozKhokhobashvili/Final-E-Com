import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import DetailsRevbtns from "../components/DetailsRevbtns";
import { addToCart } from "../store/app/Cart";

const Product = () => {
  const dispatch = useDispatch();

  const handleaddtocart = () => {
    if (item && item.id) {
      dispatch(
        addToCart({
          productid: item.id,
          quantity: quantity,
          name: item.name,
          price: item.price,
          src: item.src
        })
      );
      console.log("Added to cart:", item.name, item.id, "Quantity:", quantity);
    } else {
      console.log("Error: Item ID not found");
    }
  };

  const [quantity, setQuantity] = useState<number>(1);
  const handleMinusQauntity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const { userid } = useParams<{ userid: any }>();

  const list = [
    {
      id: 10,
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      category: "men's clothing",
      src: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 1,
      name: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      category: "men's clothing",
      src: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 2,
      name: "Mens Cotton Jacket",
      price: 55.99,
      category: "men's clothing",
      src: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      id: 3,
      name: "Mens Casual Slim Fit",
      price: 15.99,
      category: "men's clothing",
      src: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      id: 4,
      name: "Elegant Ebony Sweatshirts",
      price: 35.00,
      category: "men's clothing",
      src: "/Images/maika.png",
    },
    {
      id: 5,
      name: "Sleek and Cozy Black",
      price: 57.00,
      category: "men's clothing",
      src: "/Images/meoremaika.png",
    },
    {
      id: 6,
      name: "Raw Black Tees",
      price: 19.00,
      category: "men's clothing",
      src: "/Images/mesamemaika.png",
    },
    {
      id: 7,
      name: "MOCKUP Black",
      price: 30.00,
      category: "men's clothing",
      src: "/Images/meotxemaika.png",
    },
  ];

  const item = list[userid];

  const [none, setNone] = useState("border");
  const [meore, setMeore] = useState("");
  const [mesame, setMesame] = useState("");

  const Changecolor = () => {
    if (none === "") {
      setNone("border");
      setMeore("");
      setMesame("");
    }
    return null;
  };

  const Changecolor2 = () => {
    if (meore === "") {
      setNone("");
      setMeore("border");
      setMesame("");
    }
    return null;
  };
  const Changecolor3 = () => {
    if (mesame === "") {
      setNone("");
      setMeore("");
      setMesame("border");
    }
    return null;
  };

  const [first, setFirst] = useState("#0E1422");
  const [second, setSecond] = useState("#E6E7E8");
  const [third, setThird] = useState("#E6E7E8");
  const [fourth, setFourth] = useState("#E6E7E8");
  const [fifth, setFifth] = useState("#E6E7E8");

  const Size = () => {
    if (first === "#E6E7E8") {
      setFirst("#0E1422");
      setSecond("#E6E7E8");
      setThird("#E6E7E8");
      setFourth("#E6E7E8");
      setFifth("#E6E7E8");
    }
    return null;
  };
  const Size2 = () => {
    if (second === "#E6E7E8") {
      setFirst("#E6E7E8");
      setSecond("#0E1422");
      setThird("#E6E7E8");
      setFourth("#E6E7E8");
      setFifth("#E6E7E8");
    }
    return null;
  };
  const Size3 = () => {
    if (third === "#E6E7E8") {
      setFirst("#E6E7E8");
      setSecond("#E6E7E8");
      setThird("#0E1422");
      setFourth("#E6E7E8");
      setFifth("#E6E7E8");
    }
    return null;
  };
  const Size4 = () => {
    if (fourth === "#E6E7E8") {
      setFirst("#E6E7E8");
      setSecond("#E6E7E8");
      setThird("#E6E7E8");
      setFourth("#0E1422");
      setFifth("#E6E7E8");
    }
    return null;
  };
  const Size5 = () => {
    if (fifth === "#E6E7E8") {
      setFirst("#E6E7E8");
      setSecond("#E6E7E8");
      setThird("#E6E7E8");
      setFourth("#E6E7E8");
      setFifth("#0E1422");
    }
    return null;
  };

  const [heart, setHeart] = useState("none");

  const fav = () => {
    if (heart === "none") {
      setHeart("red");
    } else {
      setHeart("none");
    }
  };

  const [share, setShare] = useState('hidden');

  const ShareCLick = () => {
    if (share === 'hidden') {
      setShare('flex')
    } else {
      setShare('hidden')
    }
  }

  const link = 'https://devcut.io/ecommerce/prod...';

  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(link).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [item]);
  return (
    <div>
      <div className="w-[1116px] h-[28px] absolute top-[140px] left-[162px] right-[162px] px-[12px] flex gap-[8px items-center">
        <div className=" h-[25px] rounded-[4px] flex gap-[4px] items-center">
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
            {item.category}
          </span>
        </div>
      </div>

      <div className="w-[1092px] h-[574px] absolute top-[184px] left-[174px]">
        <div className="w-[534px] h-[574px] rounded-[5px] border border-[#F6F6F6]">
          <img
            className="w-[288px] h-[404px] absolute top-[29px] left-[123px]"
            src={item.src}
            alt="shirt"
          />
        </div>
        <div className="w-[438px] h-[562px] absolute top-[4px] left-[654px]">
          <div className="w-[438px] h-[29px] absolute top-[12px] flex items-center justify-between">
            <h3 className=" h-[29px] font-inter font-[700] text-[24px] leading-[29.05px] items-center text-[#0E1422] overflow-hidden">
              {item.name}
            </h3>
            <button onClick={ShareCLick}><div className="w-[24px] h-[24px] py-[2px] px-[3px] flex gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                className="flex justify-center items-center hover:cursor-pointer"
                viewBox="0 0 18 21"
                fill="none"
              >
                <path
                  d="M5.96889 11.859L12.04 15.441M12.0311 5.559L5.96889 9.141M17 4.2C17 5.69117 15.8061 6.9 14.3333 6.9C12.8606 6.9 11.6667 5.69117 11.6667 4.2C11.6667 2.70883 12.8606 1.5 14.3333 1.5C15.8061 1.5 17 2.70883 17 4.2ZM6.33333 10.5C6.33333 11.9912 5.13943 13.2 3.66667 13.2C2.19391 13.2 1 11.9912 1 10.5C1 9.00883 2.19391 7.8 3.66667 7.8C5.13943 7.8 6.33333 9.00883 6.33333 10.5ZM17 16.8C17 18.2912 15.8061 19.5 14.3333 19.5C12.8606 19.5 11.6667 18.2912 11.6667 16.8C11.6667 15.3088 12.8606 14.1 14.3333 14.1C15.8061 14.1 17 15.3088 17 16.8Z"
                  stroke="#5C5F6A"
                  strokeWidth="1.43"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div></button>
          </div>
          <div className="w-[272px] h-[28px] absolute top-[53px] rounded-[100px] pr-[8px] flex gap-[8px]">
            <div className="w-[167px] h-[28px] rounded-[100px] border py-[2px] px-[16px] flex gap-[8px] items-center bg-[#F6F6F6]">
              <div className="w-[24px] h-[24px] py-[3px] px-[2px] flex-[10px] justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8 0.5L10.472 5.43691L16 6.23344L12 10.0741L12.944 15.5L8 12.9369L3.056 15.5L4 10.0741L0 6.23344L5.528 5.43691L8 0.5Z"
                    fill="#5C5F6A"
                  />
                </svg>
              </div>
              <label className="w-[103px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] text-[#5C5F6A]">
                4.2 — 54 Reviews{" "}
              </label>
            </div>
            <div className="w-[100px] h-[28px] rounded-[100px] border py-[2px] px-[16px] flex gap-[8px] border-[#E6E7E8] justify-center items-center">
              <span className="w-[57px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] text-[#5C5F6A]">
                IN STOCK
              </span>
            </div>
          </div>
          <h4 className="w-[62px] h-[22px] absolute top-[105px] font-inter font-[600] text-[18px] leading-[21.78px] items-center text-[#0E1422]">
            ${item.price}
          </h4>
          <div className="w-[152px] h-[76px] absolute top-[159px]">
            <label className="w-[126px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] tracking-[5%] items-center text-[#5C5F6A]">
              Available Colors
            </label>
            <div className="w-[116px] h-[32px] absolute top-[34px] flex gap-[10px] items-center">
              <div
                onClick={Changecolor}
                className={`w-[32px] h-[32px] rounded-[100px]  border-[#0E1422] flex gap-[8px] justify-center items-center hover:cursor-pointer ${none}`}
              >
                <div className="w-[24px] h-[24px] rounded-[100px] bg-[#A3BEF8]"></div>
              </div>
              <div
                onClick={Changecolor2}
                className={`w-[32px] h-[32px] rounded-[100px] ${meore} border-[#0E1422] flex gap-[8px] justify-center items-center hover:cursor-pointer`}
              >
                <div className="w-[24px] h-[24px] rounded-[100px] bg-[#FFD58A]"></div>
              </div>
              <div
                onClick={Changecolor3}
                className={`w-[32px] h-[32px] rounded-[100px] ${mesame} border-[#0E1422] flex gap-[8px] justify-center items-center hover:cursor-pointer`}
              >
                <div className="w-[24px] h-[24px] rounded-[100px] bg-[#83B18B]"></div>
              </div>
            </div>
          </div>
          <div className="w-[243px] h-[76px] absolute top-[251px]">
            <label className="w-[81px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] tracking-[5%] text-cemter text-[#5C5F6A]">
              SELECT SIZE
            </label>
            <div className="w-[232px] h-[40px] absolute top-[34px] flex gap-[8px] items-center">
              <div
                onClick={Size}
                className={`w-[40px] h-[40px] rounded-[4px] border border-[${first}] flex justify-center items-center hover:cursor-pointer`}
              >
                <label className="w-[8px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422] items-center flex hover:cursor-pointer">
                  S
                </label>
              </div>
              <div
                onClick={Size2}
                className={`w-[40px] h-[40px] rounded-[4px] border border-[${second}] flex justify-center items-center hover:cursor-pointer`}
              >
                <label className="w-[11px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422] items-center flex hover:cursor-pointer">
                  M
                </label>
              </div>
              <div
                onClick={Size3}
                className={`w-[40px] h-[40px] rounded-[4px] border border-[${third}] flex justify-center items-center hover:cursor-pointer`}
              >
                <label className="w-[8px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422] items-center flex hover:cursor-pointer">
                  L
                </label>
              </div>
              <div
                onClick={Size4}
                className={`w-[40px] h-[40px] rounded-[4px] border border-[${fourth}] flex justify-center items-center hover:cursor-pointer`}
              >
                <label className="w-[15px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422] items-center flex hover:cursor-pointer">
                  XL
                </label>
              </div>
              <div
                onClick={Size5}
                className={`w-[40px] h-[40px] rounded-[4px] border border-[${fifth}] flex justify-center items-center hover:cursor-pointer`}
              >
                <label className="w-[23px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422] items-center flex hover:cursor-pointer">
                  XXL
                </label>
              </div>
            </div>
          </div>

          <div className="w-[164px] h-[78px] absolute top-[359px]">
            <span className="w-[67px] h-[24px] font-inter font-[500] text-[12px] leading-[24px] tracking-[5%] items-center text-[#5C5F6A]">
              Quantity
            </span>
            <div className="w-[164px] h-[44px] absolute top-[34px] rounded-[4px] border flex justify-between px-[16px] border-[#E6E7E8] items-center">
              <button
                onClick={handleMinusQauntity}
                className="w-[20px] h-[20px] hover:cursor-pointer relative bottom-[9px]"
              >
                <svg
                  className="relative top-[10px] left-[4.17px]  flex text-center justify-center items-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="2"
                  viewBox="0 0 13 2"
                  fill="none"
                >
                  <path
                    d="M1.16675 1H11.1667"
                    stroke="#5C5F6A"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <span>{quantity}</span>
              <button
                onClick={handlePlusQuantity}
                className="w-[20px] h-[20px] hover:cursor-pointer relative bottom-[5px]"
              >
                <svg
                  className="relative top-[10px] left-[5px]  flex text-center justify-center items-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="2"
                  viewBox="0 0 13 2"
                  fill="none"
                >
                  <path
                    d="M1.16675 1H11.1667"
                    stroke="#5C5F6A"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  className="relative top-[4px] left-[8.8px]  flex text-center justify-center items-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="10"
                  viewBox="0 0 2 12"
                  fill="none"
                >
                  <path
                    d="M1 1V11"
                    stroke="#5C5F6A"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button
            onClick={handleaddtocart}
            className="w-[284px] h-[44px] absolute top-[477px] left-[1px] rounded-[4px] py-[12px] px-[24px]  gap-[6px] bg-[#0E1422] text-[#FFFFFF] font-inter font-[500] text-[14px] leading-[24.5px] flex justify-center"
          >
            Add to cart
          </button>
          <div className="w-[43px] h-[43px] absolute top-[477px] left-[301px] rounded-[4px] border flex gap-[10px] border-[#E6E7E8] justify-center items-center">
            <button>
              <svg
                onClick={fav}
                className="hover:cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill={heart}
              >
                <path
                  d="M12.5048 19.5L5.291 13.0513C1.37045 9.18258 7.13333 1.75337 12.5048 7.76384C17.8763 1.75337 23.6141 9.20729 19.72 13.0513L12.5048 19.5Z"
                  stroke="#5C5F6A"
                  strokeWidth="1.42857"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <span className="w-[235px] h-[24px] absolute top-[533px] left-[1px] font-inter font-[500] text-[12px] leading-[24px] tracking-[5%] items-center text-[#5C5F6A]">
            — Free shipping on orders $100+
          </span>
        </div>
      </div>
      <DetailsRevbtns />
      <div className={`bg-white border border-[#E9E9EB] flex items-center relative top-[200px] left-[530px] w-[400px]  h-[250px] ${share} rounded-md`}>
        <h5 className="absolute top-[32px] left-[40px] font-inter font-[600] text-[16px] leading-[19.36px] text-[#0E1422]">{isCopied ? 'Copied!' : 'Copy Link'}</h5>
        <div className="absolute top-[75px] left-[40px] w-[270px] h-[44px] rounded-[6px] border py-[10px] px-[15px] flex border-[#E6E7E8] text-center items-center justify-center overflow-scroll">
          <p className="font-inter font-[400] text-[14px] leading-[24px] text-[#333845]">{link}</p>
        </div>
        <button onClick={handleCopy}>
          <div className="absolute top-[75px] left-[316px] w-[44px] h-[44px] rounded-[6px] border">
            <div className="absolute left-[8px] top-[7px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                <path d="M14.143 6.99997V5.57139C14.143 5.19251 13.9925 4.82915 13.7246 4.56124C13.4567 4.29334 13.0933 4.14282 12.7145 4.14282H11.2859" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.71436 17H4.14293C3.76404 17 3.40068 16.8494 3.13277 16.5815C2.86487 16.3137 2.71436 15.9503 2.71436 15.5714V5.57139C2.71436 5.19251 2.86487 4.82915 3.13277 4.56124C3.40068 4.29334 3.76404 4.14282 4.14293 4.14282H5.5715" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.8573 9.85706H12.7145C11.9255 9.85706 11.2859 10.4967 11.2859 11.2856V19.8571C11.2859 20.6461 11.9255 21.2856 12.7145 21.2856H19.8573C20.6463 21.2856 21.2859 20.6461 21.2859 19.8571V11.2856C21.2859 10.4967 20.6463 9.85706 19.8573 9.85706Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.6429 2.71423H5.21436L5.80007 5.02852C5.83576 5.18342 5.92308 5.32156 6.04771 5.42022C6.17234 5.51888 6.32683 5.57219 6.48578 5.57138H10.3715C10.5305 5.57219 10.6849 5.51888 10.8096 5.42022C10.9342 5.32156 11.0215 5.18342 11.0572 5.02852L11.6429 2.71423Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.1428 14.1428H18.4285" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.1428 17H18.4285" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </button>
        <h5 className="absolute top-[159px] left-[40px] font-inter font-[600] text-[16px] leading-[19.36px] text-[#0E1422]">Share</h5>
        <div className="w-[216px] h-[24px] absolute top-[202px] left-[40px] flex gap-[20px] items-center">
          <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/"><div className="w-[24px] h-[24px] flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none">
              <path d="M9.34541 11.1651L9.86359 7.57337H6.6212V5.24169C6.6212 4.25835 7.07432 3.30085 8.52618 3.30085H10V0.242501C10 0.242501 8.66337 0 7.38476 0C4.71386 0 2.9688 1.72001 2.9688 4.83502V7.57254H0V11.1651H2.96801V19.8484C4.17832 20.0505 5.41089 20.0505 6.6212 19.8484V11.1651H9.34541Z" fill="#5C5F6A" />
            </svg>
          </div></a>

          <a rel="noopener noreferrer" target="_blank" href="https://x.com/?lang=en"><div className="w-[24px] h-[24px flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d="M0.319647 0L6.89228 9.27241L0 17H1.46911L7.54332 10.1899L12.3705 17H17L10.1222 7.2977L16.6316 0H15.1634L9.47203 6.38024L4.94912 0H0.319647Z" fill="#5C5F6A" />
            </svg>
          </div></a>
          
          <a rel="noopener noreferrer" target="_blank" href="https://www.pinterest.com/"><div className="w-[24px] h-[24px] flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
              <path d="M8.2678 0C2.87057 0 0 3.51248 0 7.34245C0 9.1191 0.977426 11.3341 2.54229 12.0366C2.77925 12.1449 2.90842 12.0991 2.9619 11.8749C3.00797 11.7058 3.21366 10.8866 3.31321 10.4999C3.33095 10.4397 3.33261 10.3759 3.31801 10.3148C3.30341 10.2538 3.27308 10.1977 3.23011 10.1524C2.71014 9.54243 2.29794 8.43161 2.29794 7.38912C2.29794 4.71747 4.38937 2.12415 7.94775 2.12415C11.0248 2.12415 13.178 4.15414 13.178 7.05745C13.178 10.3391 11.4675 12.6091 9.24605 12.6091C8.01687 12.6091 7.10115 11.6291 7.39158 10.4174C7.74207 8.97327 8.42989 7.41995 8.42989 6.37912C8.42989 5.4458 7.91073 4.67247 6.85021 4.67247C5.59798 4.67247 4.58271 5.93079 4.58271 7.62161C4.58271 8.69577 4.95706 9.42077 4.95706 9.42077L3.48846 15.4491C3.0993 17.0557 3.54111 19.6574 3.57896 19.8807C3.60282 20.0049 3.73939 20.0432 3.81591 19.9424C3.93768 19.7799 5.43426 17.6107 5.85386 16.0432C6.00689 15.4716 6.633 13.1557 6.633 13.1557C7.0452 13.9116 8.23572 14.5457 9.50357 14.5457C13.2751 14.5457 16 11.1791 16 7.00162C15.986 2.99665 12.6111 0 8.2678 0Z" fill="#5C5F6A" />
            </svg>
          </div></a>
          <a rel="noopener noreferrer" target="_blank" href="https://web.telegram.org/"> <div className="w-[24px] h-[24px] flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.37511 7.63495C6.74344 5.29579 10.3234 3.75412 12.1151 3.00912C17.2293 0.88162 18.2918 0.512454 18.9851 0.499954C19.1368 0.49662 19.4776 0.53412 19.6984 0.713287C19.8843 0.864954 19.9359 1.06912 19.9601 1.21245C19.9851 1.35579 20.0151 1.68162 19.9909 1.93745C19.7143 4.84912 18.5151 11.9158 17.9051 15.1775C17.6468 16.5575 17.1384 17.02 16.6468 17.0658C15.5768 17.1641 14.7643 16.3591 13.7284 15.68C12.1076 14.6175 11.1926 13.9558 9.61928 12.9191C7.80094 11.7208 8.97928 11.0625 10.0159 9.98579C10.2868 9.70412 14.9993 5.41829 15.0901 5.02912C15.1018 4.98079 15.1118 4.79995 15.0043 4.70412C14.8959 4.60829 14.7376 4.64079 14.6234 4.66662C14.4601 4.70412 11.8709 6.41579 6.85511 9.80162C6.12011 10.3058 5.45428 10.5516 4.85761 10.5391C4.20011 10.525 2.93511 10.1675 1.99511 9.86162C0.841777 9.48662 -0.0748895 9.28829 0.00511049 8.65162C0.0467772 8.31995 0.503444 7.98079 1.37511 7.63495Z" fill="#5C5F6A" />
            </svg>
          </div></a>

         
        </div>
        <button onClick={ShareCLick} className="absolute top-[5px] right-[10px]">
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
    </div>
  );
};

export default Product;
