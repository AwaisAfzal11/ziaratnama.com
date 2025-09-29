import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { CheckCircle,  Shield, Heart, Compass, Target, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';



export function About() {
  

  const commitments = [
    "Ensuring your journey is always timely and well-organized",
    "Providing transparent and clear information at all times",
    "Making your comfort and peace our top priority in every package",
    "Treating every customer not just as a client, but as a guest and pilgrim"
  ];



  return (
    <div className="min-h-screen max-w-[1640px] mx-auto">
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a365d] via-[#2c5530] to-[#1a365d]"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#c7941e]/20 to-[#f7e98e]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-[#68d391]/20 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10  container mx-auto px-4 text-center">
          <h1 className="font-['Playfair_Display']  text-4xl md:text-6xl font-bold text-white mb-6">
            About{' '}
            <span className=" bg-gradient-to-r  from-[#c7941e] to-[#f7e98e] bg-clip-text text-transparent">
              Ziaratnama Travels
            </span>
          </h1>
          <p className="font-['Nunito_Sans'] text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
           Ziaratnama Travels (Pvt) Ltd is a registered and licensed company established to make Hajj, Umrah, and Ziyarats dignified, organized, and hassle-free experiences. Our goal is not just to arrange tickets and hotels but to design complete packages that prioritize worship, comfort, and convenience for every pilgrim.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-[#fffef7] to-[#f7f3e9] ">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-[#c7941e] mr-3" />
                  <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#1a365d]">
                    Our Mission
                  </h2>
                </div>
                <p className="font-['Nunito_Sans'] text-lg text-[#0a1219]/80 leading-relaxed">
                  Our mission is to facilitate Muslims in every step of their sacred journey. From airport arrivals to hotel stays, transport arrangements, and ziyarat site visits — Ziaratnama Travels is with you at every step.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-[#c7941e] mr-3" />
                  <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#1a365d]">
                    Our Vision
                  </h2>
                </div>
                <p className="font-['Nunito_Sans'] text-lg text-[#0a1219]/80 leading-relaxed">
                  Our vision is to make Ziaratnama Travels the most trusted and first-choice brand for Hajj, Umrah, and Ziyarats across Pakistan and worldwide. We aim to transform every journey into a spiritually fulfilling and memorable experience.
                </p>
              </div>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1732966729742-e6088d67fa56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpbmElMjBwcm9waGV0JTIwbW9zcXVlJTIwaXNsYW1pY3xlbnwxfHx8fDE3NTgyOTcyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Prophet's Mosque in Medina"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-['Playfair_Display'] text-xl font-bold mb-2">Sacred Journey</h3>
                  <p className="font-['Nunito_Sans'] opacity-90">Where spirituality meets excellence</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

 <section className="bg-gray-50 py-16 px-6 md:px-12 ">
      <div className="sectionlayout  flex flex-col-reverse md:flex-row gap-10 items-center">
        
        {/* Message Content */}
        <div className='w-full md:w-1/2'>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Chairman’s Message
          </h2>
          <h3 className="text-xl font-semibold text-primary-700 mb-2">
            Sarfraz Ahmed Gondal
          </h3>
          <p className="text-sm font-medium text-gray-600 mb-6">
            Chairman – Ziaratnama Group
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            It gives me great pride to lead Ziaratnama Group, a platform
            dedicated to serving the spiritual and travel needs of our people
            with honesty, commitment, and excellence. Our mission is to make
            every journey—whether it is for Umrah, Ziyarat, or other travel
            experiences—a source of peace, comfort, and unforgettable memories.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Ziaratnama, we believe in combining faith with service, ensuring
            that our clients not only reach their destination but also feel a
            deep connection throughout the journey. Transparency, reliability,
            and care are the core values on which we stand, and these values
            guide every step we take.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As we continue to grow, our vision remains the same: to provide
            affordable, trustworthy, and well-organized travel solutions while
            upholding the highest standards of professionalism. With the
            blessings of Allah Almighty and the trust of our valued clients, we
            are confident that Ziaratnama Group will remain a symbol of
            dedication and excellence in the travel industry.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I welcome you all to be a part of our journey, and I assure you that
            with Ziaratnama, your travel will always be in safe and caring hands.
          </p>

          {/* Signature */}
          <div className="mt-6">
            <p className="font-semibold text-gray-800">Warm regards,</p>
            <p className="font-bold text-gray-900">
              Sarfraz Ahmed Gondal
            </p>
            <p className="text-sm text-gray-600">
              Chairman – Ziaratnama Group
            </p>
          </div>
        </div>
          <div className="flex w-full md:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-lg w-full relative">
            <img
              src={'/sarfaraz-chairman.jpeg'}
              alt="Chairman – Ziaratnama Group"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>


     <section className="py-16 bg-gray-50 sectionlayout  shadow-lg rounded-2xl">
      <div className=" mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-center text-[#1a365d] mb-12">
          CEO’s Message
        </h2>

        <Card className=" overflow-hidden bg-white">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* CEO Image */}
            <div className="h-full flex justify-center items-center  ">
              <img
                src={'/sajjad ceo.jpeg'}
                alt="CEO Sajjad Ahmed Gondal"
                className="rounded-tl-xl object-cover w-full max-h-full md:h-[100%]"
              />
            </div>

            {/* Message */}
            <CardContent className="md:col-span-2 p-8">
              <h3 className="text-xl font-bold font-['Nunito_Sans'] text-[#2c5530] mb-2">
                Sajjad Ahmed Gondal
              </h3>
              <p className="text-sm font-semibold text-gray-600 mb-6">
                Chief Executive Officer – Ziaratnama Group
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Ziaratnama Group, our vision is clear: to serve people with integrity, professionalism, and care by making every journey meaningful and memorable. We are not just providing travel services—we are building trust, ensuring comfort, and creating lifelong experiences for our valued clients.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                As CEO, my commitment is to lead Ziaratnama with innovation, transparency, and dedication. We continuously strive to set new benchmarks in customer satisfaction by offering well-organized, affordable, and reliable travel solutions. Every member of our team works with a single goal: to serve the guests of Allah with the respect and honor they truly deserve.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The trust of our clients is our greatest asset, and with their support, we aim to expand our services, embrace new technologies, and maintain the highest standards of excellence in the travel industry.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With Ziaratnama Group, you are not just booking a journey—you are joining a family built on faith, service, and trust.
              </p>

              <p className="mt-6 font-semibold text-[#1a365d]">
                Warm regards,
                <br />
                <span className="text-[#2c5530]">Sajjad Ahmed Gondal</span>
                <br />
                CEO – Ziaratnama Group
              </p>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-[#1a365d] to-[#2c5530]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">
              Key Features
            </h2>
            <p className="font-['Nunito_Sans'] text-lg text-white/80 max-w-3xl mx-auto">
                      What makes Ziaratnama Travels stand apart in serving pilgrims

            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Officially Registered",
          desc: "We are a licensed and registered company ensuring your journey is secure and reliable.",
          icon: <Shield className="w-8 h-8 text-[#c7941e]" />
        },
        {
          title: "Experienced Staff",
          desc: "Our trained and professional team guides you every step of the way.",
          icon: <CheckCircle className="w-8 h-8 text-[#c7941e]" />
        },
        {
          title: "Flexible Packages",
          desc: "From Economy to Five-Star, we offer packages tailored to every pilgrim’s budget.",
          icon: <Heart className="w-8 h-8 text-[#c7941e]" />
        },
        {
          title: "Ziyarat Across Countries",
          desc: "Specialized packages for Saudi Arabia, Iraq, Iran, and Syria.",
          icon: <Compass className="w-8 h-8 text-[#c7941e]" />
        },
        {
          title: "Easy Installments",
          desc: "Convenient cash and installment plans for Umrah and Ziyarat packages.",
          icon: <Target className="w-8 h-8 text-[#c7941e]" />
        },
        {
          title: "Transparent Process",
          desc: "Simple booking with clear pricing and no hidden costs.",
          icon: <Eye className="w-8 h-8 text-[#c7941e]" />
        }
      ].map((feature, i) => (
        <Card
          key={i}
          className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm"
        >
          <CardContent className="p-6 text-center">
            <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-[#c7941e]/10 to-[#f7e98e]/5 rounded-full w-fit">
              {feature.icon}
            </div>
            <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mb-2">
              {feature.title}
            </h3>
            <p className="font-['Nunito_Sans'] text-[#0a1219]/70 leading-relaxed">
              {feature.desc}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-20 bg-gradient-to-br from-[#f7f3e9] to-[#fffef7]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
                Our Commitments
              </h2>
              <p className="font-['Nunito_Sans'] text-lg text-[#0a1219]/70">
                At Ziaratnama Travels (Pvt) Ltd, we commit to
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {commitments.map((commitment, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-[#f7f3e9]">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-gradient-to-br from-[#c7941e]/10 to-[#f7e98e]/5 rounded-full">
                        <CheckCircle className="w-6 h-6 text-[#2c5530]" />
                      </div>
                      <p className="font-['Nunito_Sans'] text-[#0a1219]/80 leading-relaxed">
                        {commitment}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      {/* <section className="py-20 bg-gradient-to-br from-[#fffef7] to-[#f7f3e9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
              Meet Our Team
            </h2>
            <p className="font-['Nunito_Sans'] text-lg text-[#0a1219]/70 max-w-3xl mx-auto">
              Experienced professionals dedicated to making your spiritual journey exceptional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/60 to-transparent"></div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mb-2">
                    {member.name}
                  </h3>
                  <p className="font-['Nunito_Sans'] font-semibold text-[#c7941e] mb-2">
                    {member.role}
                  </p>
                  <p className="font-['Nunito_Sans'] text-sm text-[#0a1219]/70">
                    {member.experience}
                  </p>
                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#c7941e] fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
{/* Our Purpose */}
<section className="py-20 bg-gradient-to-br from-[#f7f3e9] to-[#fffef7]">
  <div className="container mx-auto px-4 md:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#1a365d] mb-6">
        Our Purpose
      </h2>
      <p className="font-['Nunito_Sans'] text-lg md:text-xl text-[#0a1219]/80 leading-relaxed mb-8">
        Our purpose is to provide a platform for Muslims in Pakistan and worldwide 
        to prepare for their sacred journeys with ease. Whether it is a budget 
        package or a luxury plan, every customer is equally important to us.
      </p>

      <div className="flex justify-center">
        <div className="p-6 rounded-2xl shadow-xl bg-gradient-to-br from-[#1a365d] to-[#2c5530]">
          <p className="font-['Nunito_Sans'] text-lg text-white leading-relaxed max-w-2xl">
            We believe every pilgrim deserves dignity, comfort, and peace of mind 
            throughout their journey — regardless of their chosen package.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#1a365d] to-[#2c5530]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-6">
              Ready to Begin Your Sacred Journey?
            </h2>
            <p className="font-['Nunito_Sans'] text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied pilgrims who have trusted us with their spiritual journeys
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to='/packages'>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#c7941e] to-[#f7e98e] text-[#0a1219] hover:from-[#996f10] hover:to-[#c7941e] font-['Nunito_Sans'] font-semibold px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View Our Packages
              </Button>
              </Link>
              <Link to='/contact'>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#1a365d] font-['Nunito_Sans'] font-semibold px-8 py-4 transition-all duration-300"
              >
                Contact Us Today
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}