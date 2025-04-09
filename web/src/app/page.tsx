
import Banner from "@/components/Banner";
import TopNavigation from "@/components/TopNavigation";
import styles from "@/style/page.module.css";

export default function Home() {
  return (
    <div className="w-screen">
      <TopNavigation/>
      <main>
        <Banner title="Lina Mandresy Rabenandrasana" subtitle="Software Engineer" imageUrl="https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/480984209_2491833777819580_6744485852669001530_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=j0g1de-p7ekQ7kNvwHgPFGB&_nc_oc=AdmQxa9AqEojewApiI3Y4PhX9bqJZV1cYPw-VJJH6CWUEbunQxfJLcGO-bHmoun6k5c&_nc_zt=23&_nc_ht=scontent-yyz1-1.xx&_nc_gid=-KcbekNTD76nTsRjSniygA&oh=00_AfEEB5yWMQcTdCtqE1t_U-Tda-NsY8WDg1VpT0GlKcw5CQ&oe=67FC7EBA" />
        
      </main>
    </div>
  );
}
