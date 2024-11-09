import React, { FormEvent, useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Youlike from "./Youlike";
import { useParams } from "react-router-dom";

const DetailsRev = () => {
  const { userid } = useParams<{ userid: any }>();

  const list = [
    {
      id: 0,
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: "$109.95",
      category: "men's clothing",
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      src: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 1,
      name: "Mens Casual Premium Slim Fit T-Shirts",
      price: "$22.3",
      category: "men's clothing",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      src: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 2,
      name: "Mens Cotton Jacket",
      price: "$55.99",
      category: "men's clothing",
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      src: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      id: 3,
      name: "Mens Casual Slim Fit",
      price: "$15.99",
      category: "men's clothing",
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      src: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      id: 4,
      name: "Elegant Ebony Sweatshirts",
      price: "$35.00",
      category: "men's clothing",
      description:
        " Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.",
      src: "/Images/maika.png",
    },
    {
      id: 5,
      name: "Sleek and Cozy Black",
      price: "$57.00",
      category: "men's clothing",
      description:
        "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.",
      src: "/Images/meoremaika.png",
    },
    {
      id: 6,
      name: "Raw Black Tees",
      price: "$19.00",
      category: "men's clothing",
      description:
        "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.",
      src: "/Images/mesamemaika.png",
    },
    {
      id: 7,
      name: "MOCKUP Black",
      price: "$30.00",
      category: "men's clothing",
      description:
        "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.",
      src: "/Images/meotxemaika.png",
    },
    {
      id: 8,
      name: "Classic Monochrome Tees",
      category: "men's clothing",
      description:
        "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.",
      price: '35.00',
      src: "/Images/cover.svg",
    },
    {
      id: 9,
      name: "Monochromatic Wardrobe",
      category: "men's clothing",
      description:
        "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.",
      price: '27.00',
      src: "/Images/cover1.svg",
    },
    {
      id: 11,
      name: "Essential Neutrals",
      category: "men's clothing",
      description:
        "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.",
      price: '22.00',
      src: "/Images/cover2.svg",
    },
    {
      id: 12,
      name: "UTRAANET Black",
      category: "men's clothing",
      description:
        "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.",
      price: '43.00',
      src: "/Images/cover3.svg",
    },
    {
      id: 13,
      name: "Elegant Ebony Sweatshirts",
      category: "men's clothing",
      description:
        "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.",
      price: '35.00',
      src: "/Images/cover4.svg",
    },
    {
      id: 14,
      name: "Sleek and Cozy Black",
      category: "men's clothing",
      description:
        "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.",
      price: '57.00',
      src: "/Images/cover5.svg",
    },
    {
      id: 15,
      name: "Raw Black Tees",
      category: "men's clothing",
      description:
        "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.",
      price: '19.00',
      src: "/Images/cover6.svg",
    },
    {
      id: 16,
      name: "MOCKUP Black",
      category: "men's clothing",
      description:
        "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.",
      price: '30.00',
      src: "/Images/cover7.svg",
    },
    {
      id: 17,
      name: "Athletic Shirt",
      category: "men's clothing",
      description:
        "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.",
      price: '35.00',
      src: "/Images/cover8.svg",
    }
  ];

  const item = list[Number(userid)];

  const [bg, setBg] = useState("#F6F6F6");
  const [bg2, setBg2] = useState("");
  const [det, setDet] = useState("");
  const [rev, setRev] = useState("hidden");
  const [ragac, setRagac] = useState("top-[1434px]");

  const click = () => {
    if (bg === "") {
      setBg("#F6F6F6");
      setBg2("");
      setRev("hidden");
      setDet("");
      setRagac("top-[1434px]");
    }
    return null;
  };
  const click2 = () => {
    if (bg2 === "") {
      setBg2("#F6F6F6");
      setBg("");
      setDet("hidden");
      setRev("");
      setRagac("top-[1867px]");
    }
    return null;
  };

  const [revTab, setRevTab] = useState('hidden');

  const revTabCLick = () => {
    if (revTab === 'hidden') {
      setRevTab('flex')
    } else {
      setRevTab('hidden')
    }
  }

  const [revEmail, setRevEmail] = useState<string>("")
  const [revName, setRevName] = useState<string>("")
  const [revMess, setRevMess] = useState<string>("")
  const [elapsedTime, setElapsedTime] = useState<number>(0); 
  const [startTime, setStartTime] = useState<number | null>(null)

  useEffect(() => {
    const storedStartTime = localStorage.getItem('startTime');
    if (storedStartTime) {
      const parsedStartTime = Number(storedStartTime);
      setStartTime(parsedStartTime);
    }
  }, []);


  useEffect(() => {
    if (startTime === null) return; // If no start time, do nothing

    // Calculate elapsed time once on page refresh
    const storedElapsedTime = Number(localStorage.getItem('elapsedTime') || 0);
    const currentElapsedTime = Math.floor((new Date().getTime() - startTime) / 1000);
    if (currentElapsedTime !== storedElapsedTime) {
      localStorage.setItem('elapsedTime', currentElapsedTime.toString());
      setElapsedTime(currentElapsedTime); // Update state with the elapsed time
    }
  }, [startTime]); 




  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const currentTime = new Date().getTime();
    setStartTime(currentTime);
    setElapsedTime(0); // Reset elapsed time on submit

    localStorage.setItem('startTime', currentTime.toString());
    localStorage.setItem('elapsedTime', '0');

    const revData = { revEmail, revName, revMess };
    localStorage.setItem('user', JSON.stringify(revData));

    setRevEmail('');
    setRevName('');
    setRevMess('');
  };

  const storedUserData = localStorage.getItem('user');
  const user = storedUserData ? JSON.parse(storedUserData) : null;

  let initials = '';
  if (user && user.revName) {
    const nameParts = user.revName.split(' ');
  
    if (nameParts.length >= 2) {
      const [firstName, lastName] = nameParts;
      initials = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
    } else if (nameParts.length === 1) {
      initials = nameParts[0].charAt(0).toUpperCase();
    }
  }

  const formatTime = (timeInSeconds: number) => {
    if (timeInSeconds < 60) {
      return `${timeInSeconds} second${timeInSeconds !== 1 ? 's' : ''}`;
    } else {
      const minutes = Math.floor(timeInSeconds / 60);
      return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    }
  };


  const newInitials = user
  ? {
      ...user,
      logo: initials,
      date: `${formatTime(elapsedTime)} ago`,
    }
  : null;





  const RevList = [
    {
      id: 11,
      logo: 'ED',
      revName: 'Emily Davis',
      date: '1 Week ago',
      revMess: "This company always goes above and beyond to satisfy their customers.",
    },
    {
      id: 12,
      logo: "DS",
      revName: "Daniel Smith",
      date: '2 Months ago',
      revMess: "I can't believe how affordable and high-quality this item is!"
    },
    {
      id: 13,
      logo: "BC",
      revName: "Benjamin Clark",
      date: "23 April",
      revMess: 'These guys know their stuff, and it shows in their products.'
    }
  ]

  if (newInitials) {
    RevList.push(newInitials);
  }

  return (
    <div>
      <div className="w-[241px] h-[98px] absolute top-[1006px] left-[174px] flex flex-col gap-[16px]">
        <button onClick={click}>
          <div
            className={`w-[241px] h-[41px] rounded-[8px] py-[8px] px-[24px] flex gap-[10px] bg-[${bg}] items-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="3"
              viewBox="0 0 16 3"
              fill="none"
            >
              <path
                d="M2.14289 2.07145C1.8273 2.07145 1.57146 1.81561 1.57146 1.50002C1.57146 1.18443 1.8273 0.928589 2.14289 0.928589"
                stroke="#0E1422"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.14289 2.07145C2.45847 2.07145 2.71431 1.81561 2.71431 1.50002C2.71431 1.18443 2.45847 0.928589 2.14289 0.928589"
                stroke="#0E1422"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.00003 2.07145C7.68444 2.07145 7.4286 1.81561 7.4286 1.50002C7.4286 1.18443 7.68444 0.928589 8.00003 0.928589"
                stroke="#0E1422"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.00003 2.07145C8.31562 2.07145 8.57146 1.81561 8.57146 1.50002C8.57146 1.18443 8.31562 0.928589 8.00003 0.928589"
                stroke="#0E1422"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.8571 2.07145C13.5415 2.07145 13.2857 1.81561 13.2857 1.50002C13.2857 1.18443 13.5415 0.928589 13.8571 0.928589"
                stroke="#0E1422"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.8571 2.07145C14.1728 2.07145 14.4285 1.81561 14.4285 1.50002C14.4285 1.18443 14.1728 0.928589 13.8571 0.928589"
                stroke="#0E1422"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-inter font-[500] text-[14px] leading-[24.5px] text-[#0E1422] outline-none">
              Details
            </span>
          </div>
        </button>
        <button onClick={click2}>
          <div
            className={`w-[241px] h-[41px] rounded-[8px] py-[8px] px-[24px] flex gap-[10px] bg-[${bg2}] items-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14"
              viewBox="0 0 16 15"
              fill="none"
            >
              <path
                d="M8 1L10.163 5.27865L15 5.96898L11.5 9.29758L12.326 14L8 11.7787L3.674 14L4.5 9.29758L1 5.96898L5.837 5.27865L8 1Z"
                stroke="#5C5F6A"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-inter font-[500] text-[14px] leading-[24.5px] text-[#0E1422] outline-none">
              Reviews
            </span>
          </div>
        </button>
      </div>
      <div
        className={`w-[727px] h-[324px] ${det} absolute top-[934px] left-[447px]`}
      >
        <h5 className="w-[45px] h-[19px] font-inter font-[600] text-[16px] leading-[19.36px] items-center text-[#000000]">
          Detail
        </h5>
        <p className="w-[727px] h-[125px] relative top-[43px] font-inter font-[400] text-[14px] leading-[24.5px] text-[#5C5F6A]">
          {item.description}
        </p>
        <div className="w-[193px] h-[100px] absolute top-[224px] flex justify-center">
          <ul className="font-inter font-[400] text-[14px] leading-[24.5px] text-[#5C5F6A] list-disc">
            <li>Premium Quality</li>
            <li>Versatile Wardrobe Staple</li>
            <li>Available in Various Sizes</li>
            <li>Tailored Fit</li>
          </ul>
        </div>
      </div>
      <div
        className={`w-[727px] h-[813px] ${rev} absolute top-[934px] left-[447px] `}
      >
        <div className="w-[727px] h-[198px] relative left-[1px] border-b border-[#E9E9EB]">
          <h5 className="w-[65px] h-[19px] font-inter font-[600] text-[16px] leading-[19.36px] text-[#000000]">
            Reviews
          </h5>
          <div className="w-[162px] h-[39px] absolute top-[35px] flex items-center">
            <h2 className="w-[51px] h-[39px] font-inter font-[700] text-[32px] leading-[38.73px] text-[#0E1422]">
              4.2
            </h2>
            <span className="w-[95px] h-[25px] absolute top-[13px] left-[67px] font-inter font-[400] text-[14px] leading-[24.5px] text-[#71747E]">
              — 54 Reviews
            </span>
          </div>
          <button onClick={revTabCLick} className="w-[155px] h-[44px] relative top-[114px] text-center justify-center items-center rounded-[4px] border py-[12px] px-[24px] flex gap-[6px] bg-[#FFFFFF] border-[#0E1422]">
            Write a review
          </button>
          <div className="w-[106px] h-[24px] absolute top-[158px] left-[621px] rounded-[4px] px-[10px] flex gap-[5px] items-center hover:cursor-pointer">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 text-[12px]  bg-white leading-[24px] tracking-[5%] text-sm font-inter text-[#5C5F6A] font-[500]">
                  SORT BY
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 h-5 w-5 text-gray-400"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <span className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                      Sort from a-z
                    </span>
                  </MenuItem>
                  <MenuItem>
                    <span className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                      Sort from z-a
                    </span>
                  </MenuItem>
                  <MenuItem>
                    <span className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                      Popularity
                    </span>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
        <div className="flex flex-col items-center absolute bg-white h-[500px] overflow-scroll">
          {RevList.map((costumer) => (
            <div className="w-[727px] h-[161px] rounded-[4px]">
              <div className="w-[48px] h-[48px] relative top-[45px] left-[8px] rounded-[100px] py-[2px] items-center  justify-center px-[6px] flex gap-[10px] bg-[#F0F1FF]">
                <span className="w-[19px] h-[25px] font-inter font-[400] text-[14px] text-center leading-[24.5px]  text-[#4078FF]">
                  {costumer.logo}
                </span>
              </div>
              <div className="w-[630px] h-[96px] absolute left-[80px] flex flex-col justify-between">
                <div className="w-[630px] h-[55px] flex flex-col gap-[6px]">
                  <div className="w-[630px] h-[25px] flex justify-between items-center">
                    <span className=" h-[25px] font-inter font-[500] text-[14px] leading-[24.5px] items-center text-[#0E1422]">
                      {costumer.revName}
                    </span>
                    <div className="flex items-center gap-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8 0.5L10.472 5.43691L16 6.23344L12 10.0741L12.944 15.5L8 12.9369L3.056 15.5L4 10.0741L0 6.23344L5.528 5.43691L8 0.5Z"
                          fill="#5C5F6A"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8 0.5L10.472 5.43691L16 6.23344L12 10.0741L12.944 15.5L8 12.9369L3.056 15.5L4 10.0741L0 6.23344L5.528 5.43691L8 0.5Z"
                          fill="#5C5F6A"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8 0.5L10.472 5.43691L16 6.23344L12 10.0741L12.944 15.5L8 12.9369L3.056 15.5L4 10.0741L0 6.23344L5.528 5.43691L8 0.5Z"
                          fill="#5C5F6A"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8 0.5L10.472 5.43691L16 6.23344L12 10.0741L12.944 15.5L8 12.9369L3.056 15.5L4 10.0741L0 6.23344L5.528 5.43691L8 0.5Z"
                          fill="#5C5F6A"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8 1.5L10.163 5.77865L15 6.46898L11.5 9.79758L12.326 14.5L8 12.2787L3.674 14.5L4.5 9.79758L1 6.46898L5.837 5.77865L8 1.5Z"
                          stroke="#5C5F6A"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="h-[24px] font-inter font-[500] text-[12px] leading-[24px] tracking-[5%] text-[#5C5F6A]">
                    {costumer.date}
                  </span>
                </div>
                <p className="w-[581px] h-[25px] font-inter font-[400] text-[14px] leading-[24.5px] text-[#5C5F6A]">
                  {costumer.revMess}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className=" h-[44px] absolute top-[769px] left-[276px] rounded-[4px] border py-[12px] px-[24px] flex text-center items-center gap-[6px] bg-[#FFFFFF] border-[#B6B7BC] font-inter font-[500] text-[14px] leading-[24.5px] text-[#5C5F6A]">
          Load more reviews
        </button>
      </div>
      <div
        className={`w-[1092px] h-[559px] absolute ${ragac} space-y-[56px] left-[174px]`}
      >
        <div className="h-[53px]">
          <span className="w-[219px] h-[29px] absolute top-[16px] left-[12px] font-inter font-[700] text-[24px] leading-[29.05px] text-[#0E1422]">
            You might also like
          </span>
          <span className="w-[127px] h-[24px] absolute top-[53px] left-[14px] font-inter font-[500] text-[12px] leading-[24px] tracking-[5%] text-[#878A92]">
            SIMILAR PRODUCTS
          </span>
        </div>
        <Youlike />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={`w-[424px] h-[600px] bg-white border-2 relative top-[1007px] rounded-md left-[50%] ${revTab}`}>
          <div className="w-[424px] h-[83px] border-b  ">
            <div className="w-[344px] h-[32px] absolute top-[32px] left-[40px] flex justify-between items-center">
              <h5 className="font-inter font-[600] text-[16px] leading-[19.36px] text-[#0E1422]">Write Review</h5>
              <button onClick={revTabCLick}>
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
          <div className="w-[344px] h-[69px] absolute  top-[124px] left-[40px] ">
            <span className="font-inter font-[500] text-[14px] leading-[24.5px] text-[#474B57]">Email</span>
            <input type="email" value={revEmail} onChange={(e) => setRevEmail(e.target.value)} required className="w-[344px] h-[45px] rounded-[6px] border py-[10px] px-[15px] flex gap-[8px] border-[#E6E7E8] outline-none placeholder:font-inter font-[400] text-[15px] leading-[24.5px] text-[#5C5F6A]" />
          </div>
          <div className="w-[344px] h-[69px] absolute  top-[208px] left-[40px] ">
            <span className="font-inter font-[500] text-[14px] leading-[24.5px] text-[#474B57]">Full name</span>
            <input type="text" value={revName} onChange={(e) => setRevName(e.target.value)} required className="w-[344px] h-[45px] rounded-[6px] border py-[10px] px-[15px] flex gap-[8px] border-[#E6E7E8] outline-none placeholder:font-inter font-[400] text-[15px] leading-[24.5px] text-[#5C5F6A]" />
          </div>
          <div className="w-[344px] h-[69px] absolute  top-[300px] left-[40px] ">
            <span className="font-inter font-[500] text-[14px] leading-[24.5px] text-[#474B57]">Review</span>
            <textarea value={revMess} onChange={(e) => setRevMess(e.target.value)} required className="w-[344px] h-[128px] rounded-[6px] border py-[10px] px-[15px] flex gap-[8px] border-[#E6E7E8] outline-none placeholder:font-inter font-[400] text-[15px] leading-[24.5px] text-[#5C5F6A]" />
          </div>
          <button className="w-[344px] h-[44px] absolute top-[500px] left-[40px] rounded-[4px] py-[12px] px-[24px] flex gap-[8px] bg-[#0E1422] text-white justify-center items-center font-inter font-[500] text-[14px] leading-[24.5px]" type="submit">Submit Your Review</button>
        </div>
      </form>
    </div>
  );
};

export default DetailsRev;
