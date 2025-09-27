import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Heart, Shield, Compass } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-[#1e293b]">
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1571909552531-1601eaec8f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWFiYSUyMG1lY2NhJTIwaG9seSUyMG1vc3F1ZXxlbnwxfHx8fDE3NTgyOTcyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Kaaba at Mecca"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 flex items-center min-h-screen">
        <div className="max-w-4xl text-white">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            Welcome to{' '}
            <span className="text-[#dc2626]">Ziaratnama Travels</span>
          </h1>
          
          <p className="font-['Nunito_Sans'] text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            Where Hajj, Umrah, and Ziyarats are not just journeys but profound spiritual experiences. 
            Your sacred travel made convenient, organized, and memorable.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="w-8 h-8 text-[#d97706]" />
              <div>
                <h3 className="font-['Playfair_Display'] font-semibold">Trust</h3>
                <p className="font-['Nunito_Sans'] text-sm opacity-80">Licensed & Transparent</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Heart className="w-8 h-8 text-[#d97706]" />
              <div>
                <h3 className="font-['Playfair_Display'] font-semibold">Convenience</h3>
                <p className="font-['Nunito_Sans'] text-sm opacity-80">Complete Journey Management</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Compass className="w-8 h-8 text-[#d97706]" />
              <div>
                <h3 className="font-['Playfair_Display'] font-semibold">Guidance</h3>
                <p className="font-['Nunito_Sans'] text-sm opacity-80">Expert Support</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#dc2626] text-white hover:bg-[#b91c1c] font-['Nunito_Sans'] font-semibold px-8 py-3">
              Explore Packages
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#dc2626] font-['Nunito_Sans'] font-semibold px-8 py-3">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}