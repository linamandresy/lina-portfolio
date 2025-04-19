'use client';
import { Carousel, Typography } from "@material-tailwind/react";

const data: { imageUrl: string, title: string, description: string }[] = [{
  imageUrl: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
  title: 'Mohesh',
  description: 'Lina a ete un tres bon stagiaire, il a su s`adapter a l equipe et a la culture de l entreprise. Elle a su faire preuve d autonomie et de curiosite tout au long de son stage. Elle a su s adapter aux besoins de l entreprise et a su se former sur les technologies utilisees. Elle a su travailler en equipe et a su s integrer dans l equipe. Elle a su faire preuve d autonomie et de curiosite tout au long de son stage. Elle a su s adapter aux besoins de l entreprise et a su se former sur les technologies utilisees. Elle a su travailler en equipe et a su s integrer dans l equipe.'
},
{
  imageUrl: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
  title: 'Naina',
  description: 'Lina a ete un tres bon stagiaire, il a su s`adapter a l equipe et a la culture de l entreprise. Elle a su faire preuve d autonomie et de curiosite tout au long de son stage. Elle a su s adapter aux besoins de l entreprise et a su se former sur les technologies utilisees. Elle a su travailler en equipe et a su s integrer dans l equipe. Elle a su faire preuve d autonomie et de curiosite tout au long de son stage. Elle a su s adapter aux besoins de l entreprise et a su se former sur les technologies utilisees. Elle a su travailler en equipe et a su s integrer dans l equipe.'
}];

export default function Testimonials() {

  
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
