
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import RolesSection from "@/components/CompanySection";
import Testimonials from "@/components/Testimonials";
import TopNavigation from "@/components/TopNavigation";
import WorkSection from "@/components/WorkSection";







export default async function Home() {

  
  return (
    <div className="w-screen">
      <TopNavigation />
      <main>
        <Banner/>
        <RolesSection />
        <Testimonials />
        <WorkSection />
      </main>
      <Footer />
    </div>
  );
}
