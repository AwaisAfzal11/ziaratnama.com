import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-mindlab-gray via-mindlab-black to-mindlab-gray text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B91C1C' fill-opacity='0.3'%3E%3Ccircle cx='6' cy='6' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Let's Build Something <span className="text-mindlab-red">Great Together</span>
          </h2>
          
          <div className="w-24 h-1 bg-mindlab-red mx-auto mb-12"></div>
          
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-12 max-w-3xl mx-auto">
            Looking to upskill your team or streamline your business processes? 
            Reach out today to discover how MindLab can help transform your organization and unleash your people's potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-mindlab-red hover:bg-mindlab-red-dark text-white px-12 py-4 text-lg transition-all duration-300 shadow-mindlab-red hover:shadow-xl group"
            >
              Contact Us Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <div className="flex items-center gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available 24/7</span>
              </div>
              <span className="text-sm">|</span>
              <span className="text-sm font-medium">Free consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}