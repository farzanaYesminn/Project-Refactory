import React from 'react';
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

const ProductLG = () => {
  return (
<div className='hidden lg:block md:block'>
<div className="grid grid-cols-2 gap-6">

      {/*left - Image for Large device */}
      <div className="sticky top-[10rem]">
      <div className=" relative select-none text-center  px-6 py-10">

        <div className="relative select-none text-center px-6 py-10">

          <div className="sticky top-[10rem]">
            <div className="relative mx-auto  flex items-center justify-center  mb-0 h-40 w-40 xl:h-80 xl:w-80">

                <img src='src\assets\iPhone.jpg' className="h-full min-h-full w-full min-w-full object-contain"/>
                
            </div>
          </div>

              <div className="  flex w-full items-center justify-center md-2 mt-2">
                <div className="relative pr-3 !leading-none xxs:pr-4 ">
                  <span className="block font-bold !leading-none">300,000</span>
                  <span>customers</span>
                  <span className="absolute top-1/2 -right-0 h-[100%] w-[2px] -translate-y-1/2 bg-[#DFE3E7] xxs:h-[120%] xs:h-[130%]"></span>
                </div>
                <div className="my-2 pl-3 xxs:pl-4 xs:pl-6">
                  <div className=" max-w-[190px] overflow-hidden xxs:max-w-[270px]"> Customer Review Rate</div>
                </div>
              </div>

            </div>
            <div className="mb-2 text-center text-xs   mt-7">

            </div>
      </div>
      </div>

      {/*Right - Title for Large device */}
      <div className="relative border-t border-slate-gray-200  sm:px-8 border-0 px-0 py-0">
        <div className="relative z-20 mx-auto w-full bg-white px-0 pt-4  max-w-[480px] rounded-none lg:bg-transparent lg:p-0 xl:max-w-[600px]">
          <div className="rounded-md border-gray-200 p-0 border px-7 py-6">
            <div className=" items-center justify-between flex">
              <div className="w-3/5 text-xl text-gray-700">
                <h1 className="mb-4 font-serif">iPad 6th Gen (2018) 9.7" </h1>
                <p class="text-sm">
                  <span class="mr-2 text-xs">5526 Sold</span>
                  <span className="text-xs font-bold text-gray-700">
                    <span>
                      <span className="relative top-[2px] mr-1 inline-flex items-center">
                      <AiFillFire color='red' />
                      </span>

                      Selling Fast!


                    </span>

                  </span>

                </p>

              </div>

            <div className="w-2/5 text-right">
              <div className="flex flex-col items-end">
                <p className="block mt-1 py-0 font-sans text-xl font-bold leading-tight text-gray-700">$125.00</p>
                <div className="flex items-end flex-col -mt-2">

                  <div className="m-0">
                    <span className="px-1 text-xs text-slate-gray-300 no-underline">new</span>
                    <span className="text-gray-300 line-through text-xs">$329.00</span>
                  </div>

                  <div className="ml-2 rounded bg-red">
                    <span className='flex items-center justify-center p-1.5 text-center font-sans text-xxs font-bold text-white bg-red-400  rounded'>
                      62% Off
                    </span>
                  </div>

                </div>
              </div>
            </div>

            </div>
          </div>
        </div>

        {/* Section - Connectivity */}
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
                <div className='true'>
                    <a className="h-full w-full flex items-center justify-center leading-3 cursor-pointer  text-center text-[10px] sm:text-xs border hover:border-gray-700 rounded relative bg-white text-gray-700 !border-gray-700 !lg:border-gray-700 font-bold   flex-col !py-2 sm:h-auto lg:!py-2">
                        <p>Good</p>
                        <p className="mt-[3px] font-normal">$125
                        <sup className='text-[-0.4em]'>.00 </sup>
                        </p>
                    </a>
                </div>

                <div className='true'>
                    <div className="h-full w-full flex items-center justify-center leading-3 cursor-pointer  text-center text-[10px] sm:text-xs border hover:border-gray-700 rounded relative bg-white text-gray-700 !border-gray-700 !lg:border-gray-700 font-bold   flex-col !py-2 sm:h-auto lg:!py-2">
                    <p>Excellent</p>
                        <p className="mt-[3px] font-normal">$132
                        <sup className='text-[-0.4em]'>.00 </sup>
                        </p>
                    </div>
                </div>

                <div className='true'>
                <div className="h-full w-full flex items-center justify-center leading-3 cursor-pointer  text-center text-[10px] sm:text-xs border hover:border-gray-700 rounded relative bg-white text-gray-700 !border-gray-700 !lg:border-gray-700 font-bold   flex-col !py-2 sm:h-auto lg:!py-2">
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
            <div className="flex w-full flex-nowrap items-center rounded-md border bg-green-100 py-4 px-2.5 align-middle md:px-3.5  mr-4">
            <div className="mr-2.5 flex h-[14px] w-[14px] min-w-[14px] items-center justify-center rounded-sm ">
                <input type='checkbox' id="green-checkbox"  value="" className="w-4 h-4 accent-green-600 text-green-600  rounded !focus:ring-green-500 dark:focus:ring-green-600   !dark:bg-gray-700" />
                <label for="green-checkbox" class="ml-2 text-sm font-medium text-gray-900  "></label>
             </div>

             <div className="flex w-4/5 flex-wrap text-left text-[11px]">
                
                <span className="w-full font-bold uppercase leading-tight sm:w-auto">Protect Me Against Accidents & Breakdowns</span>

                <span className=" w-full ">
                2-yr coverage | 24-hr claim approval | Covers liquid damage
                </span>

                </div>

              <div className="mx-3 flex text-[11px]   font-bold xs:mx-5">$19.99 </div>
            
                <div>
                <ImNotification size={12} className=''/>  
                </div>




            </div>
        </div>

        {/*Section - Add to Cart Button */}
        <div className=" left-0  mt-5 flex items-center gap-3   "> 
        <div className="w-1/3">
          <div className='grid grid-cols-1 gap-1.5 py-0.5'>
            <button class="rounded-md font-bold p-0 h-11 xxs:h-auto text-sm xxs:text-base xxs:p-3 my-1 duration-200 ease-in-out hover:opacity-90 disabled:opacity-70 hover:shadow-lg text-white bg-gray-900">Add to card</button>
          </div>
        </div>
        </div>

          {/*Section - PAYMENT */}
          <div className='rounded bg-white  pb-4"'>
            <div className="flex flex-col items-left rounded-md border border-gray-200 bg-white  pt-1 xxs:px-4 xxs:py-5 ">   
                <div className='w-full'>
                    <div className="mb-2 flex w-full items-center text-left text-xs font-bold">        
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
        <button >
            Faster delivery available - August 29 (+$63.00) 
        </button>



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


           {/*Section - what is in the box */}
           <div className="bg-white pt-2">
            <div  pt-5>
              <div>
                <div role="tablist" aria-orientation="horizontal"></div>
                <div></div>
                <div></div>
              </div>
            </div>

           </div>

      </div>

      
      
      
        
</div>
</div>
  )
}

export default ProductLG