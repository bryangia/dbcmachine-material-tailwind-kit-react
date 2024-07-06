import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";
import { featuresData } from "@/data";
import { Carousel } from "@material-tailwind/react";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                DBC Machine INC
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                We blend precision with cutting-edge technology. 
                From intricate designs to large-scale projects, we shape the future with precision.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <UsersIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Why choose us
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                We are commited to providing quality products that meet and exceed customers' expectations.
                <br />
                <br />
                DBC Machine INC operates 7 days a week for 24 hour turnaround availability so your order can be fulfilled as soon as possible.
              </Typography>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="./img/certified.png"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Certification</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    ISO Certified
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Certified to ISO 9001, the globally recognized standard for quality management.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Photo gallery" heading="See how we work!">
            These photos all come from directly inside our workplace!
          </PageTitle>
          <Carousel className="rounded-xl mx-auto lg:w-11/12">
          <img
            src="./img/shop-1.jpg"
            className="h-full w-full object-cover"
          />
          <img
            src="./img/shop-2.jpg"
            className="h-full w-full object-cover"
          />
          <img
            src="./img/shop-3.jpg"
            className="h-full w-full object-cover"
          />
          <img
            src="./img/mazak.jpg"
            className="h-full w-full object-cover"
          />
          <img
            src="./img/parts.jpg"
            className="h-full w-full object-cover"
          />
          <img
            src="./img/mill.jpg"
            className="h-full w-full object-cover"
          />
          <img
            src="./img/product.jpg"
            className="h-full w-full object-cover"
          />
          </Carousel>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
