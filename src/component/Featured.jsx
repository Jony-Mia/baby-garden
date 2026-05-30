
// import {CircleDollar} from "@gravity-ui/icons";
import {Button, Card} from "@heroui/react";
import Link from "next/link";

const featureInfo = [
    {
        id: 1,
        icon: "https://cdnl.iconscout.com/lottie/premium/thumb/woman-enjoys-first-canvas-wonder-animation-gif-download-11972237.mp4",
        name: " Drawing ",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti culpa, quibusdam praesentium ex illo commodi."
    },
    // {
    //     id: 2,
    //     icon: "https://cdnl.iconscout.com/lottie/premium/thumb/woman-enjoys-first-canvas-wonder-animation-gif-download-11972237.mp4",
    //     name: " Biology ",
    //     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti culpa, quibusdam praesentium ex illo commodi."
    // },
    {
        id: 3,
        icon: "https://cdnl.iconscout.com/lottie/premium/thumb/woman-enjoys-first-canvas-wonder-animation-gif-download-11972237.mp4",
        name: " Science ",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti culpa, quibusdam praesentium ex illo commodi."
    },
    {
        id: 4,
        icon: "https://cdnl.iconscout.com/lottie/premium/thumb/woman-enjoys-first-canvas-wonder-animation-gif-download-11972237.mp4",
        name: " Tech ",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti culpa, quibusdam praesentium ex illo commodi."
    },
    {
        id: 5,
        icon: "https://cdnl.iconscout.com/lottie/premium/thumb/woman-enjoys-first-canvas-wonder-animation-gif-download-11972237.mp4",
        name: " Litreture ",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti culpa, quibusdam praesentium ex illo commodi."
    },
]
const Featured = () => {
    return (
        <div className='grid grid-cols-4 gap-5 mx-auto container'>
            {
                featureInfo.map(({id, icon, name, description}) => {
                    return (
                        // <div key={id}>
                        //     <div>
                        //         <video width={"80"} height={"80"} src={icon} />
                        //     </div>
                        //     <div>
                        //         <p>{name}</p>
                        //         <p>{description}</p>
                        //     </div>
                        // </div>
                        <FeaturedCard key={id} id={id} icon={icon} name={name} description={description} />
                    )
                })
            }
        </div>
    );
};

export default Featured;

export function FeaturedCard({id, icon, name, description}) {
  return (
    <Card className="shadow-[#5693CA] shadow-sm">
      {/* <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" /> */}
      <video width={"80"} height={"80"} src={icon}/>
      <Card.Header>
        <Card.Title className="text-[#5693CA] text-xl my-2">{name}</Card.Title>
        <Card.Description>
            {description}
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <Link
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href={"/"}
        >
          <Button variant="outline">
            Visit
          <i aria-hidden="true" className="fad fa-arrow-right font-bold" ></i>
          </Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}