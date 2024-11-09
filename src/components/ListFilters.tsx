import React, { useState } from 'react'
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";


const ListFilters = () => {



    return (
        <div>
            <div className='w-[248px] h-[77px] absolute top-[228px] left-[452px]'>
                <span className='font-inter font-[500] text-[14px] leading-[24.5px]'>Applied Filters:</span>
                <div className='w-[227px] h-[36px] absolute top-[37px] flex gap-[12px] '>
                    <div className='w-[111px] h-[36px] rounded-full border py-[2px] px-[16px] flex gpa-[8px] items-center justify-between border-[#E6E7E8]'>
                        <span className='font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422]'>Perfume</span>
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17px"
                                height="17px"
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
                    <div className='w-[111px] h-[36px] rounded-full border py-[2px] px-[16px] flex gpa-[8px] items-center justify-between border-[#E6E7E8]'>
                        <span className='font-inter font-[500] text-[12px] leading-[24px] text-[#0E1422]'>Size:M</span>
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17px"
                                height="17px"
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
            </div>

            <div className='w-[813px] h-[24px] absolute top-[329px] left-[452px] flex items-center justify-between '>
                <span className='font-inter font-[500] text-[12px] leading-[24px] text-[#5C5F6A]'>Showing 1-9 of 36 results.</span>
                <div className="w-[106px] h-[24px] rounded-[4px] px-[10px] flex gap-[5px] items-center hover:cursor-pointer">
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 text-[12px]  bg-white leading-[24px] tracking-[5%]  font-inter text-[#5C5F6A] font-[500]">
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
            <div>
                
            </div>
        </div>
    )
}

export default ListFilters