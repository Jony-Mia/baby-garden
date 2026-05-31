import React from 'react';
import Faith_1 from "@/assets/faith_1.jpg";
import Faith_2 from "@/assets/faith_2.jpg";
import Faith_3 from "@/assets/faith_3.jpg";
import Faith_4 from "@/assets/faith_$.jpg";
import Image from 'next/image';
const ChoseUs = () => {
    return (
        <>
           <h2 className={`text-4xl font-bold my-3 block text-center ${bubblegum_sans.className} `}>Why Choose Baby Garden</h2>
        <div className=" container mx-auto">
            <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 sm:grid-cols-2 gap-5'>
                <div className='items-center grid grid-cols-2 container grid-rows-none gap-0 mx-auto '>
                    <Image src={Faith_1} alt='Faith of mother' width={"390"} className='lg:-mb-8 cols-span-2' />
                    <Image src={Faith_3} alt='Faith of mother' width={"390"} className='lg:-mb-8 cols-span-2' />
                    <Image src={Faith_2} alt='Faith of mother' width={"390"} className='cols-span-2' />
                    <Image src={Faith_4} alt='Faith of mother' width={"390"} className='cols-span-2' />
                </div> 
                <div className='flex flex-col items-center'>
                 
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
    <Card className=" items-stretch  md:flex-row w-[85%] mb-8">
      <div className="relative flex justify-center items-center p-3 overflow-hidden rounded-2xl ">
       <i className="fa-duotone fa-regular fa-2x sm:fa-2x md:fa-3x fa-shield-check"></i>
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8">{title}</Card.Title>
          <Card.Description className='text-wrap'>
            {description}
          </Card.Description>
          {/* <CloseButton aria-label="Close banner" className="absolute top-3 right-3" /> */}
        </Card.Header>
        {/* <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">Only 10 spots</span>
            <span className="text-xs text-muted">Submission ends Oct 10.</span>
          </div>
          <Button className="w-full sm:w-auto">Apply Now</Button>
        </Card.Footer> */}
      </div>
    </Card>
  );
}