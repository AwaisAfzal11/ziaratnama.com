import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Shield, Compass, Star, ArrowRight, CheckCircle, Users, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';



export function Home() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-[#dc2626]" />,
      title: "Trust",
      description: "We are a registered and licensed travel company ensuring transparency and reliability in every booking."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#dc2626]" />,
      title: "Convenience",
      description: "From Jeddah Airport to Makkah and Madinah hotels, every step of your journey — transport, stay, and services — is managed by us, so you can focus entirely on your worship."
    },
    {
      icon: <Compass className="w-8 h-8 text-[#dc2626]" />,
      title: "Guidance",
      description: "Our experienced and dedicated staff provides complete assistance, ensuring you never face difficulties at any stage of your pilgrimage."
    }
  ];

  const destinations = [
    {
      name: "Saudi Arabia",
      subtitle: "🕋 Hajj & Umrah",
      description: "Experience the spirituality of the Haramain Sharifain with options from Economy to Five-Star hotels.",
      image: "https://images.unsplash.com/photo-1571909552531-1601eaec8f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWFiYSUyMG1lY2NhJTIwaG9seSUyMG1vc3F1ZXxlbnwxfHx8fDE3NTgyOTcyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Iraq",
      subtitle: "🕌 Ziyarats",
      description: "Visit Najaf, Karbala, Kufa, Kadhimain, and Samarra to pay respects at the shrines of Ahl al-Bayt (AS).",
      image: "https://images.unsplash.com/photo-1700130375571-8f2eca1b825e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWphZiUyMHNocmluZSUyMGlzbGFtaWMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU4Mjk3MjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Iran",
      subtitle: "🌙 Spiritual Journeys",
      description: "Spiritual journeys to Mashhad (Imam Reza), Qom, and other sacred sites.",
      image: "/iran2.jfif"
    },
    {
      name: "Syria",
      subtitle: "🕊 Ziyarats",
      description: "Pilgrimage to the shrines of Sayyida Zainab and Sayyida Ruqayyah in Damascus.",
      image: "/syria.jpg"
    }
  ];

  const stats = [
    { icon: <Users className="w-10 h-10 text-[#dc2626]" />, number: "1000+", label: "Happy Pilgrims" },
    { icon: <Globe className="w-10 h-10 text-[#dc2626]" />, number: "4", label: "Countries" },
    { icon: <Award className="w-10 h-10 text-[#dc2626]" />, number: "5+", label: "Years Experience" },
    { icon: <CheckCircle className="w-10 h-10 text-[#dc2626]" />, number: "100%", label: "Satisfaction" }
  ];
  const packages = [
    { title: "Economy", description: "Standard hotels, Quad Sharing, perfect for budget travelers." },
    { title: "Economy Plus", description: "3★ hotels, Triple Sharing, extra comfort with affordability." },
    { title: "4-Star", description: "Premium facilities with Single, Double, Triple, and Quad room options." },
    { title: "5-Star", description: "Luxury brands, near-Haram accommodations, world-class comfort." }
  ];
  return (
    <div className="min-h-screen h-auto  max-w-[1640px] mx-auto">
      {/* Hero Section */}
      <section className="relative  min-h-screen flex w-full justify-center  items-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1571909552531-1601eaec8f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWFiYSUyMG1lY2NhJTIwaG9seSUyMG1vc3F1ZXxlbnwxfHx8fDE3NTgyOTcyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Kaaba at Mecca"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a365d]/85"></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#dc2626]/15 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-10 w-24 h-24 bg-[#c7941e]/10 rounded-full blur-xl animate-pulse delay-1000"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto    px-4">
          <div className="w-full mx-auto flex flex-col items-center">
            <div className="mb-8 " style={{ marginTop: '100px' }}>
              <Badge className="bg-[#dc2626]/25 text-[#dc2626] border-[#dc2626]/40 font-['Nunito_Sans'] text-sm px-4 py-2 shadow-lg">
                ✨ Sacred Journeys Await
              </Badge>
            </div>

            {/* <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Your{' '}
              <span className="bg-gradient-to-r from-[#c7941e] to-[#f7e98e] bg-clip-text text-transparent drop-shadow-lg">
                Spiritual Journey
              </span>
              <br />
              Begins Here
            </h1> */}

            <p className="font-['Nunito_Sans'] text-center text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
              Welcome to Ziaratnama Travels (Pvt) Ltd — where Hajj, Umrah, and Ziyarats are not just journeys but profound spiritual experiences. Our mission is to make your sacred travel convenient, organized, and memorable. Whether this is your first pilgrimage or a return visit, we provide the best packages, comfortable accommodations, and transparent arrangements tailored for your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to='/packages'>
                <Button
                  size="lg"
                  className="bg-gradient-to-r cursor-pointer from-[#c7941e] to-[#f7e98e] text-[#0a1219] hover:from-[#996f10] hover:to-[#c7941e] font-['Nunito_Sans'] font-semibold px-10 py-5 text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border border-[#c7941e]/30"
                >
                  Explore Packages
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to='/about'>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 cursor-pointer text-white bg-white/15 backdrop-blur-md hover:bg-white hover:text-[#1a365d] font-['Nunito_Sans'] font-semibold px-10 py-5 text-lg transition-all duration-300 shadow-lg"
                >
                  Learn More
                </Button>
              </Link>
            </div>


          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute md:block hidden bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <div className='py-24 px-4 md:px-8 '>
        <div className="text-center mb-20">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-[#1a365d] mb-6">
            Our Promise
          </h2>
          <p className="font-['Nunito_Sans'] text-xl text-[#0a1219]/70 max-w-3xl mx-auto">
            Our foundation rests on three pillars: Trust, Convenience, and Guidance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <div className="mx-auto mb-3 p-3 backdrop-blur-sm rounded-full w-fit group-hover:bg-white/20 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="font-['Playfair_Display'] font-bold text-lg text-[#1a365d] mb-1">{feature.title}</h3>
              <p className="font-['Nunito_Sans'] text-sm text-black">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Quick Stats Section */}


      {/* Featured Destinations Preview */}
      <section className="py-24 bg-gradient-to-br from-[#1a365d] to-[#2c5530] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.1)_45%,rgba(255,255,255,0.1)_55%,transparent_60%)] bg-[length:40px_40px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Featured Destinations
            </h2>
            <p className="font-['Nunito_Sans'] text-xl text-white/95 max-w-3xl mx-auto">
              Our services extend beyond Saudi Arabia to other significant Islamic destinations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {destinations.map((destination, index) => (
              <Card
                key={index}
                className="group overflow-hidden cursor-pointer border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="font-['Playfair_Display'] text-xl font-bold mb-1 drop-shadow-md">
                      {destination.name}
                    </h3>
                    <p className="font-['Nunito_Sans'] text-sm opacity-95 font-medium">
                      {destination.subtitle}
                    </p>
                    <p className="font-['Nunito_Sans'] text-xs opacity-90 mt-1 leading-relaxed">
                      {destination.description}
                    </p>
                  </div>
                  <div className="absolute top-6 right-6">
                    <Star className="w-6 h-6 text-[#c7941e] fill-current drop-shadow-md" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to='/destinations'>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#c7941e] to-[#f7e98e] text-[#0a1219] hover:from-[#996f10] hover:to-[#c7941e] font-['Nunito_Sans'] font-semibold px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border border-[#c7941e]/30"
              >
                Explore All Destinations
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>



      {/* Packages */}
      <section className="py-24 bg-[#1a365d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold mb-6">Our Packages</h2>
          <p className="font-['Nunito_Sans'] text-xl mb-12">Flexible options to suit every budget and preference</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative">
            {packages.map((pkg, i) => (
              <Card
                key={i}
                className="shadow-2xl  bg-white text-[#1a365d] flex flex-col justify-between border-0 hover:scale-105 hover:shadow-3xl transition-all duration-300 group"
              >
                <CardContent className="py-10 px-6 flex flex-col relative">
                  <div className="flex-grow">
                    <h3 className="font-['Playfair_Display'] pt-6 text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#c7941e] transition-colors duration-300">
                      {pkg.title}
                    </h3>
                    <p className="font-['Nunito_Sans'] text-base md:text-lg mb-6 text-[#0a1219]/80">{pkg.description}</p>
                  </div>
                </CardContent>
                <div className="px-10 pb-8">
                  <Link to='/contact'>
                    <Button
                      size="lg"

                      className="w-full bg-gradient-to-r from-[#c7941e] to-[#f7e98e] cursor-pointer text-[#1a365d] font-semibold font-['Nunito_Sans'] shadow-lg hover:from-[#b8860b] hover:to-[#c7941e] transition-all duration-300"
                    >
                      Book Now
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-br from-[#fffef7] to-[#f7f3e9]">
        <div className="container mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-[#1a365d] mb-6">
            Instalment Plans
          </h2>
          <p className="font-['Nunito_Sans'] text-xl text-[#0a1219]/70 mb-12">
            We are among the few in Pakistan offering Instalment-based Umrah & Ziyarat packages
          </p>

          {/* Card */}
          <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-10 text-left">
            <ul className="space-y-6 text-lg">
              <li className="flex items-start space-x-3">
                <span className="text-[#dc2626] mt-1">✔</span>
                <span>10% advance booking</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#dc2626] mt-1">✔</span>
                <span>24 easy monthly instalments</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#dc2626] mt-1">✔</span>
                <span>10% final payment in the 25th month</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#dc2626] mt-1">✔</span>
                <span>Departure after 100% payment completion</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className=" mx-auto px-6 lg:px-12 py-10">
          <div className="bg-white rounded-3xl shadow-xl p-10 ">
            <div className="flex flex-col  md:flex-row items-center md:items-start gap-12">

              {/* Left Icon Section */}
              <div className="flex-shrink-0">
                <div className="  flex items-center justify-center ">
                  <Shield size={40} className=" text-[#1a365d]" />
                </div>
              </div>

              {/* Right Content Section */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-[#1a365d] mb-10">
                  Our Mission & Vision
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Mission Card */}
                  <div className="bg-gradient-to-br from-[#fffef7] to-[#fdfbf6] rounded-2xl p-5 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="font-['Nunito_Sans'] text-xl font-semibold text-[#c7941e] mb-3">
                      Mission
                    </h3>
                    <p className="font-['Nunito_Sans'] text-base text-[#0a1219]/80 leading-relaxed">
                      Our mission is not just to provide travel arrangements but to create a platform that brings ease and peace to every Muslim’s spiritual journey.
                    </p>
                  </div>

                  {/* Vision Card */}
                  <div className="bg-gradient-to-br from-[#fffef7] to-[#fdfbf6] rounded-2xl p-5 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="font-['Nunito_Sans'] text-xl font-semibold text-[#c7941e] mb-3">
                      Vision
                    </h3>
                    <p className="font-['Nunito_Sans'] text-base text-[#0a1219]/80 leading-relaxed">
                      Our vision is to make Ziaratnama Travels the most trusted and first choice for Hajj, Umrah, and Ziyarat services globally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-24 bg-gradient-to-br from-[#fffef7] to-[#f7f3e9] relative">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#1a365d_1px,transparent_0)] bg-[length:30px_30px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-[#1a365d] mb-6">
              Trusted by Thousands
            </h2>
            <p className="font-['Nunito_Sans'] text-xl text-[#0a1219]/70 max-w-3xl mx-auto">
              Join the thousands who have trusted us with their sacred journeys
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white via-[#f7f3e9] to-[#fffef7] group">
                <CardContent className="p-10">
                  <div className="mx-auto mb-6 p-5 bg-gradient-to-br from-[#c7941e]/15 to-[#f7e98e]/8 rounded-full w-fit group-hover:shadow-lg transition-all duration-500">
                    {stat.icon}
                  </div>
                  <h3 className="font-['Playfair_Display'] text-4xl font-bold text-[#1a365d] mb-3">{stat.number}</h3>
                  <p className="font-['Nunito_Sans'] text-lg text-[#0a1219]/70">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-[#fffef7] to-[#f7f3e9]">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-r from-[#1a365d] to-[#2c5530]">
            <CardContent className="p-16 text-center text-white relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c7941e]/20 to-transparent rounded-full blur-xl"></div>
              <div className="relative z-10">
                <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold mb-8">
                  Begin Your Sacred Journey Today
                </h2>
                <p className="font-['Nunito_Sans'] text-xl mb-10 opacity-95 max-w-3xl mx-auto">
                  Let us guide you through a spiritually fulfilling pilgrimage that you'll cherish forever
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link to='/packages'>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r cursor-pointer from-[#b8860b] to-[#daa520] text-white hover:from-[#9a7209] hover:to-[#b8860b] font-['Nunito_Sans'] font-semibold px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                    >
                      View Packages
                    </Button>
                  </Link>
                  <Link to='/contact'>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/40 cursor-pointer text-white bg-white/15 backdrop-blur-md hover:bg-white hover:text-[#0f4c5c] font-['Nunito_Sans'] font-semibold px-10 py-5 transition-all duration-300 shadow-lg"
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