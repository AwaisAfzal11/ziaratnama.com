import { useState } from "react";
import { ChevronRight, ArrowRight, Users, Target, Brain } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Entrepreneurship Coaching",
    description: "Identify a viable idea, build a business plan, and establish strong branding.",
    details: [
      "Discovering and validating profitable business ideas",
      "Defining your target market and niche",
      "Crafting compelling business plans",
      "Understanding business registration & legal setup",
      "Building a strong brand foundation",
      "Marketing & promotion strategy",
      "Digital channels for visibility",
      "Pathways to export opportunities"
    ],
    icon: Brain
  },
  {
    id: 2,
    title: "Corporate Training Programs",
    description: "Tailored courses in communication, media strategy, and leadership development.",
    details: [
      "Leadership and executive development",
      "Effective team collaboration & media skills",
      "Advanced communication & presentation techniques",
      "Training in digital tools & modern workplace tech",
      "Conflict resolution and emotional intelligence",
      "Interactive workshops for team alignment",
      "On-site and remote learning options"
    ],
    icon: Users
  },
  {
    id: 3,
    title: "Digital Marketing Consulting",
    description: "Strategy development, campaign execution, SEO, and social media growth.",
    details: [
      "Digital marketing audits & growth strategy",
      "Social media content planning & management",
      "SEO optimization for websites & content",
      "Google Ads and Meta (Facebook/Instagram) ad campaigns",
      "Performance tracking and ROI improvement",
      "Brand visibility across digital platforms",
      "Local and international audience targeting"
    ],
    icon: Target
  }
];




