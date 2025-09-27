import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { MapPin, Star, Plane, Clock, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';



export function Destinations() {
  const destinations = [
    {
      id: 'saudi-arabia',
      name: "Saudi Arabia",
      subtitle: "Hajj & Umrah",
      description: "Ziaratnama Travels (Pvt) Ltd offers organized Hajj & Umrah packages to Makkah and Madinah, the holiest sites for Muslims. Our aim is to ensure every pilgrim experiences ease, trust, and spiritual tranquility throughout their journey.",
      image: "https://images.unsplash.com/photo-1571909552531-1601eaec8f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWFiYSUyMG1lY2NhJTIwaG9seSUyMG1vc3F1ZXxlbnwxfHx8fDE3NTgyOTcyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      significance: "Makkah and Madinah are the holiest sites for Muslims worldwide. Hajj and Umrah are among the most significant acts of worship in Islam.",
      highlights: [
        "The Kaaba & Masjid al-Haram",
        "The Prophet’s Mosque in Madinah",
        "Historical sites like Uhud, Masjid Quba, etc.",
        "Jannat al-Baqi Cemetery",
        "Cave of Hira",
        "Masjid Quba - First mosque in Islam"
      ],
      packages: "Economy (Quad), Economy Plus (Triple), 4★ & 5★ Luxury",
      duration: "14-30 days",
      groupSize: "15-50 people",
      features: [
        "Airport transfers in luxury vehicles",
        "Guided ziyarat tours with knowledgeable guides",
        "Quality accommodation near Haram (Standard to 5★)",
        "Flexible booking policies",
        "Visa assistance",
        "24/7 customer support"
      ]
    },
    {
      id: 'iraq',
      name: "Iraq",
      subtitle: "Ziyarat Tours",
      description: "Visit the sacred shrines of Ahl al-Bayt (AS) in Najaf, Karbala, Kufa, Kadhimain, and Samarra. Our packages include intercity transport and expert guides for a meaningful experience.",
      image: "https://images.unsplash.com/photo-1700130375571-8f2eca1b825e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWphZiUyMHNocmluZSUyMGlzbGFtaWMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU4Mjk3MjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      significance: "Iraq is home to the shrines of Ahl al-Bayt (AS) and countless historic Islamic events. Millions of pilgrims visit Najaf, Karbala, and other cities annually.",
      highlights: [
        "Najaf al-Ashraf (Shrine of Imam Ali AS)",
        "Karbala (Imam Hussain AS & Hazrat Abbas AS)",
        "Kufa Mosque and landmarks",
        "Kadhimain (Imam Musa al-Kadhim & Imam Muhammad Taqi AS)",
        "Samarra (Imam Ali al-Naqi & Imam Hasan al-Askari AS)",
        "Historic Islamic sites and museums"
      ],
      packages: "Economy to 5★ hotels",
      duration: "7-14 days",
      groupSize: "10-40 people",
      features: [
        "Airport transfers and intercity transport",
        "Expert local guides",
        "Group and family packages",
        "Guided ziyarat programs",
        "Comfortable accommodations",
        "Visa and support services"
      ]
    },
    {
      id: 'iran',
      name: "Iran",
      subtitle: "Spiritual Journeys",
      description: "Spiritual journeys to Mashhad (Imam Reza AS), Qom (Bibi Masooma AS), and other significant religious centers. Packages include 3★, 4★, and 5★ hotels with intercity flights or bus transport.",
      image: "/iran2.jfif",
      significance: "Iran is home to important shrines of Ahl al-Bayt (AS) and religious centers attracting pilgrims globally.",
      highlights: [
        "Mashhad (Shrine of Imam Ali Raza AS)",
        "Qom (Shrine of Bibi Masooma AS)",
        "Historical & religious landmarks in Shiraz",
        "Religious centers in Tehran",
        "Beautiful Persian architecture",
        "Cultural and spiritual sites"
      ],
      packages: "3★, 4★, and 5★ hotels",
      duration: "7-12 days",
      groupSize: "12-35 people",
      features: [
        "Quality accommodation options",
        "Comprehensive visa support",
        "Organized group tours",
        "Family-friendly packages",
        "Intercity flights or bus transport",
        "Guided ziyarat programs"
      ]
    },
    {
      id: 'syria',
      name: "Syria",
      subtitle: "Historic Pilgrimages",
      description: "Pilgrimage to the sacred shrines of Sayyida Zainab (AS) and Sayyida Ruqayyah (AS) in Damascus. Packages range from Economy to 4★ hotels, subject to visa & security advisories.",
      image: "syria.jpg",
      significance: "Syria holds immense spiritual importance due to Islamic history and Ahl al-Bayt (AS) shrines.",
      highlights: [
        "Shrine of Sayyida Zainab (AS) in Damascus",
        "Shrine of Sayyida Ruqayyah (AS)",
        "Historic mosques and sites",
        "Umayyad Mosque",
        "Ancient Damascus old city",
        "Cultural heritage sites"
      ],
      packages: "Economy to 4★ hotels",
      duration: "5-10 days",
      groupSize: "8-25 people",
      features: [
        "Professional guides",
        "Safety and security support",
        "Group and individual packages",
        "Guided ziyarat programs",
        "Historic site visits",
        "Visa and support services"
      ]
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
          <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-white mb-6">
            Sacred{' '}
            <span className="bg-gradient-to-r from-[#c7941e] to-[#f7e98e] bg-clip-text text-transparent">
              Destinations
            </span>
          </h1>
          <p className="font-['Nunito_Sans'] text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Embark on spiritually enriching journeys to the most revered Islamic destinations across four countries
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-gradient-to-br from-[#fffef7] to-[#f7f3e9]">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {destinations.map((destination, index) => (
              <Card key={destination.id} className={`border-0 shadow-2xl overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:flex">
                  {/* Image Section */}
                  <div className="lg:w-1/2 relative h-96 lg:h-auto overflow-hidden">
                    <ImageWithFallback
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/60 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-[#c7941e] text-[#0a1219] font-['Nunito_Sans'] font-semibold">
                        {destination.packages}
                      </Badge>
                    </div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-2">{destination.name}</h3>
                      <p className="font-['Nunito_Sans'] text-lg opacity-90">{destination.subtitle}</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <MapPin className="w-6 h-6 text-[#c7941e] mr-3" />
                        <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#1a365d]">
                          {destination.name}
                        </h3>
                      </div>
                      <p className="font-['Nunito_Sans'] text-[#0a1219]/80 leading-relaxed mb-6">
                        {destination.description}
                      </p>
                      <p className="font-['Nunito_Sans'] text-[#0a1219]/70 leading-relaxed mb-6 italic">
                        {destination.significance}
                      </p>
                    </div>

                    {/* Trip Details */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center p-4 bg-gradient-to-br from-[#c7941e]/10 to-[#f7e98e]/5 rounded-lg">
                        <Clock className="w-6 h-6 text-[#c7941e] mx-auto mb-2" />
                        <p className="font-['Nunito_Sans'] text-sm font-semibold text-[#1a365d]">{destination.duration}</p>
                        <p className="font-['Nunito_Sans'] text-xs text-[#0a1219]/60">Duration</p>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-[#c7941e]/10 to-[#f7e98e]/5 rounded-lg">
                        <Users className="w-6 h-6 text-[#c7941e] mx-auto mb-2" />
                        <p className="font-['Nunito_Sans'] text-sm font-semibold text-[#1a365d]">{destination.groupSize}</p>
                        <p className="font-['Nunito_Sans'] text-xs text-[#0a1219]/60">Group Size</p>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-[#c7941e]/10 to-[#f7e98e]/5 rounded-lg">
                        <Plane className="w-6 h-6 text-[#c7941e] mx-auto mb-2" />
                        <p className="font-['Nunito_Sans'] text-sm font-semibold text-[#1a365d]">{destination.packages}</p>
                        <p className="font-['Nunito_Sans'] text-xs text-[#0a1219]/60">Packages</p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-8">
                      <h4 className="font-['Playfair_Display'] font-bold text-[#1a365d] mb-4">Sacred Sites & Highlights</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {destination.highlights.slice(0, 4).map((highlight, idx) => (
                          <div key={idx} className="flex items-center">
                            <Star className="w-4 h-4 text-[#c7941e] mr-3 flex-shrink-0" />
                            <span className="font-['Nunito_Sans'] text-[#0a1219]/80 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-['Playfair_Display'] font-bold text-[#1a365d] mb-4">Package Features</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {destination.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-[#2c5530] rounded-full mr-3 flex-shrink-0"></div>
                            <span className="font-['Nunito_Sans'] text-[#0a1219]/80 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link to='/packages'>
                    <Button 
                      className="w-full bg-gradient-to-r from-[#1a365d] to-[#2c5530] text-white hover:from-[#0f2a44] hover:to-[#1a3321] font-['Nunito_Sans'] font-semibold py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      View Packages for {destination.name}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
<section className="py-20 bg-gradient-to-br from-[#fffef7] to-[#f7f3e9]">
<div className="container mx-auto px-4">
<div className="text-center mb-16">
<h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
Additional Information
</h2>
<p className="font-['Nunito_Sans'] text-lg text-[#0a1219]/80 max-w-3xl mx-auto">
Every Ziaratnama Travels (Pvt) Ltd package ensures you travel with complete peace of mind
</p>
</div>


<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
{[
{ title: "Airport Transfers", desc: "Seamless pickups and drop-offs for stress-free travel" },
{ title: "Intercity Transport", desc: "Safe and comfortable journeys between holy cities" },
{ title: "Hotel Accommodation", desc: "From economy to 5★ luxury, stay as per your chosen category" },
{ title: "Guided Ziyarat Programs", desc: "Meaningful tours with knowledgeable religious guides" },
{ title: "Visa Services", desc: "Complete visa and documentation support" },
{ title: "24/7 Assistance", desc: "Dedicated support team available round-the-clock" }
].map((item, idx) => (
<Card key={idx} className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
<CardContent className="p-6 flex items-start">
<CheckCircle className="w-6 h-6 text-[#2c5530] mr-4 mt-1 flex-shrink-0" />
<div>
<h3 className="font-['Playfair_Display'] font-bold text-[#1a365d] mb-2 text-lg">{item.title}</h3>
<p className="font-['Nunito_Sans'] text-[#0a1219]/70 text-sm leading-relaxed">{item.desc}</p>
</div>
</CardContent>
</Card>
))}
</div>
</div>
</section>
      {/* Why Choose Our Destinations */}
      <section className="py-20 bg-gradient-to-br from-[#1a365d] to-[#2c5530]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Destination Packages?
            </h2>
            <p className="font-['Nunito_Sans'] text-lg text-white/80 max-w-3xl mx-auto">
              Every Ziaratnama Travels package ensures a complete, worry-free spiritual journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Plane className="w-8 h-8 text-[#c7941e]" />,
                title: "Airport Transfers",
                description: "Comfortable transfers from arrival to departure"
              },
              {
                icon: <MapPin className="w-8 h-8 text-[#c7941e]" />,
                title: "Intercity Transport",
                description: "Safe and comfortable travel between cities"
              },
              {
                icon: <Users className="w-8 h-8 text-[#c7941e]" />,
                title: "Expert Guides",
                description: "Knowledgeable guides for meaningful experiences"
              },
              {
                icon: <Star className="w-8 h-8 text-[#c7941e]" />,
                title: "Quality Accommodation",
                description: "Comfortable stays as per chosen category"
              }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white/95 backdrop-blur-sm text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-[#c7941e]/10 to-[#f7e98e]/5 rounded-full w-fit">
                    {item.icon}
                  </div>
                  <h3 className="font-['Playfair_Display'] font-bold text-[#1a365d] mb-2">{item.title}</h3>
                  <p className="font-['Nunito_Sans'] text-[#0a1219]/70 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#f7f3e9] to-[#fffef7]">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-r from-[#1a365d] to-[#2c5530]">
            <CardContent className="p-12 text-center text-white relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c7941e]/20 to-transparent rounded-full blur-xl"></div>
              <div className="relative z-10">
                <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-6">
                  Ready to Embark on Your Sacred Journey?
                </h2>
                <p className="font-['Nunito_Sans'] text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Choose from our carefully crafted packages and begin your spiritual transformation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to='/packages'>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-[#c7941e] to-[#f7e98e] text-[#0a1219] hover:from-[#996f10] hover:to-[#c7941e] font-['Nunito_Sans'] font-semibold px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Explore All Packages
                  </Button>
                  </Link>
                  <Link to='/contact'>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#1a365d] font-['Nunito_Sans'] font-semibold px-8 py-4 transition-all duration-300"
                  >
                    Contact Us
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