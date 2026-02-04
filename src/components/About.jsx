import React from "react";
import {
  Users,
  Target,
  Award,
  Globe,
  BookOpen,
  Video,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const About = () => {
  return (
    <div className="font-sans text-slate-600 bg-white">
      <section className="pt-12 pb-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5 order-2 md:order-1">
            <span className="text-teal-500 font-bold tracking-wider uppercase text-xs">
              About Us
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
              Forging the future of{" "}
              <span className="text-teal-500">Education</span>.
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-md">
              We are on a mission to democratize learning. Whether you are a
              student looking for skills or a teacher looking to share
              knowledge, we bridge the gap.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button className="bg-teal-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-teal-600 transition-colors shadow-md shadow-teal-100">
                Join Our Platform
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm border border-gray-200 text-slate-600 hover:bg-gray-50 transition-colors">
                <Video size={18} />
                Watch Story
              </button>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team working"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg border border-gray-100 flex items-center gap-3">
              <div className="bg-orange-50 p-2 rounded-full">
                <Users className="text-orange-500" size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase">
                  Community
                </p>
                <p className="text-sm font-bold text-slate-800">
                  10k+ Learners
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 border-y border-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-2">
              <h3 className="text-2xl font-bold text-slate-800">15K+</h3>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">
                Active Students
              </p>
            </div>
            <div className="p-2 border-l border-gray-100">
              <h3 className="text-2xl font-bold text-slate-800">1,200+</h3>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">
                Expert Mentors
              </p>
            </div>
            <div className="p-2 border-l border-gray-100">
              <h3 className="text-2xl font-bold text-slate-800">850+</h3>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">
                Courses
              </p>
            </div>
            <div className="p-2 border-l border-gray-100">
              <h3 className="text-2xl font-bold text-slate-800">4.9</h3>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">
                Rating
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-teal-50 rounded-[2rem] transform -rotate-2 scale-95 z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Vision"
              className="relative z-10 rounded-[2rem] shadow-sm w-full object-cover h-[350px]"
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase mb-4">
              <Target size={12} /> Our Mission
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Providing the best{" "}
              <span className="text-teal-500">online learning</span> experience.
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Totc is a global online learning platform that offers anyone,
              anywhere access to online courses and degrees from world-class
              universities and companies.
            </p>

            <ul className="space-y-3">
              {[
                "High quality video lectures",
                "Live support from experts",
                "Affordable pricing",
                "Global Certification",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle
                    className="text-teal-500 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-sm text-slate-700 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-10">
            Why students choose us
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Value 1 */}
            <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mx-auto mb-4 text-teal-500">
                <BookOpen size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                Flexible Learning
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Learn at your own pace, move between multiple courses
                effortlessly.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-4 text-orange-500">
                <Award size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                Expert Certifications
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Earn a certificate upon completion recognized by top companies.
              </p>
            </div>

            <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-500">
                <Globe size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                Global Community
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Join millions of learners from around the world and grow
                together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-6 border-t border-gray-50">
        <div className="text-center mb-12">
          <span className="text-teal-500 font-bold uppercase text-xs tracking-wider">
            Our Team
          </span>
          <h2 className="text-2xl font-bold text-slate-800 mt-2">
            Meet the minds behind Totc
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "John Doe",
              role: "CEO & Founder",
              img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            },
            {
              name: "Jane Smith",
              role: "Head of Content",
              img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            },
            {
              name: "Mike Johnson",
              role: "Lead Developer",
              img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            },
            {
              name: "Sarah Williams",
              role: "Marketing",
              img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            },
          ].map((member, i) => (
            <div key={i} className="text-center group">
              <div className="relative mb-3 mx-auto w-24 h-24 rounded-full overflow-hidden border-2 border-gray-100 group-hover:border-teal-400 transition-colors">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-bold text-slate-800">
                {member.name}
              </h3>
              <p className="text-teal-500 text-xs font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16 text-center">
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Ready to start?
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Access thousands of courses from industry experts today.
          </p>
          <button className="bg-teal-500 text-white px-8 py-2.5 rounded-full font-bold text-sm hover:bg-teal-600 transition-colors shadow-md shadow-teal-200 inline-flex items-center gap-2">
            Get Started <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
