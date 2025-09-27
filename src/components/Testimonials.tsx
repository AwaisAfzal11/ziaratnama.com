import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    quote:
      "MindLab transformed our team's performance with their tailored training program. The results exceeded our expectations and delivered measurable ROI within months.",
    name: "Sarah Johnson",
    role: "Director of Operations",
    company: "TechCorp International",
  },
  {
    quote:
      "Their consulting expertise helped us streamline our processes and improve efficiency by 40%. The team's professionalism and deep industry knowledge were exceptional.",
    name: "Ahmed Al-Rashid",
    role: "CEO",
    company: "Emirates Business Solutions",
  },
  {
    quote:
      "Working with MindLab was a game-changer for our organization. Their multilingual approach and cultural sensitivity made all the difference in our global expansion.",
    name: "Maria Rodriguez",
    role: "VP of Human Resources",
    company: "GlobalTech Enterprises",
  },
   {
    quote:
      "Their consulting expertise helped us streamline our processes and improve efficiency by 40%. The team's professionalism and deep industry knowledge were exceptional.",
    name: "Ahmed Al-Rashid",
    role: "CEO",
    company: "Emirates Business Solutions",
  },
  {
    quote:
      "Working with MindLab was a game-changer for our organization. Their multilingual approach and cultural sensitivity made all the difference in our global expansion.",
    name: "Maria Rodriguez",
    role: "VP of Human Resources",
    company: "GlobalTech Enterprises",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3, // 3 columns like before
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-mindlab-black mb-8">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-mindlab-red mx-auto"></div>
        </div>

        {/* Carousel instead of grid */}
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={4000}
          keyBoardControl
          customTransition="all .5"
          transitionDuration={500}
          arrows={false}
          containerClass="pb-8"
          itemClass="px-4"
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-mindlab-red transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-white"
            >
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-mindlab-red fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-mindlab-gray-medium italic mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Attribution */}
                <div className="text-center">
                  <div className="font-bold text-mindlab-black group-hover:text-mindlab-red transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-mindlab-gray-medium mt-1">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-mindlab-red font-medium mt-1">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
