import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { EquipmentCard } from "@/widgets/cards";
import {equipmentData} from "@/data";

const EquipmentCards = () => {
  return (
    <div className="flex flex-wrap justify-around">
      {equipmentData.map(({title, description}) => {
        return(
        <div key={`EquipmentCard-${title}`}className="flex flex-wrap justify-stretch py-4">
          <EquipmentCard 
            title={title} 
            description={description}/>
        </div>
        )
        })
      }
    </div>
)
}

export const Equipment = () => {
    return (<>
    <section className="relative block h-[50vh]">
      <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.jpg')] bg-cover bg-center scale-105" />
      <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
    </section>
    <section className="relative bg-white py-16">
      <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 break-words bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between">
              <div className="flex justify-start py-4 pt-8 lg:pt-8">
                <Typography
                  variant="h3"
                  className="mb-3 font-bold"
                  color="blue-gray"
                >
                  Equipment
                </Typography>
              </div>
          </div>
          <EquipmentCards/>
          <div className="flex justify-row py-4 pt-8 lg:pt-8">
                <img className="w-3/4 h-96 w-full rounded-lg mr-4" alt="Card Image" src="/img/mazak.jpg"/>
                <img className="w-3/4 h-96 w-full rounded-lg" alt="Card Image" src="/img/mill.jpg"/>
              </div>
        </div>
      </div>
    </section>
    <div className="bg-white">
      <Footer />
    </div>

  </>)
}
