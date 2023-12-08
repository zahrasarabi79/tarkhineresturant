import { SliderTitle } from "../../public/static-data/sliderTitle";
import Slider from "./Components/Slider/Slider";
import FoodMenu from "./Components/pages/FoodMenu/Foodmenu";
import AboutSection from "./Components/pages/about-section/AboutSection";
import ContactUsSection from "./Components/pages/contact-us-section/ContactUsSection";
import BranchesSection from "./Components/pages/ٰbranches-section/BranchesSection";

export default function Home() {
  return (
    <>
      <Slider sliderTitle={SliderTitle} sliderBtnTitle="سفارش آنلاین غذا" />
      <FoodMenu />
      <AboutSection />
      <BranchesSection />
      <ContactUsSection />
    </>
  );
}
