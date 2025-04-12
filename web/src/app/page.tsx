
import Banner from "@/components/Banner";
import RolesSection from "@/components/RolesSection";
import Testimonials from "@/components/Testimonials";
import TopNavigation from "@/components/TopNavigation";
import WorkSection from "@/components/WorkSection";

const data :any=[{
  imageUrl:'https://media.licdn.com/dms/image/v2/D5616AQElF5C485NMPA/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1738270322548?e=1749686400&v=beta&t=o1nGhttUEXfQGZglbfsIeH30sxPg40P3t5cBZo-ih2k',
  title:'Mohesh',
  description:'Lina a ete un tres bon stagiaire, il a su s`adapter a l equipe et a la culture de l entreprise. Elle a su faire preuve d autonomie et de curiosite tout au long de son stage. Elle a su s adapter aux besoins de l entreprise et a su se former sur les technologies utilisees. Elle a su travailler en equipe et a su s integrer dans l equipe. Elle a su faire preuve d autonomie et de curiosite tout au long de son stage. Elle a su s adapter aux besoins de l entreprise et a su se former sur les technologies utilisees. Elle a su travailler en equipe et a su s integrer dans l equipe.'
},
{
  imageUrl:'https://media.licdn.com/dms/image/v2/D5616AQElF5C485NMPA/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1738270322548?e=1749686400&v=beta&t=o1nGhttUEXfQGZglbfsIeH30sxPg40P3t5cBZo-ih2k',
  title:'Naina',
  description:'Lina a ete un tres bon stagiaire, il a su s`adapter a l equipe et a la culture de l entreprise. Elle a su faire preuve d autonomie et de curiosite tout au long de son stage. Elle a su s adapter aux besoins de l entreprise et a su se former sur les technologies utilisees. Elle a su travailler en equipe et a su s integrer dans l equipe. Elle a su faire preuve d autonomie et de curiosite tout au long de son stage. Elle a su s adapter aux besoins de l entreprise et a su se former sur les technologies utilisees. Elle a su travailler en equipe et a su s integrer dans l equipe.'
}]



export default function Home() {
  return (
    <div className="w-screen">
      <TopNavigation/>
      <main>
        <Banner title="Lina Mandresy Rabenandrasana" subtitle="Software Engineer" imageUrl="https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/480984209_2491833777819580_6744485852669001530_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=j0g1de-p7ekQ7kNvwHgPFGB&_nc_oc=AdmQxa9AqEojewApiI3Y4PhX9bqJZV1cYPw-VJJH6CWUEbunQxfJLcGO-bHmoun6k5c&_nc_zt=23&_nc_ht=scontent-yyz1-1.xx&_nc_gid=-KcbekNTD76nTsRjSniygA&oh=00_AfEEB5yWMQcTdCtqE1t_U-Tda-NsY8WDg1VpT0GlKcw5CQ&oe=67FC7EBA" />
        <RolesSection/>
        <Testimonials data={data}/>
        <WorkSection/>
      </main>
    </div>
  );
}
