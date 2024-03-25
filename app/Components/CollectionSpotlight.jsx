import React from 'react'
import flight from "../assets/CollectionSpotlight/flight.jpeg"
import orange from "../assets/CollectionSpotlight/orange.jpeg"
import Image from 'next/image'
import moment from 'moment';

export default function CollectionSpotlight() {
    const spotlightData = [
        {
            img: flight,
            title: "Las Vegas Aviators",
            date: "Sat Mar 30 2024 00:00:00 GMT+0600 (Bangladesh Standard Time)",
            address: "Las Vegas Ballpark, Las Vegas, Nevada",
            type: "flight"
        },
        {
            img: orange,
            title: "Sacramento River Cats",
            date: "Sat Mar 30 2024 00:00:00 GMT+0600 (Bangladesh Standard Time)",
            address: "Sutter Health Park, Sacramento, California",
            type: "orange"
        },
        {
            img: flight,
            title: "Las Vegas Aviators",
            date: "Sat Mar 30 2024 00:00:00 GMT+0600 (Bangladesh Standard Time)",
            address: "Las Vegas Ballpark, Las Vegas, Nevada",
            type: "flight"
        },
    ]
    return (
        <div className='dark:bg-gradient-to-t dark:from-[#221A2C] dark:to-[#18282A] bg-gradient-to-t from-[#F3F9FF]  to-[#F9F8FF] dark:text-white text-black mt-[35px] '>
            <div className='max-w-[1080px] mx-auto pb-[20px] md:pb-[30px] lg:pb-[50px] relative'>
                <h1 className='text-[30px] lg:text-[50px] font-bold text-center pt-[40px] lg:pt-[70px]'>Collection Spotlight</h1>
                <p className='text-center mt-3 lg:mt-6'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable <br /> experience. Grab yours today!</p>
                <div className='max-w-[850px] mx-auto mt-[30px] lg:mt-[50px]'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[46px] justify-items-center'>
                        {spotlightData.map(data => {
                            return (
                                <div className='p-3 pb-1 dark:bg-[#3b3e46] bg-white w-fit text-center spotlight-custom-shadow '>
                                    <Image
                                        style={{ height: "400px", width: "100%", objectFit: "cover" }}
                                        src={data.img} />
                                    <div className='p-2'>
                                        <div className='relative '>
                                            <div className='border-[0.1px] border-dashed mt-4 border-[#818A97] border-spacing-8'></div>
                                            <div className='h-5 w-5 rounded-full absolute  dark:bg-gradient-to-r dark:from-[#1F1E2B]  dark:to-[#1F1E2B] bg-gradient-to-r from-[#f5f9ff]  to-[#d9d9d9bd] -translate-y-1/2 -left-[30px]'></div>
                                            <div className='h-5 w-5 rounded-full absolute  dark:bg-gradient-to-r dark:from-[#1F1E2B]  dark:to-[#1F1E2B]  bg-gradient-to-l from-[#f5f9ff]  to-[#d9d9d9bd] -translate-y-1/2 -right-[30px]'></div>
                                        </div>
                                        <h4 className='text-[17px] font-medium mt-5'>{data.title}</h4>
                                        <div className='flex justify-center text-[14px] gap-[6px] mt-3 uppercase'>
                                            <div class="flex items-center gap-[6px]">
                                                <p>{moment(data.date).format('MMM D')}</p>
                                                <div class="dark:w-px w-[2px] h-[14px] dark:bg-white bg-[#32313165]"></div>
                                            </div>
                                            <div class="flex items-center gap-[6px] ">
                                                <p>{moment(data.date).format('ddd')}</p>
                                                <div class="w-px h-[14px] dark:bg-white bg-black"></div>
                                            </div>
                                            <div className='w-fit relative'>
                                                <p>{moment(data.date).format(' h:mm a')}</p>
                                            </div>
                                        </div>
                                        <p className='text-[14px] dark:text-[#DFDFDF] text-[#525965] mt-3'>{data.address}</p>
                                        <button className='bg-black text-white w-full py-2 text-[14px] mt-3'>{data.type == "flight" ? "Take Flight Collection" : "Orange Collection"}</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <button className='border h-[50px] w-[36px] flex justify-center items-center border-[#2C9CF0] absolute bottom-[30%] md:bottom-[35%] -translate-x-2 md:translate-x-1/2'>
                    <div className='w-[14px] h-[14px] border-t-[3px] border-l-[3px] -rotate-45 translate-x-[3px] border-[#2C9CF0]'></div>
                </button>
                <button className='border h-[50px] w-[36px] flex justify-center items-center border-[#2C9CF0] absolute right-0 bottom-[30%] md:bottom-[35%] translate-x-2 md:-translate-x-1/2'>
                    <div className='w-[14px] h-[14px] border-b-[3px] border-r-[3px] -rotate-45 -translate-x-[3px] border-[#2C9CF0]'></div>
                </button>
            </div>
        </div >
    )
}
