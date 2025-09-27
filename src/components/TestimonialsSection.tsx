import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ahmed & Fatima Khan",
      location: "Islamabad",
      text: "We performed Umrah with Ziaratnama Travels. Everything was organized and on time. The hotel was near Haram and the staff was very helpful throughout our journey. Highly recommended!",
      rating: 5,
      package: "4-Star Package"
    },
    {
      name: "Mohammad Ali",
      location: "Lahore",
      text: "Excellent service from booking to return. The instalment plan made it very affordable for our family. The ziyarat tours were well-guided and spiritually fulfilling.",
      rating: 5,
      package: "Economy Plus"
    },
    {
      name: "Saira Begum",
      location: "Karachi",
      text: "First-class arrangements for our Iraq ziyarat. Every shrine visit was perfectly organized. The group was manageable and the guide was knowledgeable about the history.",
      rating: 5,
      package: "Iraq Ziyarat"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-[#1e3a5f] mb-4">
            What Our Pilgrims Say
          </h2>
          <p className="font-['Nunito_Sans'] text-lg text-[#1a2b3d] max-w-3xl mx-auto">
            The trust and satisfaction of our pilgrims is our greatest achievement. 
            Here are some testimonials from our valued customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-[#f4f1e8]">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-[#d4af37] mb-4" />
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#d4af37] fill-current" />
                  ))}
                </div>
                
                <p className="font-['Nunito_Sans'] text-[#1a2b3d] mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-['Playfair_Display'] font-semibold text-[#1e3a5f] mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="font-['Nunito_Sans'] text-sm text-[#1a2b3d] mb-2">
                    {testimonial.location}
                  </p>
                  <div className="inline-block bg-[#2d5a4f] text-white px-3 py-1 rounded-full text-xs font-['Nunito_Sans']">
                    {testimonial.package}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-[#1e3a5f] text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-4">
              Join Thousands of Satisfied Pilgrims
            </h3>
            <p className="font-['Nunito_Sans'] text-lg mb-6 opacity-90">
              Your spiritual journey deserves the best care and attention. 
              Let us make your pilgrimage a memorable and blessed experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="font-['Playfair_Display'] text-3xl font-bold text-[#d4af37]">1000+</div>
                <div className="font-['Nunito_Sans'] text-sm">Happy Pilgrims</div>
              </div>
              <div className="text-center">
                <div className="font-['Playfair_Display'] text-3xl font-bold text-[#d4af37]">98%</div>
                <div className="font-['Nunito_Sans'] text-sm">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="font-['Playfair_Display'] text-3xl font-bold text-[#d4af37]">24/7</div>
                <div className="font-['Nunito_Sans'] text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}