export function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const handleServiceClick = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Clean Hero Section - No Buttons or Icons */}
      <section id="services-hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-mindlab-gray-light via-white to-gray-50 pt-16">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B91C1C' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content - Clean and Simple */}
            <div className="space-y-8">
              {/* Simple Badge - No Icon */}
              <div className="inline-flex items-center gap-2 bg-mindlab-red/10 border border-mindlab-red/20 rounded-full px-6 py-3 text-mindlab-red">
                <span className="text-sm font-semibold tracking-wide">PROFESSIONAL SERVICES</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-mindlab-black">
                  Expert Solutions for
                  <span className="block text-mindlab-red mt-2">Business Growth</span>
                  <span className="block text-mindlab-gray mt-2">&amp; Development</span>
                </h1>
              </div>

              {/* Clean Subheading */}
              <p className="text-lg md:text-xl text-mindlab-gray-medium leading-relaxed max-w-2xl">
                Discover our comprehensive training and consulting services designed to transform your organization and drive measurable results through expert guidance and proven methodologies.
              </p>
            </div>

            {/* Right Content - Professional Image with Clean Overlays */}
            <div className="relative lg:block hidden">
              {/* Main Image Container */}
              <div className="relative">
                {/* Professional Consulting/Strategy Session Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Professional business consulting strategy session"
                    className="w-full h-[500px] object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-mindlab-black/20 via-transparent to-mindlab-red/10"></div>
                </div>

                {/* Clean Stats Card - No Icons */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-mindlab-black mb-1">500+</div>
                    <div className="text-sm text-mindlab-gray-medium">Organizations Served</div>
                  </div>
                </div>

                {/* Success Rate Badge - No Icon */}
                <div className="absolute -top-4 -right-4 bg-mindlab-red rounded-2xl p-4 text-white shadow-xl">
                  <div className="text-center">
                    <div className="text-lg font-bold">98%</div>
                    <div className="text-xs">Success Rate</div>
                  </div>
                </div>

                {/* Experience Badge - Clean */}
                <div className="absolute top-8 -left-8 bg-white rounded-full p-4 shadow-lg border border-gray-100">
                  <div className="text-center">
                    <div className="text-xl font-bold text-mindlab-red">15+</div>
                    <div className="text-xs text-mindlab-gray-medium">Years</div>
                  </div>
                </div>

                {/* Simple Feature Text Cards - No Icons */}
                <div className="absolute bottom-20 right-4 space-y-3">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
                    <span className="text-sm font-medium text-mindlab-black">Certified Experts</span>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
                    <span className="text-sm font-medium text-mindlab-black">Measurable Results</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 right-1/2 w-32 h-32 bg-mindlab-red/5 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-1/4 left-1/4 w-24 h-24 bg-mindlab-red/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Simple Scroll Indicator */}
        <div className="absolute bottom-8 right-8 text-mindlab-gray-medium">
          <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs uppercase tracking-wide font-medium">Explore</span>
            <div className="w-px h-8 bg-mindlab-red"></div>
          </div>
        </div>
      </section>

      {/* Services Section - Clean and Focused */}
      <section className="py-24 bg-mindlab-gray-light">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-block text-sm font-semibold tracking-widest uppercase text-mindlab-gray-medium mb-4">
                What We Offer
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-mindlab-black mb-6">
                Our <span className="text-mindlab-red">Service Portfolio</span>
              </h2>
              <div className="w-24 h-1 bg-mindlab-red mx-auto mb-8"></div>
              <p className="text-lg text-mindlab-gray-medium leading-relaxed max-w-2xl mx-auto">
                Expert solutions tailored to drive measurable results and sustainable growth
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-6">
              {services.map((service) => {
                const isHovered = hoveredService === service.id;
                const isExpanded = expandedService === service.id;
                const ServiceIcon = service.icon;

                return (
                  <div 
                    key={service.id} 
                    className={`group cursor-pointer transition-all duration-500 ease-out ${
                      isHovered || isExpanded ? 'transform translate-x-4' : ''
                    }`}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                    onClick={() => handleServiceClick(service.id)}
                  >
                    
                    {/* Main Service Card */}
                    <div className={`relative bg-white border-2 rounded-2xl transition-all duration-500 ${
                      isHovered || isExpanded 
                        ? 'border-mindlab-red shadow-lg shadow-mindlab-red/10' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      
                      {/* Header */}
                      <div className="p-8">
                        <div className="flex items-center justify-between">
                          
                          <div className="flex items-center gap-6">
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                              isHovered || isExpanded 
                                ? 'bg-mindlab-red text-white' 
                                : 'bg-mindlab-gray-light text-mindlab-gray'
                            }`}>
                              <ServiceIcon className="w-8 h-8" />
                            </div>

                            {/* Title and Description */}
                            <div className="flex-1">
                              <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                                isHovered || isExpanded ? 'text-mindlab-red' : 'text-mindlab-black'
                              }`}>
                                {service.title}
                              </h3>
                              <p className="text-mindlab-gray-medium leading-relaxed">
                                {service.description}
                              </p>
                            </div>
                          </div>

                          {/* Arrow */}
                          <div className={`transition-all duration-300 ${
                            isHovered || isExpanded ? 'text-mindlab-red' : 'text-mindlab-gray-medium'
                          }`}>
                            <ChevronRight className={`w-6 h-6 transition-transform duration-300 ${
                              isExpanded ? 'rotate-90' : isHovered ? 'translate-x-1' : ''
                            }`} />
                          </div>
                        </div>
                      </div>

                      {/* Expanded Content */}
                      <div className={`overflow-hidden transition-all duration-500 ease-out ${
                        isExpanded ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="px-8 pb-8 border-t border-gray-100">
                          <div className="pt-6">
                            <h4 className="font-semibold text-mindlab-black mb-4">
                              What's Included:
                            </h4>
                            <div className="grid md:grid-cols-2 gap-3">
                              {service.details.map((detail, detailIndex) => (
                                <div 
                                  key={detailIndex} 
                                  className={`flex items-start gap-3 transition-all duration-300 ${
                                    isExpanded ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                                  }`}
                                  style={{
                                    transitionDelay: `${detailIndex * 100}ms`
                                  }}
                                >
                                  <div className="flex-shrink-0 w-2 h-2 bg-mindlab-red rounded-full mt-2"></div>
                                  <span className="text-mindlab-gray-medium leading-relaxed">
                                    {detail}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA - Larger Size */}
            <div className="text-center mt-24">
              <p className="text-xl text-mindlab-gray-medium mb-10 font-light">
                Ready to transform your organization?
              </p>
              <Link to="/contact">
              <Button className="btn-primary-modern group text-lg  rounded-full">
                <span>Get Started Today</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}