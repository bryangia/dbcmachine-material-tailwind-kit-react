import { Avatar, Typography, Button } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

export const About = () => {
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
                  About us
                </Typography>
              </div>
          </div>
          <div className="mb-10 py-6 flex">
            <div className="flex w-full flex-col items-start lg:w-3/4">
              <Typography className="mb-6 font-normal text-blue-gray-500">
              At DBC Machine, precision engineering meets Texas grit. For over two decades, 
              we’ve part of the backbone of Houston’s oil and gas sector, providing top-tier CNC machining services. 
              Our commitment to excellence, reliability, and innovation has made us a trusted partner for major energy players.
              </Typography>
              <div className="flex justify-row py-4 pt-8 lg:pt-8">
                <img className="w-3/4 h-96 w-full rounded-lg mr-4" alt="Card Image" src="/img/houston.jpg"/>
                <img className="w-3/4 h-96 w-full rounded-lg" alt="Card Image" src="/img/employee-1.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="bg-white">
      <Footer />
    </div>

  </>)
}
