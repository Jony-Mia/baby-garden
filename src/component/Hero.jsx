import { bubblegum_sans } from '@/app/layout';
// import Cloud from "@/assets/cloud.png"
import { Button } from '@heroui/react';
import HeroBaby from "@/assets/drawing_2.png"
import SunMoon from "@/assets/sun_moon.png"
import Image from 'next/image';

const Hero = () => {
    return (
        <div className='container mx-auto mb-1'>
            <div className=' grid grid-cols-1 lg:grid-cols-2 p-5 justify-between items-center h-[90vh] md:grid-cols-2 sm:grid-cols-1 '>
                <div className={`flex flex-col justify-center items-start`}>
                    <div>
                        <Image height={"100"} src={SunMoon} alt='Sun and Moon'  />
                    </div>
                    <h1 className={`${bubblegum_sans.className} text-[#5693CA] capitalize text-6xl`}>be kind <br /> with kids</h1> <br />
                    <p>Welcome to the Baby Garden AG child day care. <br /> Exclusive for kids age between 3 to 12</p> <br />
                    <Button className={"rounded-xl px-6 py-3 h-auto w-auto bg-[#FBD683] text-black"}>Request a daycare place now</Button> <br />
                </div>
                <div className=' w-full'>
                    <Image className='flex justify-center items-center' src={HeroBaby} height={"700"} alt='Hero image' />
                </div>
            </div>
        </div>
    );
};

export default Hero;