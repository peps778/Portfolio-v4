import contactImage from "../assets/images/ExperienceImage.png";
import ContactForm from "../components/Form";
export default function ContactSection() {
    return (
        <section id="Contact" className="bg-[#f9f9f9] py-16">
            <div className="max-w-screen-xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
               <div className="space-y-6 text-center lg:text-left">
                <img src={contactImage.src} alt="Contact Illustration" className="w-52 sm:w-72 mx-auto lg:mx-0 mb-6"></img>
      
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                        Let’s Build Something <span className="block">Amazing!</span>
                    </h1>
                    <p className="text-lg text-gray-800">
                        Looking for a skilled web developer to bring your ideas to life? I  specialize in crafting modern, responsive, and high-performance websites. Whether it’s a portfolio, business site, or a custom web app, I’m here to help!
                    </p>
                </div>  {/* First Column End */}


                <div>
                    <ContactForm /> 
                </div>
            </div>
        </section>
    );
}


