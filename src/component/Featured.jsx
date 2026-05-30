
// import {CircleDollar} from "@gravity-ui/icons";
import {Button, Card} from "@heroui/react";
import Link from "next/link";
import Science from "@/assets/experiment.gif"
import { bubblegum_sans } from "@/app/layout";
const featureInfo = [
    {
        id: 1,
        icon: "https://cdn-icons-mp4.flaticon.com/512/19035/19035042.mp4",
        name: " Drawing ",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    },
    // {
    //     id: 2,
    //     icon: "https://cdnl.iconscout.com/lottie/premium/thumb/woman-enjoys-first-canvas-wonder-animation-gif-download-11972237.mp4",
    //     name: " Biology ",
    //     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    // },
    {
        id: 3,
        icon: "https://cdn-icons-mp4.flaticon.com/512/11324/11324089.mp4",
        name: " Science ",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    },
    {
        id: 4,
        icon: "https://cdn-icons-mp4.flaticon.com/512/18990/18990667.mp4",
        name: " Tech ",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    },
    {
        id: 5,
        icon: "https://cdn-icons-mp4.flaticon.com/512/19032/19032868.mp4",
        name: " Quran ",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    },
]
const Featured = () => {
    return (
        <> 
        
        <div className="container mx-auto text-center">
            <h2 className={`font-bold text-4xl ${bubblegum_sans.className}`}>Meet with Topics</h2>
        </div>
        <br />
        <div className='grid sm:grid-cols-2 md:grid-cols-4 grid-cols-2 p-5 lg:grid-cols-4 gap-5 mx-auto container'>
            {
                featureInfo.map(({id, icon, name, description}) =>  (
                        <FeaturedCard key={id} id={id} icon={icon} name={name} description={description} />
                    )
                )
            }
        </div>
        </>
    );
};

export default Featured;

export function FeaturedCard({id, icon, name, description}) {
  return (
    <Card className="shadow-[#5693CA] shadow-sm relative">
     
      <video width="60" height="60" preload="none" style={{background: ` transparent  url('https://cdn-icons-png.flaticon.com/512/11324/11324089.png') 50% 50% / fit no-repeat`,borderRadius:"10px"}} autoPlay={true} loop={true} muted={true} playsInline="">
        <source src={icon} type="video/mp4"/>
    </video>
      <Card.Header>
        <Card.Title className="text-[#5693CA] text-xl my-2">{name}</Card.Title>
        <Card.Description>
            {description}
        </Card.Description>
      </Card.Header>
      {/* <Card.Footer> */}
        <Link className="absolute top-2 right-2"
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href={"/"}
        >
          <Button variant="outline">
          <i aria-hidden="true" className="fad fa-arrow-up-right font-bold" ></i>
          </Button>
        </Link>
      {/* </Card.Footer> */}
    </Card>
  );
}