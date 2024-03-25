import Image from "next/image"
import player1 from "../assets/Sports/player1.jpg"
import player2 from "../assets/Sports/player2.jpeg"
import player3 from "../assets/Sports/player3.jpeg"
import ad from "../assets/Sports/ad.jpeg"
export default function Sports() {
    const sportsData = [
        {
            img: player1,
            title: "Sacramento River Cats",
            events: 48,
            sport: 'Baseball',
            type: 'player'
        },
        {
            img: player2,
            title: "Las Vegas Aviators",
            events: 28,
            sport: 'Baseball',
            type: 'player'
        },
        {
            img: player3,
            title: "New Jersey Devils",
            events: 15,
            sport: 'Ice Hockey',
            type: 'player'
        },
        {
            img: player1,
            title: "Las Vegas Aviators",
            events: 28,
            sport: 'Baseball',
            type: 'player'
        },
    ]
    return (
        <div className="pt-4 md:pt-8 lg:pt-16">
            <h3 className="underline decoration-[2px] mb-1 md:mb-3 lg:mb-0 underline-offset-[12px] decoration-[#738FFF] text-2xl font-bold dark:text-white text-black">Sports</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  md:gap-[14px]">
                {
                    sportsData.map(data => (
                        <div className="lg:max-w-[237px] dark:bg-[#3B3E47] p-[10px] mt-[20px] lg:mt-[30px]  custom-shadow">
                            <Image
                                style={{ height: "385px", width: "385px", objectFit: "cover" }}
                                src={data.img} />
                            <h3 className="text-[17px] font-medium py-3 md:py-4 dark:text-white text-black">{data.title}</h3>
                            <div className="grid grid-cols-2 dark:bg-[#292B32] bg-[#ededede2] p-3">
                                <div>
                                    <p className="text-xs dark:text-[#DFDFDF] text-[#525965]">Total events</p>
                                    <p className="text-[14px] dark:text-white text-black">{data.events} Events</p>
                                </div>
                                <div>
                                    <p className="text-xs dark:text-[#DFDFDF] text-[#525965]">sport</p>
                                    <p className="text-[14px] dark:text-white text-black">{data.sport}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="lg:max-w-[237px] dark:bg-[#3B3E47] p-[10px] mt-[15px] md:mt-[20px] lg:mt-[30px]  custom-shadow">
                    <div className="dark:border-0 border-[0.2px] pb-4 md:pb-0 border-[#00655460] h-full">
                        <div className="relative">
                            <Image src={ad} />
                            <p className="bg-black w-fit px-3 py-[2px] absolute top-0 right-0 text-[14px]">Ad</p>
                        </div>
                        <h3 className="text-xl font-medium mt-4 md:mt-7 mb-2 dark:text-white text-black pl-[11px]">Advertisement title</h3>
                        <p className="text-[13px] leading-5 dark:text-[#DFDFDF] text-[#525965] px-[11px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-[30px] lg:mt-[50px]">
                <button className="bg-[#2C9CF0] py-[10px] px-[30px]">See More</button>
            </div>
        </div>
    )
}
