import React from 'react';
import Faith_1 from "@/assets/faith_1.jpg";
import Faith_2 from "@/assets/faith_2.jpg";
import Faith_3 from "@/assets/faith_3.jpg";
import Faith_4 from "@/assets/faith_$.jpg";
import Image from 'next/image';
const ChoseUs = () => {
    return (
        <>
           <h2 className={`text-4xl font-bold mt-4 mb-2 block text-center ${bubblegum_sans.className} `}>Why Choose Baby Garden</h2>
        <div className=" container mx-auto">
            <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 sm:grid-cols-1 gap-5'>
                <div className='items-center grid grid-cols-2 p-4 container  grid-rows-none gap-0 mx-auto '>
                    <Image src={Faith_1} alt='Faith of mother' width={"390"} className='lg:-mb-8 cols-span-2' />
                    <Image src={Faith_3} alt='Faith of mother' width={"390"} className='lg:-mb-8 cols-span-2' />
                    <Image src={Faith_2} alt='Faith of mother' width={"390"} className='cols-span-2' />
                    <Image src={Faith_4} alt='Faith of mother' width={"390"} className='cols-span-2' />
                </div> 
                <div className='lg:grid-cols-1 md:grid-cols-1 grid grid-cols-2 gap-2 justify-center w-full items-center'>
                 
                    <Horizontal
                     title={"Simple and Flexible"} 
                     description={"Meet teachers and track your learning. Progress anytime, and anywhere in one app"}
                     />
                    <Horizontal
                    title={"Credible Learning Method"}
                    description={"Collaborating with trusted language. Institutions to provide the best curriculam"}
                    />
                    <Horizontal
                     title={"Simple and Flexible"} 
                     description={"Meet teachers and track your learning. Progress anytime, and anywhere in one app"}
                     />
                    <Horizontal
                    title={"Credible Learning Method"}
                    description={"Collaborating with trusted language. Institutions to provide the best curriculam"}
                    />
                    <Horizontal
                    title={"Credible Learning Method"}
                    description={"Collaborating with trusted language. Institutions to provide the best curriculam"}
                    />
                    
                </div>
            </div>
        </div>
        
        </>
    );
};

export default ChoseUs;
import {Button, Card, CloseButton} from "@heroui/react";
import { bubblegum_sans } from '@/app/layout';

export function Horizontal({title, description}) {
  return (
    <Card className=" items-stretch flex-col text-left  md:flex-row  mb-8 shadow-[#3c83f68e] shadow">
      <div className="relative flex justify-center items-center p-3 overflow-hidden rounded-2xl ">
       <i className="fa-duotone fa-regular fa-2x sm:fa-2x md:fa-3x fa-shield-check"></i>
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8">{title}</Card.Title>
          <Card.Description className='text-wrap'>
            {description}
          </Card.Description>
        </Card.Header>
      </div>
    </Card>
  );
}