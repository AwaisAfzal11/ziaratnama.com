import {
  Briefcase,
  BookOpen,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Lightbulb,
    title: "Entrepreneurship Coaching",
    description:
      "We help aspiring entrepreneurs transform viable ideas into successful ventures through strategic guidance, industry insights, and brand building support.",
    features: [
      "Identify business ideas",
      "Target market selection",
      "Business plan preparation",
      "Brand establishment & digital marketing",
      "Access to export opportunities",
    ],
  },
  {
    icon: BookOpen,
    title: "Corporate Training Programs",
    description:
      "From sales to customer care, our training empowers teams to connect better with customers and represent your brand with excellence.",
    features: [
      "Sales strategy & communication",
      "Personalized customer care training",
      "Brand ambassadorship development",
      "Increased customer retention",
    ],
  },
  {
    icon: Briefcase,
    title: "Consulting Services",
    description:
      "Ramp up your revenue with our digital marketing consultation—reach high-value customers through targeted strategies and online optimization.",
    features: [
      "Social media marketing",
      "Improving Google ranking",
      "Digital ad campaigns",
      "International market access",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B91C1C' fill-opacity='0.15'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-mindlab-red/5 border border-mindlab-red/10 rounded-full px-6 py-3 text-mindlab-red mb-8">
            <Star className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">
              OUR SERVICES
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-mindlab-black mb-6 leading-tight">
            What We Offer
          </h2>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-mindlab-red/30"></div>
            <div className="w-3 h-3 bg-mindlab-red rounded-full"></div>
            <div className="w-16 h-px bg-mindlab-red/30"></div>
          </div>

          <p className="text-lg text-mindlab-gray-medium max-w-3xl mx-auto leading-relaxed">
            Explore our transformational services—crafted to elevate your
            business, empower your team, and lead your vision to global success.
          </p>
        </div>

        {/* Services Grid */}
     <div className="grid lg:grid-cols-3 gap-8 mb-16">
  {services.map((service, index) => (
    <div
      key={index}
      className="group relative flex flex-col bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
    >
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-mindlab-red/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-mindlab-red transition-all duration-500 group-hover:scale-110">
          <service.icon className="w-10 h-10 text-mindlab-red group-hover:text-white transition-colors duration-500" />
        </div>
        <h3 className="text-xl font-bold text-mindlab-black mb-4 group-hover:text-mindlab-red transition-colors duration-300">
          {service.title}
        </h3>
      </div>

      <p className="text-mindlab-gray-medium leading-relaxed mb-6 text-center">
        {service.description}
      </p>

      <div className="space-y-3 mb-8">
        {service.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-mindlab-red flex-shrink-0" />
            <span className="text-mindlab-gray-medium">{feature}</span>
          </div>
        ))}
      </div>

      {/* Spacer pushes this to bottom */}
      <div className="mt-auto pt-4 border-t border-gray-100 text-center">
        <Link to="/services">
          <button className="text-mindlab-red cursor-pointer hover:text-mindlab-red-dark font-semibold group-hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>
  ))}
</div>


        {/* Bottom Accent Dots */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-mindlab-red rounded-full"></div>
            <div className="w-2 h-2 bg-mindlab-red/60 rounded-full"></div>
            <div className="w-2 h-2 bg-mindlab-red/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
