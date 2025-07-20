import React from "react";

// Import images correctly
import WebdevImg from "../assets/images/web-development-icon.png";
import MarketingImg from "../assets/images/marketing-specialist-icon.png";
import FbAdsImg from "../assets/images/FB-ads-manager-icon.png";
import CrmImg from "../assets/images/crm-manager-icon.png";
import AutomationImg from "../assets/images/automation-icon.png";
import UiUxImg from "../assets/images/UI-UX-design-icon.png";

// Array of skill cards
const cards = [
  {
    img: WebdevImg.src,
    alt: "Web Development Icon",
    title: "Web Developer",
    description: "Build responsive websites using HTML, CSS, JavaScript, and React.",
  },
  {
    img: MarketingImg.src,
    alt: "Marketing Specialist Icon",
    title: "Marketing Specialist",
    description: "Strategize and execute digital marketing campaigns effectively.",
  },
  {
    img: FbAdsImg.src,
    alt: "FB Ads Manager Icon",
    title: "FB Ads Manager",
    description: "Manage targeted Facebook ad campaigns to drive conversions.",
  },
  {
    img: CrmImg.src,
    alt: "CRM Manager Icon",
    title: "CRM Manager",
    description: "Handle client data and workflow automation with CRM tools.",
  },
  {
    img: AutomationImg.src,
    alt: "Automation Expert Icon",
    title: "Automation Expert",
    description: "Create business automations using Zapier, Make, or GoHighLevel.",
  },
  {
    img: UiUxImg.src,
    alt: "UI/UX Design Icon",
    title: "UI/UX Designer",
    description: "Design intuitive user interfaces and seamless user experiences.",
  },
];

const SkillSection: React.FC = () => {
  return (
    <section id="secondSection" className="bg-slate-900 py-16 px-4 h-fit">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center items-center mb-10">
          <hr className="w-[40%] h-[1px] bg-slate-50 border-0 rounded-sm" />
          <h1 className="text-[#f5f5f5] font-bold italic text-2xl sm:text-3xl lg:text-4xl px-4">
            SKILLS
          </h1>
          <hr className="w-[40%] h-[1px] bg-slate-50 border-0 rounded-sm" />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 list-none">
          {cards.map((card, index) => (
            <li
              key={index}
              className={`flex justify-center bg-slate-50 rounded-lg shadow-xl p-6 pt-10 ${
                index === cards.length - 1 ? "max-sm:mb-10" : ""
              }`}
            >
              <div className="text-center">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="mx-auto w-16 md:w-24 lg:w-28"
                />
                <h2 className="text-2xl md:text-3xl font-bold italic my-3 text-slate-800">
                  {card.title}
                </h2>
                <p className="text-sm md:text-base text-gray-600 px-2">
                  {card.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillSection;
