
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import RolesSection from "@/components/RolesSection";
import Testimonials from "@/components/Testimonials";
import TopNavigation from "@/components/TopNavigation";
import WorkSection from "@/components/WorkSection";
import { client } from "@/sanity/client";
import { Profile } from "@/sanity/types";
import { urlFor } from "@/utils/ImageResolver";
import { defineQuery } from "next-sanity";

const QUERY_PROFILE=defineQuery(`*[
  _type == 'profile'
  ]{
    ...,
    city->,
    country->
  }`);

const testimonialData: { imageUrl: string, title: string, description: string }[] = [{
  imageUrl: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
  title: 'Mohesh',
  description: 'Lina a ete un tres bon stagiaire, il a su s`adapter a l equipe et a la culture de l entreprise. Elle a su faire preuve d autonomie et de curiosite tout au long de son stage. Elle a su s adapter aux besoins de l entreprise et a su se former sur les technologies utilisees. Elle a su travailler en equipe et a su s integrer dans l equipe. Elle a su faire preuve d autonomie et de curiosite tout au long de son stage. Elle a su s adapter aux besoins de l entreprise et a su se former sur les technologies utilisees. Elle a su travailler en equipe et a su s integrer dans l equipe.'
},
{
  imageUrl: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
  title: 'Naina',
  description: 'Lina a ete un tres bon stagiaire, il a su s`adapter a l equipe et a la culture de l entreprise. Elle a su faire preuve d autonomie et de curiosite tout au long de son stage. Elle a su s adapter aux besoins de l entreprise et a su se former sur les technologies utilisees. Elle a su travailler en equipe et a su s integrer dans l equipe. Elle a su faire preuve d autonomie et de curiosite tout au long de son stage. Elle a su s adapter aux besoins de l entreprise et a su se former sur les technologies utilisees. Elle a su travailler en equipe et a su s integrer dans l equipe.'
}]



export default async function Home() {
  let profileData = await client.fetch(QUERY_PROFILE);
  profileData[0]['image']= urlFor(profileData[0].profilePicture).url();
  console.log(profileData[0]);
  
  return (
    <div className="w-screen">
      <TopNavigation />
      <main>
        <Banner profile={profileData[0]} />
        <RolesSection />
        <Testimonials data={testimonialData} />
        <WorkSection />
      </main>
      <Footer />
    </div>
  );
}
