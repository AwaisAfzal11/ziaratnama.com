import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Star } from 'lucide-react';

export function DestinationsSection() {
  const destinations = [
    {
      id: 1,
      name: "Saudi Arabia",
      subtitle: "Hajj & Umrah",
      image: "https://images.unsplash.com/photo-1571909552531-1601eaec8f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWFiYSUyMG1lY2NhJTIwaG9seSUyMG1vc3F1ZXxlbnwxfHx8fDE3NTgyOTcyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Experience the spirituality of Haramain Sharifain with options from Economy to Five-Star hotels.",
      highlights: ["Kaaba & Masjid al-Haram", "Prophet's Mosque in Madinah", "Historical sites like Uhud"],
      packages: "Economy to 5-Star"
    },
    {
      id: 2,
      name: "Iraq",
      subtitle: "Ziyarat Tours",
      image: "https://images.unsplash.com/photo-1700130375571-8f2eca1b825e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWphZiUyMHNocmluZSUyMGlzbGFtaWMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU4Mjk3MjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Visit Najaf, Karbala, Kufa, Kadhimain, and Samarra to pay respects at the shrines of Ahl al-Bayt (AS).",
      highlights: ["Najaf al-Ashraf", "Karbala Shrines", "Kadhimain & Samarra"],
      packages: "Economy to 5-Star"
    },
    {
      id: 3,
      name: "Iran",
      subtitle: "Spiritual Journeys",
      image: "https://images.unsplash.com/photo-1638842491977-3c7ff4c484a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwcGlsZ3JpbWFnZSUyMHNwaXJpdHVhbCUyMGpvdXJuZXl8ZW58MXx8fHwxNzU4Mjk3MjEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Spiritual journeys to Mashhad (Imam Reza), Qom, and other significant religious sites.",
      highlights: ["Mashhad (Imam Ali Raza)", "Qom (Bibi Masooma)", "Historical landmarks"],
      packages: "3 to 5-Star"
    },
    {
      id: 4,
      name: "Syria",
      subtitle: "Historic Pilgrimages",
      image: "https://images.unsplash.com/photo-1670602328279-82c100b3dfa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwY2FsbGlncmFwaHklMjBnb2xkJTIwZW1lcmFsZHxlbnwxfHx8fDE3NTgyOTcyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Pilgrimage to the shrines of Sayyida Zainab and Sayyida Ruqayyah in Damascus.",
      highlights: ["Shrine of Sayyida Zainab", "Shrine of Sayyida Ruqayyah", "Historic Damascus"],
      packages: "Economy to 4-Star"
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-[#1e3a5f] mb-4">
            Sacred Destinations
          </h2>
          <p className="font-['Nunito_Sans'] text-lg text-[#1a2b3d] max-w-3xl mx-auto">
            Our services extend to the most significant Islamic destinations, ensuring your spiritual journey 
            is meaningful and well-organized.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#d4af37] text-[#1a2b3d] hover:bg-[#c19b26]">
                    {destination.packages}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 text-[#2d5a4f] mr-2" />
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#1e3a5f]">
                    {destination.name}
                  </h3>
                </div>
                
                <h4 className="font-['Nunito_Sans'] font-semibold text-[#2d5a4f] mb-3">
                  {destination.subtitle}
                </h4>
                
                <p className="font-['Nunito_Sans'] text-[#1a2b3d] text-sm mb-4 leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="space-y-2">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <Star className="w-3 h-3 text-[#d4af37] mr-2" />
                      <span className="font-['Nunito_Sans'] text-[#1a2b3d]">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-['Nunito_Sans'] text-[#1a2b3d] mb-4">
            Every package includes airport transfers, quality accommodation, guided tours, and visa support.
          </p>
        </div>
      </div>
    </section>
  );
}