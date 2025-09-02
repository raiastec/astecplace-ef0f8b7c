import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import RecentListingsSection from "@/components/sections/RecentListingsSection";
import CotacoesSection from "@/components/sections/CotacoesSection";
import NoticiasSection from "@/components/sections/NoticiasSection";
import AboutSection from "@/components/sections/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CotacoesSection />
        <CategoriesSection />
        <AboutSection />
        <NoticiasSection />
        <RecentListingsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
