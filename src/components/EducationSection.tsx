import { useState, useRef, useEffect } from "react";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

// Image imports
import webDesignCert from "../assets/images/web-design-cert.jpg";
import nc3Award from "../assets/images/programmer-of-the-year.jpg";
import sqlCert from "../assets/images/sql-cert.jpg";
import htmlCert from "../assets/images/html-cert.jpg";

const certificates = [
  { img: nc3Award, alt: "NC III Award" }, // Make NC III appear first
  { img: webDesignCert, alt: "Web Design Certificate" },
  { img: sqlCert, alt: "SQL Certificate" },
  { img: htmlCert, alt: "HTML Certificate" },
];

function EducationSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const updateSlide = (index: number) => {
    const validIndex = (index + certificates.length) % certificates.length;
    setCurrentIndex(validIndex);
  };

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <section id="Education" className=" bg-slate-900">
      <div className="container mx-auto px-4 py-20">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-5xl font-bold italic text-[#f5f5f5]">Education</h1>
          <hr className="w-[60px] lg:w-3em h-[2px] mx-auto mt-4 bg-[#f5f5f5] rounded-sm" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:px-20">
          {/* Left Column */}
          <div className="text-[#f5f5f5]">
            <h2 className="text-2xl font-semibold mb-6">Educational Background</h2>
            <ul className="space-y-5 text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <FaGraduationCap className="text-white mt-1 w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-lg">Ramon Torres Louisiana National High School</p>
                  <p className="text-sm text-gray-400">High School Diploma</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaGraduationCap className="text-white mt-1 w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-lg">i-Tech Computer Education Bago City Inc.</p>
                  <p className="text-sm text-gray-400">Senior High – Computer Programming</p>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">Certifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaCertificate className="text-white mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-base">Graduate of NC III in Computer Programming</span>
                </li>
              </ul>
            </div>

            <p className="mt-8 text-base lg:text-lg text-gray-300">
              I am a certified and multi-skilled professional with formal education and online training,
              committed to continuous learning and excellence across multiple technical domains.
            </p>
          </div>

          {/* Right Column: Carousel */}
          <div className="w-full pb-10">
            <div className="relative overflow-hidden rounded-lg shadow-lg w-full max-w-3xl mx-auto">
              <div
                ref={trackRef}
                className="flex transition-transform duration-500 ease-in-out"
                onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
                onTouchMove={(e) => (touchEndX.current = e.touches[0].clientX)}
                onTouchEnd={() => {
                  const delta = touchEndX.current - touchStartX.current;
                  if (delta > 50) updateSlide(currentIndex - 1);
                  else if (delta < -50) updateSlide(currentIndex + 1);
                }}
              >
                {certificates.map((cert, index) => (
                  <div key={index} className="flex-shrink-0 w-full aspect-[16/9]" aria-hidden={index !== currentIndex}>
                    <img
                      src={cert.img.src}
                      alt={cert.alt}
                      className="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                aria-label="Previous certificate"
                className="absolute top-1/2 left-3 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full"
                onClick={() => updateSlide(currentIndex - 1)}
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                aria-label="Next certificate"
                className="absolute top-1/2 right-3 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full"
                onClick={() => updateSlide(currentIndex + 1)}
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
