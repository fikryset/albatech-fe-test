import Navigation from "./Navigation";
import Jumbotron from "./Jumbotron";
import PackageSection from "./PackageSection";
import PortfolioNumbers from "./PortfolioNumbers";
import PortfolioSection from "./PortfolioSection";
import TestimonialSection from "./TestimonialSection";
import ConsultSection from "./ConsultSection";
import FooterSection from "./FooterSection";

const LandingPage = () => {
  return (
    <>
      <Navigation />
      <Jumbotron />
      <PackageSection />
      <PortfolioNumbers />
      <PortfolioSection />
      <TestimonialSection />
      <ConsultSection />
      <FooterSection />
    </>
  );
};

export default LandingPage;
