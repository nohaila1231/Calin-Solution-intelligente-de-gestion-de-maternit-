import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import MonthlyAdvice from '@/components/MonthlyAdvice';
import MoroccanNames from '@/components/MoroccanNames';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <MonthlyAdvice />
      <MoroccanNames />
      <Footer />
    </div>
  );
};

export default Index;
