import Slider from "./Components/Slider/Slider";

export default function Home() {
  const SliderTitle = [
    "تجربه غذای سالم و گیاهی به سبک هومسا",
    "لذت غذای سالم و گیاهی را با هومسا تجربه کنید!",
    "لذت٬ شور و نشاط همگی در هومسا",
    "تجربه حس تازگی و طراوت در هومسا",
    "باهومسا کیفیت را احساس کنید",
  ];

  return (
    <>
      <Slider sliderTitle={SliderTitle} sliderBtnTitle="سفارش آنلاین غذا" />
    </>
  );
}
