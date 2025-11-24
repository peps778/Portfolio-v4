import HeroImage from "../assets/images/Paul Jhon Magbanua - hero page.png";
import Button from "./DownloadButton";


function Hero() {

  return (

  <section id="Home" className="bg-[#f9f9f9] px-10 lg:py-30">
  <div className="max-w-5xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      <img src={HeroImage.src} alt="Paul Jhon Magbanua" className="w-full object-cover" />

      <div className="order-2 md:order-1">
        <h1 className="font-bold text-5xl lg:text-7xl text-gray-900 leading-tight">
          Hi, I’m Paul
        </h1>
        <h4 className="font-semibold text-2xl lg:text-3xl mt-4 text-gray-800">
          Web Developer | CRM Manager | Marketing Specialist
        </h4>
        <p className="text-xl mt-4 mb-6 text-gray-700 max-w-xl">
          Passionate about crafting innovative web solutions and delivering seamless user experiences. With a solid background in web development and technical support, I thrive on transforming ideas into reality. Let’s build something amazing together!
        </p>
        <Button />
      </div>
    </div>
  </div>
  </section>

  );
}

export default Hero;
