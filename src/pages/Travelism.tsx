import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Plane, Users,  Shield, CheckCircle, Globe, Camera, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';


export function Travelism() {
  const visaCategories = [
    {
      title: "Visa-Free Countries",
      icon: <CheckCircle className="w-8 h-8 text-[#2c5530]" />,
      countries: ["Barbados", "Dominica", "Haiti", "Rwanda", "Trinidad & Tobago", "Vanuatu", "Montserrat", "St. Vincent & Grenadines"],
      description: "Travel without visa requirements for Pakistani passport holders",
      color: "from-[#2c5530] to-[#68d391]"
    },
    {
      title: "Visa on Arrival",
      icon: <Plane className="w-8 h-8 text-[#c7941e]" />,
      countries: ["Maldives", "Nepal", "Qatar", "Cambodia", "Seychelles", "Madagascar", "Burundi", "Guinea-Bissau"],
      description: "Get your visa upon arrival at the destination airport",
      color: "from-[#c7941e] to-[#f7e98e]"
    },
    {
      title: "eVisa Countries",
      icon: <Globe className="w-8 h-8 text-[#1a365d]" />,
      countries: ["Turkey", "UAE", "Malaysia", "Oman", "Azerbaijan", "Sri Lanka", "Albania", "Bahrain"],
      description: "Apply for electronic visa online before travel",
      color: "from-[#1a365d] to-[#4a90e2]"
    }
  ];

  const services = [
    {
      icon: <Users className="w-12 h-12 text-[#c7941e]" />,
      title: "Family & Group Tours",
      description: "Customized family-friendly tours with luxury or budget accommodations. Perfect for creating lasting memories with loved ones.",
      features: ["Multi-generational planning", "Child-friendly activities", "Flexible itineraries", "Group discounts"]
    },
    {
      icon: <Heart className="w-12 h-12 text-[#c7941e]" />,
      title: "Solo Travel Packages",
      description: "Flexible solo packages with options to join groups or travel independently. Safe and enriching experiences for solo adventurers.",
      features: ["Safety-first approach", "Join-in group options", "Cultural immersion", "24/7 support"]
    },
    {
      icon: <Plane className="w-12 h-12 text-[#c7941e]" />,
      title: "Complete Travel Solutions",
      description: "All-inclusive packages covering flights, accommodation, transfers, and local experiences under one roof.",
      features: ["Flight bookings", "Hotel reservations", "Airport transfers", "Travel insurance"]
    },
    {
      icon: <Camera className="w-12 h-12 text-[#c7941e]" />,
      title: "Cultural Experiences",
      description: "Immerse yourself in local cultures with guided tours, authentic cuisine, and meaningful local interactions.",
      features: ["Local guides", "Cultural activities", "Authentic cuisine", "Heritage sites"]
    }
  ];

  const popularDestinations = [
    {
      name: "Maldives",
      type: "Visa on Arrival",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMGlzbGFuZCUyMGJlYWNofGVufDF8fHx8MTc1ODI5NzIxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Tropical paradise with crystal clear waters"
    },
    {
      name: "Turkey",
      type: "eVisa",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJrZXklMjBpc3RhbmJ1bCUyMGJsdWUlMjBtb3NxdWV8ZW58MXx8fHwxNzU4Mjk3MjE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Rich history and stunning architecture"
    },
    {
      name: "UAE",
      type: "eVisa",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGJ1cmdlciUyMGtob2xpZmElMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU4Mjk3MjE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Modern marvels and luxury experiences"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a365d] via-[#2c5530] to-[#1a365d]"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#c7941e]/20 to-[#f7e98e]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-[#68d391]/20 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-gradient-to-r from-[#c7941e] to-[#f7e98e] text-[#0a1219] px-6 py-3 rounded-full font-['Nunito_Sans'] font-bold mb-6 shadow-lg">
            Powered by Ziaratnama Travels
          </div>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-[#c7941e] to-[#f7e98e] bg-clip-text text-transparent">
              Travelism
            </span>
          </h1>
          <p className="font-['Nunito_Sans'] text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Premium travel experiences to destinations where Pakistani passport holders enjoy 
            visa-free access, visa-on-arrival, or eVisa facilities.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-[#fffef7] to-[#f7f3e9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
              Complete Travel Solutions
            </h2>
            <p className="font-['Nunito_Sans'] text-lg text-[#0a1219]/70 max-w-3xl mx-auto">
              From family adventures to solo journeys, we create memorable travel experiences 
              tailored to your preferences and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-[#f7f3e9]">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-gradient-to-br from-[#c7941e]/10 to-[#f7e98e]/5 rounded-full">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mb-3">
                        {service.title}
                      </h3>
                      <p className="font-['Nunito_Sans'] text-[#0a1219]/80 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-[#2c5530] mr-2 flex-shrink-0" />
                            <span className="font-['Nunito_Sans'] text-[#0a1219]/70">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Categories */}
      <section className="py-20 bg-gradient-to-br from-[#1a365d] to-[#2c5530]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">
              Visa Guidelines by Category
            </h2>
            <p className="font-['Nunito_Sans'] text-lg text-white/80 max-w-3xl mx-auto">
              Travel to amazing destinations with simplified visa processes for Pakistani passport holders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {visaCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 overflow-hidden bg-white">
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-[#c7941e]/10 to-[#f7e98e]/5 rounded-full w-fit">
                    {category.icon}
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mb-2">
                    {category.title}
                  </h3>
                  <p className="font-['Nunito_Sans'] text-[#0a1219]/70 text-sm">
                    {category.description}
                  </p>
                </CardHeader>
                
                <CardContent className="px-6 pb-8">
                  <div className="space-y-2">
                    {category.countries.map((country, idx) => (
                      <Badge key={idx} variant="outline" className="mr-2 mb-2 font-['Nunito_Sans'] border-[#0a1219]/20 text-[#0a1219]/80">
                        {country}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-gradient-to-br from-[#f7f3e9] to-[#fffef7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
              Popular Destinations
            </h2>
            <p className="font-['Nunito_Sans'] text-lg text-[#0a1219]/70 max-w-3xl mx-auto">
              Explore some of our most sought-after destinations with simplified visa processes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {popularDestinations.map((destination, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1219]/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`${
                      destination.type === 'Visa on Arrival' ? 'bg-[#c7941e]' :
                      destination.type === 'eVisa' ? 'bg-[#1a365d]' : 'bg-[#2c5530]'
                    } text-white font-['Nunito_Sans']`}>
                      {destination.type}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-['Playfair_Display'] text-xl font-bold mb-1">{destination.name}</h3>
                    <p className="font-['Nunito_Sans'] text-sm opacity-90">{destination.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-gradient-to-br from-[#1a365d] to-[#2c5530]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">
                Our Commitment to You
              </h2>
              <p className="font-['Nunito_Sans'] text-lg text-white/80">
                Excellence in every aspect of your travel experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Shield className="w-8 h-8 text-[#c7941e]" />,
                  title: "Transparent Pricing",
                  description: "Clear, upfront pricing with no hidden costs or surprise charges"
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-[#c7941e]" />,
                  title: "100% Interest-Free Plans",
                  description: "Flexible payment options without any interest or extra charges"
                },
                {
                  icon: <Users className="w-8 h-8 text-[#c7941e]" />,
                  title: "Family & Solo Options",
                  description: "Dedicated packages for families and individual travelers"
                },
                {
                  icon: <Plane className="w-8 h-8 text-[#c7941e]" />,
                  title: "Complete Visa Support",
                  description: "Full guidance and assistance with visa applications and documentation"
                }
              ].map((item, index) => (
                <Card key={index} className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-br from-[#c7941e]/10 to-[#f7e98e]/5 rounded-full">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-['Playfair_Display'] font-bold text-[#1a365d] mb-2">{item.title}</h3>
                        <p className="font-['Nunito_Sans'] text-[#0a1219]/80 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#fffef7] to-[#f7f3e9]">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-r from-[#1a365d] to-[#2c5530]">
            <CardContent className="p-12 text-center text-white relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c7941e]/20 to-transparent rounded-full blur-xl"></div>
              <div className="relative z-10">
                <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-6">
                  Ready to Explore the World?
                </h2>
                <p className="font-['Nunito_Sans'] text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Let Travelism create your perfect travel experience with our expert planning and support
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to='/contact'>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-[#c7941e] to-[#f7e98e] text-[#0a1219] hover:from-[#996f10] hover:to-[#c7941e] font-['Nunito_Sans'] font-semibold px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Plan Your Journey
                  </Button>
                  </Link>
                  <Link to='/packages'>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#1a365d] font-['Nunito_Sans'] font-semibold px-8 py-4 transition-all duration-300"
                  >
                    View All Services
                  </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}