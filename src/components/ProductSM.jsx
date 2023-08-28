import React from 'react'
import { AiFillFire } from 'react-icons/ai';
import { BiLogoVisa, BiLogoMastercard } from 'react-icons/bi';
import { BsPaypal } from 'react-icons/bs';
import { ImNotification } from 'react-icons/im';
import { GrStar, GrAmex } from 'react-icons/gr';
import { MdSecurity, MdKeyboardArrowRight } from 'react-icons/md';
import { FaCcDiscover, 
        FaCcJcb,
        FaCcDinersClub 
        } from 'react-icons/fa';


const ProductSM = () => {
  return (
   <> 
   <div className='grid grid-cols-1 gap-3 sm:gap-4 lg:hidden '>
    <div className="relative select-none px-5 py-3 text-center sm:px-8 sm:py-4 lg:px-6 lg:py-10">

        {/* Title for small device */}
        <div className='relative mb-2 flex justify-between sm:items-start md:items-center '>
            <div className='w-3/5 text-left text-xl text-gray-700'>
                <h1 className="font-serif text-base leading-6 xs:text-lg">iPad 6th Gen (2018) 9.7" </h1>
                <p className='text-sm'>
                    <span className='mr-2 text-xs'>5493 Sold</span>
                    <span className='inline-block rounded-full py-0 text-xxs font-bold text-gray-700 xs:py-1 xs:text-xs'> 
                    <span>
                        <span className='relative top-[2px] mr-1 inline-flex items-center xs:w-auto'>
                        <AiFillFire color='red' />
                        </span>
                        Selling Fast!
                    </span>

                    </span>
                </p>
            </div>
            <div className='w-2/5 text-right'>
                <div className='flex flex-col items-end'>
                    <p className='block font-bold text-gray-700 xs:text-xl'>
                    $125.00
                    </p>
                    <div>
                        <div>
                            <span className='px-1 text-xs text-gray-300 mb-2 '>new</span>
                            <span className="text-xs text-gray-300 line-through mb-2 text-right">$329.00</span>
                        </div>
                        <div className=" bg-red-400 ml-2 rounded  sm:block sm:order-last">
                            <span className="flex items-center justify-center p-1.5 text-center font-sans text-xxs font-bold text-white">62% Off</span>
                        </div>
                    </div>
                </div>

            </div>       
        </div>

             {/* Image for small device */}
        <div className="relative select-none px-5 py-3 text-center sm:px-8 sm:py-4 lg:px-6 lg:py-10">
                <div className='relative mb-2 flex justify-between sm:items-start md:items-center lg:hidden'></div>
                <div class="relative mx-auto mb-3 flex h-48 w-48 items-center justify-center xs:mb-2 sm:h-72 sm:w-72 lg:mb-0 lg:h-40 lg:w-40 xl:h-80 xl:w-80">
                    <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events mb-4 mt-3 h-full xl:mb-0 xl:mt-0 swiper-backface-hidden">
                        <div className='swiper-wrapper' >
                            <div className="swiper-slide swiper-slide-active" >
                                <img src='src\assets\iPhone.jpg' className="h-full min-h-full w-full min-w-full object-contain"/>
                            </div>

                        </div>
                    </div>
                </div>
        </div>

            {/* ProductDetails for small device */}
            {/* Connectivity */}
        <div className="rounded-md border-0 border-gray-200 p-0 lg:border lg:px-7 lg:py-6">
            <div className="mb-4">
                <h5 className="mb-1 flex text-[10px] font-bold uppercase text-gray-700 lg:font-normal">Connectivity</h5>
                <div className="gap-2 grid grid-cols-2 xxs:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                    <div className="false">
                        <a herf="#" class="h-full w-full flex items-center justify-center leading-3 cursor-pointer py-4 lg:py-3 bg-white text-center text-[10px] sm:text-xs border hover:border-gray-700 rounded  border-slate-gray-200 text-gray-700 relative px-5 sm:px-8">WiFi</a>
                    </div>
                    <div className="false">
                        <a herf="#" className="h-full w-full flex items-center justify-center leading-3 cursor-pointer py-4 lg:py-3 bg-white text-center text-[10px] sm:text-xs border hover:border-gray-700 rounded  border-slate-gray-200 text-gray-700 relative px-5 sm:px-8">Cellular + WiFi</a>

                    </div>
                </div>

            {/* Storage */}

            <div className="mb-4">
                <h5 className="mb-1 flex text-[10px] font-bold uppercase text-gray-700 lg:font-normal">Storage</h5>
                <div className="gap-2 grid grid-cols-3 xs:grid-cols-4">
                    <div className='false'>
                        <a herf='#' class="h-full w-full flex items-center justify-center leading-3 cursor-pointer py-4 lg:py-3 bg-white text-center text-[10px] sm:text-xs border hover:border-gray-700 rounded relative border-slate-gray-200 text-gray-700">32GB</a>
                    </div>
                    <div className="false">
                        <a className="h-full w-full flex items-center justify-center leading-3 cursor-pointer py-4 lg:py-3 bg-white text-center text-[10px] sm:text-xs border hover:border-gray-700 rounded relative border-slate-gray-200 text-gray-700">128GB</a>
                    </div>
                </div>
            </div>

            </div>
        </div>

            {/*Color*/}
            <div className='mb-4'>
                <h5 className="mb-1 flex text-[10px] font-bold uppercase text-gray-700 lg:font-normal"> Color : <b>Silver</b></h5>
                <div className="mb-5 grid grid-cols-[repeat(auto-fill,50px)] justify-between gap-y-1 gap-x-2 xxs:gap-y-2 xs:grid-cols-[repeat(auto-fill,26px)] xs:gap-x-4 xs:gap-y-3 sm:gap-x-5">
                    <div className="inline-block">
                        <div className="h-[50px] w-[50px] xs:h-[26px] xs:w-[26px]">
                            <a herf='#'className="w-full h-full flex items-center justify-center cursor-pointer block border-gray-700 lg:border-gray-500 rounded-full relative inline p-2 xs:p-0">
                                <div className="flex h-full w-full items-center justify-center rounded-full sm:top-3.5  ring-1 ring-gray-700 ring-offset-2 bg-[#f9cb9c]">

                                </div> 
                                </a>
                        </div>
                    </div>
                    <div className="inline-block">
                    <div className="h-[50px] w-[50px] xs:h-[26px] xs:w-[26px]">
                            <a herf='#'className="w-full h-full flex items-center justify-center cursor-pointer block border-gray-700 lg:border-gray-500 rounded-full relative inline p-2 xs:p-0">
                                <div className="flex h-full w-full items-center justify-center rounded-full sm:top-3.5  ring-1 ring-gray-700 ring-offset-2 bg-[#efefef]">

                                </div> 
                                </a>
                        </div>
                    </div>
                    <div className="inline-block">
                    <div className="h-[50px] w-[50px] xs:h-[26px] xs:w-[26px]">
                            <a herf='#'className="w-full h-full flex items-center justify-center cursor-pointer block border-gray-700 lg:border-gray-500 rounded-full relative inline p-2 xs:p-0">
                                <div className="flex h-full w-full items-center justify-center rounded-full sm:top-3.5  ring-1 ring-gray-700 ring-offset-2 bg-[#434343] ">
                                </div> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            {/*Condition*/}
        <div className="mb-4">
            <h5 className='mb-1 flex text-[10px] font-bold uppercase text-gray-700 lg:font-normal'> Condition
         <ImNotification size={15} className='pl-1'/>   
            </h5>

            <div className='gap-2 grid grid-cols-5'>
                <div className='false'>
                    <a className="h-full w-full flex items-center justify-center leading-3 cursor-pointer py-4 lg:py-3 bg-white text-center text-[10px] sm:text-xs border hover:border-gray-700 rounded relative border-slate-gray-200 text-gray-700   flex-col sm:h-auto ">
                        <p>Good</p>
                        <p className="mt-[3px] font-normal">$125
                        <sup className='text-[-0.4em]'>.00 </sup>
                        </p>
                    </a>
                </div>

                <div className='false'>
                    <div className="h-full w-full flex items-center justify-center leading-3 cursor-pointer py-4 lg:py-3 bg-white text-center text-[10px] sm:text-xs border hover:border-gray-700 rounded relative border-slate-gray-200 text-gray-700   flex-col sm:h-auto ">
                    <p>Excellent</p>
                        <p className="mt-[3px] font-normal">$132
                        <sup className='text-[-0.4em]'>.00 </sup>
                        </p>
                    </div>
                </div>

                <div className='false'>
                <div className="h-full w-full flex items-center justify-center leading-3 cursor-pointer py-4 lg:py-3 bg-white text-center text-[10px] sm:text-xs border hover:border-gray-700 rounded relative border-slate-gray-200 text-gray-700   flex-col sm:h-auto ">
                    <p>Pristine</p>
                        <p className="mt-[3px] font-normal">$148
                        <sup className='text-[-0.4em]'>.00 </sup>
                        </p>
                    </div>
                </div>

            </div>

        </div>

            {/*Section - Protect Me */}
        <div className="mt-7">
            <div className="flex w-full cursor-pointer flex-nowrap items-center rounded-md border bg-green-100 py-4 px-2.5 align-middle md:px-3.5 border-gray-700 mr-4">
            <div className="flex items-center">
                <input type='checkbox' id="green-checkbox"  value="" className="w-4 h-4 accent-green-600 text-green-600 bg-gray-100 border-gray-300 rounded !focus:ring-green-500 dark:focus:ring-green-600 !dark:ring-offset-gray-800 focus:ring-2 !dark:bg-gray-700 dark:border-gray-600" />
                <label for="green-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
             </div>

             <div className="flex flex-wrap text-left text-[10px]">
                
                <div className="w-full font-bold uppercase leading-tight sm:w-auto">Protect Me Against Accidents & Breakdowns</div>
                </div>

                <div className="mx-3 flex text-[11px]   font-bold xs:mx-5">$19.99 </div>
            
                <div>
                <ImNotification size={12} className=''/>  
                </div>




            </div>
        </div>

            {/*Section - Free Delivery */}
        <div className="mt-6 border border-gray-200 px-3 py-4 xxs:px-4 xxs:py-5 sm:px-7 sm:py-6 text-xs xs:text-xs lg:text-sm rounded-t-md text-left ">
            <div>
                <span className="font-bold uppercase text-[#0DA864]">Free</span>
                <span className='pl-2'>delivery by</span>
                <span className="font-bold pl-2">August 30 - 31</span>
            </div>
            <div className="mt-4 grid grid-cols-[auto,70%] xxs:grid-cols-2">
                <div className="mt-4 flex flex-row justify-start">Origin</div>
                <div className="mt-4 flex flex-row justify-end">United States of America</div>
                <div className="mt-4 flex flex-row justify-start pr-1 xxs:pr-0">Authenticated & sold by</div>
                <div className="mt-4 flex flex-row flex-wrap items-center justify-end">
                    <span className='text-right'>Betco Sales Inc</span>
                    <div className="ml-1 flex items-center">

                    <span className=" flex font-bold"><GrStar size={15} className='pr-1'/> 4.9</span>/5 
                    </div>
                </div>
            </div>
        </div>
        <button buttonbutton>
            Faster delivery available - August 29 (+$63.00) 
        </button>

            {/*Section - PAYMENT */}
        <div className='class="rounded bg-white pt-4 sm:mt-0 sm:rounded-t-[0] sm:p-8 sm:pt-0 md:pb-4"'>
            <div className="flex flex-col items-center rounded-md border border-gray-200 bg-white px-3 py-4 pt-2 xxs:px-4 xxs:py-5 sm:px-7 sm:py-6 sm:pt-7">   
                <div className='w-full'>
                    <div className="mb-2 flex w-full items-center text-left text-xs font-bold">
                        <div className="relative h-[15px] w-[12px]">
                            <MdSecurity className="h-full w-full object-fill"/>
                        </div>
                        <span className="ml-1 translate-y-px">100% Secure Payments</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                        <div className="relative h-[16px] w-[25px]">
                            <BiLogoVisa size={20} className=''/>
                        </div>
                        <div className="relative h-[16px] w-[25px]">
                            <BiLogoMastercard size={20} className=''/>
                        </div>
                        <div className="relative h-[16px] w-[25px]">
                            <GrAmex size={20} className=''/>
                        </div>
                        <div className="relative h-[16px] w-[25px]">
                            <FaCcDiscover size={20} className=''/>
                        </div>
                        <div className="relative h-[16px] w-[25px]">
                            <FaCcJcb size={20} className=''/>
                        </div>
                        <div className="relative h-[16px] w-[25px]">
                            <FaCcDinersClub size={20} className=''/>
                        </div>
                        <div className="relative h-[16px] w-[25px]">
                            <BsPaypal size={20} className=''/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
            {/*Section - Specification */}
        <div className=" rounded bg-white py-5 sm:block sm:rounded-t-[0] cursor-pointer text-left">
            <div className="flex flex-col rounded-md border border-gray-200 bg-white p-7">
                <p className='font-sans text-xs font-bold text-gray-700 sm:text-sm '>Specifications</p>

                <div className="relative flex items-center justify-between px-3">
                    <ul class="w-80 flex-1 list-disc p-2 font-sans text-xs sm:text-sm">
                        <li className="py-1 sm:text-sm">Model Name: Apple ipad 6 (2018)</li>
                        <li class="py-1 sm:text-sm">Dimension: 240 * 169.5 * 7.5mm (9.45 * 6.67 * 0.30 in) </li>
                        <li className="py-1 sm:text-sm">Weight: 469g (Wi-Fi) / 478g (LTE) (1.05 lb) /</li>
                        <li className="py-1 sm:text-sm">Build: Glass front, aluminum back, aluminum frame</li>
                    </ul>

                    <div className="absolute right-1 top-1/2 w-[7px] -translate-y-1/2 cursor-pointer xs:w-2 sm:-right-1.5">
                        <MdKeyboardArrowRight/>
                    </div>

                </div>

            </div>

        </div>

    </div>
    </div>
    </>
  )
}

export default ProductSM