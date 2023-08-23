import React from 'react'
import { CiDollar } from 'react-icons/ci';
import { BsUmbrella } from 'react-icons/bs';
import { PiBatteryChargingVerticalDuotone, PiTreeThin } from 'react-icons/pi';

const TopBar = () => {
  return (
    <div className='bg-[#F4FFFC]'>
        <div className="flex gap-x-5 overflow-hidden rounded md:justify-center md:rounded-none">
            <div className="container flex flex-nowrap justify-between overflow-hidden overflow-x-scroll py-6 text-left text-xs font-bold sm:overflow-x-auto sm:py-10 md:justify-around md:py-8">
                <div className='flex flex-col leading-none mx-3 md:px-0 md:ml-2  mt-0'>
                    
                    <div className='flex gap-4'><CiDollar size={25} color= 'grey'  className='pt-0'/> 30days money<br/>back guarantee </div>
                </div>
                <div className='justify-center items-center flex flex-shrink-0 px-2 md:px-0'>
                    <div className='flex gap-4'><BsUmbrella size={25} color= 'grey' className='pt-0'/> 12months <br/>free warranty </div>
                </div>
                <div className='justify-center items-center flex flex-shrink-0 px-2 md:px-0'>
                    <div className='flex gap-4'> <PiBatteryChargingVerticalDuotone size={25} color= 'grey' className='pt-0'/>80% battery <br/>health guaranteed </div>
                </div>
                <div className='justify-center items-center flex flex-shrink-0 px-2 md:px-0'>
                    <div className='flex gap-4'><PiTreeThin size={25} color= 'grey' className='pt-0'/> 1 tree <br/>planted </div>
                </div>

            </div>

        </div>
        
    </div>
  )
}

export default TopBar