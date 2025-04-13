'use client';
import { Carousel, Typography } from "@material-tailwind/react";

export default function Testimonials({ data }: { data: { imageUrl: string, title: string, description: string }[] }) {
  return (
    <Carousel className="rounded-xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >
      {data.map((item, index) => (
        <div className="relative h-full w-full" key={index}>
          <img
            src={item.imageUrl}
            alt="image 1"
            className="h-96 w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl "
                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
              >
                {item.title}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
              >
                {item.description}
              </Typography>

            </div>
          </div>
        </div>
      ))}


    </Carousel>
  )
}
