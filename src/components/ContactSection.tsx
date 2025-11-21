import contactImage from "../assets/images/ExperienceImage.png";

export default function ContactSection() {
    return (
        <section id="fifthSection" className="bg-[#f9f9f9] py-16">
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
                    <div className="bg-red-300">
                        <form id="contactForm" className="space-y-5">
                            <h1 className="text-black font-black">Contact Me!</h1>
                            <label htmlFor="email">Email:</label><br />
                            <input type="email" placeholder="your-email@gmail.com"/> <br />

                            <label htmlFor="phone">Phone:</label><br />
                            <input type="phone" placeholder="(123) 1133 1345"/>
                        </form>
                    </div>


                </div>
            </div>
        </section>
    );
}


