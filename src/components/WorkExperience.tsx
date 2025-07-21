import Photo from '../assets/images/ExperienceImage.png'

function WorkExperience() {
  return (
    <section id="thirdSection" className="bg-[#f9f9f9] px-4 py-12 h-fit">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl italic font-bold text-center text-gray-800 mb-2">
          Work Experience
        </h1>
        <hr className="lg:w-[15%] w-[60%] h-[2px] mx-auto bg-slate-900 border-0 rounded-sm mb-10" />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Image Section */}
          <div className="bg-slate-50 rounded-lg p-4">
            <img src={Photo.src} alt="Experience Visual" className="w-full object-contain" style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))" }} />
          </div>

          {/* Experience Text */}
          <div className="bg-slate-900 text-[#f5f5f5] rounded-lg p-6 space-y-6">
            
            {/* Experience 1 */}
            <div className="text-base md:text-lg lg:text-xl">
              <p className="font-bold">
                Nyx Virtual Solution - Web Developer<br />
                <span className="text-sm font-normal">July 2024 - July 2025</span>
              </p>
              <li className="italic mt-1 max-sm:not-italic">
                Designed and implemented engaging web applications with a focus on user-centric design.
              </li>
            </div>

            {/* Experience 2 */}
            <div className="text-base md:text-lg lg:text-xl">
              <p className="font-bold">
                Barangay Hall, Barangay Maao - IT Support<br />
                <span className="text-sm font-normal">February 2024 - May 2024</span>
              </p>
              <li className="italic mt-1 max-sm:not-italic">
                Provided technical assistance to end-users, resolving issues related to hardware and software.
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
