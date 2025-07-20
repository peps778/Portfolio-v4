import { useRef } from "react";

function Hero() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const spinnerRef = useRef<SVGSVGElement>(null);
  const btnTextRef = useRef<HTMLSpanElement>(null);

  const handleDownload = () => {
    if (spinnerRef.current && btnTextRef.current && buttonRef.current) {
      spinnerRef.current.classList.remove("hidden");
      btnTextRef.current.textContent = "Downloading...";

      const link = document.createElement("a");
      link.href = "/Paul Jhon Magbanua - CV.pdf"; 
      link.download = "Paul Jhon Magbanua - CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        spinnerRef.current?.classList.add("hidden");
        btnTextRef.current!.textContent = "Download My CV!";
      }, 2000);
    }
  };

  return (
    <section id="hero" className="bg-[#f9f9f9] max-sm:p-5 sm:p-5 md:p-10 lg:py-35">
      <div className="max-w-7xl mx-auto px-6 bg-red-500">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-blue-400">
          <div className="max-sm:order-2 sm:order-2 md:order-2 lg:order-1 bg-red-300">
            <h1 className="font-bold text-7xl md:text-5xl lg:text-7xl text-gray-900 leading-tight">
              Hi, I’m Paul
            </h1>
            <h4 className="font-semibold text-3xl md:text-2xl lg:text-3xl mt-4 text-gray-800">
              Web Developer | CRM Manager | Marketing Specialist
            </h4>
            <p className="text-2xl mb-5 mt-4 text-gray-700 max-w-xl">
              Passionate about crafting innovative web solutions and delivering seamless user experiences. With a solid background in web development and technical support, I thrive on transforming ideas into reality. Let’s build something amazing together!
            </p>

            <button
              ref={buttonRef}
              onClick={handleDownload}
              className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-600 text-white py-3 px-6 rounded-lg transition-all duration-300">
              <svg
                ref={spinnerRef} className="hidden animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
              <span ref={btnTextRef}>Download My CV!</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
