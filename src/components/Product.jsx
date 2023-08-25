import React from 'react'
import { AiFillFire } from 'react-icons/ai';

const Product = () => {
  return (
   <> 
   <div className='grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2 lg:gap-6 lg:hidden '>
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
    {/*Connectivity & Storage*/}

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
    <div>
        <div>
            
        </div>
        
    </div>


       



    </div>
    </div>
    </>
  )
}

export default Product