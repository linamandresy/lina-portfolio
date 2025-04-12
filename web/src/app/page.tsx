
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import RolesSection from "@/components/RolesSection";
import Testimonials from "@/components/Testimonials";
import TopNavigation from "@/components/TopNavigation";
import WorkSection from "@/components/WorkSection";

const data :any=[{
  imageUrl:'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
  title:'Mohesh',
  description:'Lina a ete un tres bon stagiaire, il a su s`adapter a l equipe et a la culture de l entreprise. Elle a su faire preuve d autonomie et de curiosite tout au long de son stage. Elle a su s adapter aux besoins de l entreprise et a su se former sur les technologies utilisees. Elle a su travailler en equipe et a su s integrer dans l equipe. Elle a su faire preuve d autonomie et de curiosite tout au long de son stage. Elle a su s adapter aux besoins de l entreprise et a su se former sur les technologies utilisees. Elle a su travailler en equipe et a su s integrer dans l equipe.'
},
{
  imageUrl:'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
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
      <Footer/>
    </div>
  );
}
