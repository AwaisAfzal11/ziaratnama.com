import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Plane, Users, MapPin, Shield, CheckCircle } from 'lucide-react';

export function TravelismSection() {
  const visaCategories = [
    {
      title: "Visa-Free Countries",
      icon: <CheckCircle className="w-6 h-6 text-[#2d5a4f]" />,
      countries: ["Barbados", "Dominica", "Haiti", "Rwanda", "Trinidad & Tobago", "Vanuatu"],
      description: "No visa required for Pakistani passport holders"
    },
    {
      title: "Visa on Arrival",
      icon: <Plane className="w-6 h-6 text-[#d4af37]" />,
      countries: ["Maldives", "Nepal", "Qatar", "Cambodia", "Seychelles", "Madagascar"],
      description: "Get your visa upon arrival at the destination"
    },
    {
      title: "eVisa Countries",
      icon: <MapPin className="w-6 h-6 text-[#1e3a5f]" />,
      countries: ["Turkey", "UAE", "Malaysia", "Oman", "Azerbaijan", "Sri Lanka"],
      description: "Apply for electronic visa online"
    }
  ];

  return (
    <section className="py-20 bg-[#f4f1e8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#d4af37] text-[#1a2b3d] px-4 py-2 rounded-full font-['Nunito_Sans'] font-semibold mb-4">
            Powered by Ziaratnama Travels
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-[#1e3a5f] mb-4">
            Travelism
          </h2>
          <p className="font-['Nunito_Sans'] text-lg text-[#1a2b3d] max-w-3xl mx-auto">
            A premium travel service for destinations where Pakistani passport holders enjoy 
            visa-free access, visa-on-arrival, or eVisa facilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#1e3a5f] mb-6">
              Complete Travel Solutions
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Users className="w-8 h-8 text-[#d4af37] mt-1" />
                <div>
                  <h4 className="font-['Playfair_Display'] font-semibold text-[#1e3a5f] mb-2">
                    Family & Solo Tours
                  </h4>
                  <p className="font-['Nunito_Sans'] text-[#1a2b3d]">
                    Customized family-friendly tours with luxury or budget hotels. 
                    Flexible solo packages with options to join groups or travel independently.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Plane className="w-8 h-8 text-[#d4af37] mt-1" />
                <div>
                  <h4 className="font-['Playfair_Display'] font-semibold text-[#1e3a5f] mb-2">
                    Hotel Booking & Air Tickets
                  </h4>
                  <p className="font-['Nunito_Sans'] text-[#1a2b3d]">
                    Complete packages including hotel bookings (budget to luxury), 
                    air tickets, airport transfers, and local guides.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-[#d4af37] mt-1" />
                <div>
                  <h4 className="font-['Playfair_Display'] font-semibold text-[#1e3a5f] mb-2">
                    Visa Support & Insurance
                  </h4>
                  <p className="font-['Nunito_Sans'] text-[#1a2b3d]">
                    Complete visa guidance, travel insurance, and 24/7 customer service 
                    for a worry-free travel experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h4 className="font-['Playfair_Display'] text-xl font-semibold text-[#1e3a5f] mb-6">
              Our Commitment
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#2d5a4f]" />
                <span className="font-['Nunito_Sans'] text-[#1a2b3d]">Transparent pricing and easy booking</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#2d5a4f]" />
                <span className="font-['Nunito_Sans'] text-[#1a2b3d]">100% interest-free and clear plans</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#2d5a4f]" />
                <span className="font-['Nunito_Sans'] text-[#1a2b3d]">Dedicated options for families and solo travelers</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#2d5a4f]" />
                <span className="font-['Nunito_Sans'] text-[#1a2b3d]">Complete visa support and guidance</span>
              </div>
            </div>
            
            <Button className="w-full mt-6 bg-[#1e3a5f] text-white hover:bg-[#2d4a6b] font-['Nunito_Sans'] font-semibold">
              Explore Destinations
            </Button>
          </div>
        </div>

        <div>
          <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#1e3a5f] mb-8 text-center">
            Visa Guidelines by Category
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {visaCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-[#f4f1e8] rounded-full w-fit">
                    {category.icon}
                  </div>
                  <h4 className="font-['Playfair_Display'] font-semibold text-[#1e3a5f] mb-2">
                    {category.title}
                  </h4>
                  <p className="font-['Nunito_Sans'] text-sm text-[#1a2b3d]">
                    {category.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2">
                    {category.countries.map((country, idx) => (
                      <Badge key={idx} variant="outline" className="mr-2 mb-2 font-['Nunito_Sans']">
                        {country}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}