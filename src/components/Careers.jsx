import React, { useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Apple,
} from "lucide-react";

const MembershipPage = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const pricingPlans = [
    {
      name: "Base Plan",
      price: "Free",
      period: "",
      features: [
        "Our content library",
        "Save your pending pages",
        "Access Teacher's notes",
      ],
      active: false,
    },
    {
      name: "Individual",
      price: "$24",
      period: "/ month",
      features: [
        "Our content library",
        "Save your pending pages",
        "Access Teacher's notes",
        "Theme to 3 different styles",
        "Will help to overflow",
      ],
      active: true, // Highlighted
    },
    {
      name: "Corporate",
      price: "$12",
      period: "/ editor",
      features: [
        "Our content library",
        "Save your pending pages",
        "Access Teacher's notes",
        "Theme to 3 different styles",
      ],
      active: false,
    },
  ];

  const faqs = [
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit, sed do",
    "Eiusmod tempor incididunt",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ];

  const testimonials = [
    { name: "Bulkin Simons", img: "https://i.pravatar.cc/150?img=5" },
    { name: "Bulkin Simons", img: "https://i.pravatar.cc/150?img=9" },
    { name: "Bulkin Simons", img: "https://i.pravatar.cc/150?img=1" },
    { name: "Bulkin Simons", img: "https://i.pravatar.cc/150?img=10" },
  ];

  return (
    <div className="font-sans text-slate-600 bg-white">
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-teal-500 mb-3">
            Affordable pricing
          </h2>
          <p className="text-base text-gray-500">
            Choose the plan that suits you best
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 items-center">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.active
                  ? "bg-white shadow-2xl border-2 border-white transform md:-translate-y-4 z-10"
                  : "bg-white border border-gray-100 hover:shadow-lg"
              }`}
            >
              {plan.active && (
                <div className="absolute top-0 right-0 bg-indigo-900 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl">
                  BEST!
                </div>
              )}
              <h3 className="text-sm font-bold text-teal-500 uppercase tracking-wider mb-5">
                {plan.name}
              </h3>
              <div className="text-5xl font-extrabold text-slate-800 mb-8">
                {plan.price}{" "}
                <span className="text-lg font-normal text-gray-400">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div
                      className={`p-1 rounded-full ${plan.active ? "bg-orange-100" : "bg-gray-100"}`}
                    >
                      <Check
                        size={16}
                        className={
                          plan.active ? "text-orange-500" : "text-gray-500"
                        }
                      />
                    </div>
                    <span className="text-sm font-medium text-slate-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-full text-base font-bold transition-colors ${
                  plan.active
                    ? "bg-teal-400 text-white hover:bg-teal-500 shadow-xl shadow-teal-200"
                    : "bg-white border-2 border-teal-400 text-teal-400 hover:bg-teal-50"
                }`}
              >
                {plan.active
                  ? "Regular license"
                  : index === 2
                    ? "Extended license"
                    : "Try for free"}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="bg-[#252641] rounded-[2rem] p-10 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 blur-[60px] opacity-20"></div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Online coaching lessons for remote learning.
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="bg-teal-400 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-teal-500 transition-colors shadow-lg shadow-teal-900/50">
            Start learning now
          </button>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 mb-16">
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 pb-3">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between py-2 text-left focus:outline-none group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full transition-colors ${openAccordion === index ? "bg-teal-400" : "bg-teal-100 group-hover:bg-teal-200"}`}
                  ></div>
                  <span className="text-sm font-semibold text-slate-700">
                    {faq}
                  </span>
                </div>
                <ChevronDown
                  size={16}
                  className={`text-gray-400 transition-transform ${openAccordion === index ? "rotate-180" : ""}`}
                />
              </button>
              {openAccordion === index && (
                <div className="pl-5 pt-1 text-xs text-gray-500 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-12 mb-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">
            What our students have to say
          </h2>

          <div className="relative">
            <button className="absolute -left-3 md:-left-12 top-1/2 -translate-y-1/2 p-2 bg-teal-400 rounded-full text-white shadow-md hover:bg-teal-500 z-10">
              <ChevronLeft size={20} />
            </button>
            <button className="absolute -right-3 md:-right-12 top-1/2 -translate-y-1/2 p-2 bg-teal-400 rounded-full text-white shadow-md hover:bg-teal-500 z-10">
              <ChevronRight size={20} />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-gray-50"
                  />
                  <h4 className="text-sm font-bold text-slate-800 mb-1">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="bg-[#252641] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-xl font-bold text-white">
            APP is available for free
          </h2>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 bg-[#29b2fe] hover:bg-sky-500 text-white px-5 py-2.5 rounded-lg transition-colors">
              <Smartphone size={20} />
              <div className="text-left">
                <div className="text-[9px] uppercase font-semibold opacity-80">
                  Android APP on
                </div>
                <div className="text-xs font-bold">Google Play</div>
              </div>
            </button>
            <button className="flex items-center gap-2 bg-[#4acac2] hover:bg-teal-500 text-white px-5 py-2.5 rounded-lg transition-colors">
              <Apple size={20} />
              <div className="text-left">
                <div className="text-[9px] uppercase font-semibold opacity-80">
                  Download on the
                </div>
                <div className="text-xs font-bold">App Store</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-start">
            <div className="w-full h-48 rounded-xl overflow-hidden mb-5 bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Teacher"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Become a Teacher
            </h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <button className="w-full sm:w-auto bg-teal-400 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-teal-500 transition-colors mt-auto">
              Apply as Teacher
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-start">
            <div className="w-full h-48 rounded-xl overflow-hidden mb-5 bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Coursector"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Become a Coursector
            </h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <button className="w-full sm:w-auto bg-teal-400 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-teal-500 transition-colors mt-auto">
              Apply as Coursector
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;
