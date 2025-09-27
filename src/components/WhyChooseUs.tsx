import { TrendingUp, Award, Users, Globe, CheckCircle } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "B2B Focused Approach",
    description: "Specialized expertise in business-to-business environments with deep understanding of complex organizational challenges and dynamics.",
  },
  {
    icon: Award,
    title: "Expert Trainers with Real-World Experience",
    description: "Industry professionals with proven track records in driving measurable results across diverse business sectors.",
  },
  {
    icon: Users,
    title: "Custom Solutions with Measurable Impact",
    description: "Tailored programs designed to deliver quantifiable business outcomes that align with your strategic objectives.",
  },
  {
    icon: Globe,
    title: "Multilingual Support (Arabic/English Ready)",
    description: "Seamless communication across diverse international teams with native-level expertise in both languages.",
  },
];

const trustPoints = [
  "Proven methodologies tested across industries",
  "Flexible delivery options (on-site, virtual, hybrid)",
  "Ongoing support and performance tracking",
  "Industry-leading satisfaction rates"
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50 relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Clean Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-mindlab-black mb-6 leading-tight">
            Why Businesses Trust <span className="text-mindlab-red">MindLab</span>
          </h2>
          <p className="text-lg text-mindlab-gray-medium max-w-3xl mx-auto leading-relaxed">
            We combine deep industry expertise with innovative training methodologies to deliver 
            transformational results that drive sustainable business growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-mindlab-red/5 transition-all duration-500">
                    <feature.icon className="w-8 h-8 text-mindlab-gray group-hover:text-mindlab-red transition-colors duration-500" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-mindlab-black mb-4 group-hover:text-mindlab-red transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-mindlab-gray-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Points Section */}
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-mindlab-black text-center mb-8">
              What Sets Us Apart
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-mindlab-red" />
                  </div>
                  <span className="text-mindlab-gray-medium font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* Subtle CTA */}
            <div className="text-center mt-12 pt-8 border-t border-gray-100">
              <p className="text-mindlab-gray-medium mb-6">
                Ready to experience the MindLab difference?
              </p>
              <button className="text-mindlab-red hover:text-mindlab-red-dark font-semibold transition-colors duration-300 inline-flex items-center gap-2 group">
                <span>Discover Our Approach</span>
                <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="flex justify-center mt-16">
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