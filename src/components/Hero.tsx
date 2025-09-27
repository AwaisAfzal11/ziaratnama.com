import { Target, ArrowRight, Play, CheckCircle, Users, Award, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-mindlab-gray-light via-white to-gray-50 pt-16">
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
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-mindlab-red/10 border border-mindlab-red/20 rounded-full px-4 py-2 text-mindlab-red">
              <Target className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">UNLEASH PEOPLE POTENTIAL</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight text-mindlab-black">
               Empowering business leaders in the UAE through
                <span className="block text-mindlab-red mt-2"> world class consulting</span>
                <span className="block text-mindlab-gray">& training</span>
              </h1>
            </div>

            {/* Simplified Subheading */}
            <p className="text-lg md:text-xl text-mindlab-gray-medium leading-relaxed max-w-2xl">
              Transform your organization with proven methodologies that drive measurable results and sustainable growth.
            </p>

            {/* Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              {/* Primary Modern Button */}
              <Link to='/services'>
              <button className="btn-primary-modern group flex items-center justify-center gap-3 min-w-[220px]">
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              </Link>
              {/* Secondary Modern Button */}
              <Link to='/contact'>
              <button className="btn-secondary-modern group flex items-center justify-center gap-3 min-w-[220px]">
                <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>Contact Us</span>
              </button>
              </Link>
            </div>
          </div>

          {/* Right Content - Professional Business Image with Overlays */}
          <div className="relative lg:block hidden">
            {/* Main Image Container */}
            <div className="relative">
              {/* Professional Business Meeting Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Professional business consulting meeting"
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-mindlab-black/20 via-transparent to-mindlab-red/10"></div>
                
                {/* Play Button Overlay for Video/Demo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="group bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-6 shadow-lg transition-all duration-300 hover:scale-105">
                    <Play className="w-8 h-8 text-mindlab-red ml-1 group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-mindlab-red rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-mindlab-black">500+</div>
                    <div className="text-sm text-mindlab-gray-medium">Companies Trained</div>
                  </div>
                </div>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute -top-4 -right-4 bg-mindlab-red rounded-2xl p-4 text-white shadow-xl">
                <div className="text-center">
                  <Award className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-lg font-bold">95%</div>
                  <div className="text-xs">Success Rate</div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute top-8 -left-8 bg-white rounded-full p-4 shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-xl font-bold text-mindlab-red">15+</div>
                  <div className="text-xs text-mindlab-gray-medium">Years</div>
                </div>
              </div>

              {/* Small Feature Cards */}
              <div className="absolute bottom-20 right-4 space-y-3">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-100 flex items-center gap-3">
                  <div className="w-8 h-8 bg-mindlab-red/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-mindlab-red" />
                  </div>
                  <span className="text-sm font-medium text-mindlab-black">Expert Trainers</span>
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-100 flex items-center gap-3">
                  <div className="w-8 h-8 bg-mindlab-red/10 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 text-mindlab-red" />
                  </div>
                  <span className="text-sm font-medium text-mindlab-black">Proven Results</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 right-1/2 w-32 h-32 bg-mindlab-red/5 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-1/4 left-1/4 w-24 h-24 bg-mindlab-red/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Repositioned and Simplified Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-mindlab-gray-medium">
        <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs uppercase tracking-wide font-medium">Scroll</span>
          <div className="w-px h-8 bg-mindlab-red"></div>
        </div>
      </div>
    </section>
  );
}