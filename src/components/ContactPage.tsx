import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, MessageCircle, Zap, Target, CheckCircle, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const formAction = `${window.location.origin}/send_email.php`;

    const response = await fetch(formAction, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Parse the JSON response
    const result = await response.json();

    if (!response.ok || result.status !== "success") {
      console.error("Submission failed:", result);
      throw new Error(result.message || `Server error: ${response.status}`);
    }

    console.log("Submission successful:", result.message); // ✅ Shows PHP success message
    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  } catch (error) {
    console.error("Submission failed:", error);
    alert("There was a problem submitting the form. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};



  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@mindlab.com",
      description: "Get in touch anytime",
      action: "mailto:hello@mindlab.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Innovation Drive, Tech City, TC 12345",
      description: "Our headquarters",
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon-Fri: 9AM-6PM EST",
      description: "Weekend support available",
      action: null
    }
  ];

  const services = [
    "AI Strategy Consulting",
    "Machine Learning Solutions",
    "Data Analytics Platform",
    "Custom AI Development",
    "Digital Transformation",
    "Other"
  ];

  const features = [
    {
      icon: Zap,
      title: "Fast Response",
      description: "We respond to all inquiries within 24 hours"
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Custom strategies designed for your specific needs"
    },
    {
      icon: MessageCircle,
      title: "Expert Consultation",
      description: "Direct access to our AI specialists and strategists"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-mindlab-red via-mindlab-red-dark to-mindlab-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white mb-8">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">LET'S START A CONVERSATION</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform
              <span className="block text-white/90">Your Business?</span>
            </h1>
            
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
              Get in touch with our AI experts and discover how MindLab can accelerate your digital transformation journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact-form" className="btn-gradient-glow inline-flex items-center gap-3 justify-center">
                <Send className="w-5 h-5" />
                <span>Send Message</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:+15551234567" className="inline-flex items-center gap-3 justify-center bg-white/10 backdrop-blur-sm border-2 border-white/40 rounded-full px-6 py-4 text-white hover:bg-white hover:text-mindlab-red transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/3 rounded-full blur-2xl animate-pulse delay-700"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-mindlab-black mb-6">
                Why Choose MindLab?
              </h2>
              <p className="text-lg text-mindlab-gray-medium max-w-2xl mx-auto">
                Experience the difference of working with AI innovation leaders
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-mindlab-red/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-mindlab-red group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="w-8 h-8 text-mindlab-red group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-mindlab-black mb-3">{feature.title}</h3>
                    <p className="text-mindlab-gray-medium leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-mindlab-black mb-6">
                    Get In Touch
                  </h2>
                  <p className="text-lg text-mindlab-gray-medium leading-relaxed mb-8">
                    Ready to revolutionize your business with AI? Our team of experts is here to help you navigate the future of technology.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((item, index) => (
                    <Card key={index} className="group border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                          onClick={() => item.action && window.open(item.action, '_blank')}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-mindlab-red/10 rounded-lg flex items-center justify-center group-hover:bg-mindlab-red transition-colors duration-300 flex-shrink-0">
                            <item.icon className="w-6 h-6 text-mindlab-red group-hover:text-white transition-colors duration-300" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-mindlab-black mb-1">{item.title}</h3>
                            <p className="text-mindlab-gray font-medium mb-1 break-words">{item.info}</p>
                            <p className="text-sm text-mindlab-gray-medium">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Office Image */}
                <Card className="border-0 shadow-lg overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-mindlab-red to-mindlab-red-dark relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <MapPin className="w-12 h-12 mx-auto mb-4 opacity-80" />
                        <h3 className="text-xl font-bold mb-2">Visit Our Office</h3>
                        <p className="text-white/80">Modern workspace in the heart of Tech City</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-mindlab-black mb-2">Send us a message</h3>
                    <p className="text-mindlab-gray-medium">Fill out the form below and we'll get back to you within 24 hours.</p>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-mindlab-black mb-2">Message Sent!</h3>
                      <p className="text-mindlab-gray-medium">Thank you for reaching out. We'll be in touch soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="border-gray-200 focus:border-mindlab-red focus:ring-mindlab-red/20"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="border-gray-200 focus:border-mindlab-red focus:ring-mindlab-red/20"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="border-gray-200 focus:border-mindlab-red focus:ring-mindlab-red/20"
                            placeholder="Your Company"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="border-gray-200 focus:border-mindlab-red focus:ring-mindlab-red/20"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest</Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-mindlab-red focus:ring-2 focus:ring-mindlab-red/20 bg-white"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="border-gray-200 focus:border-mindlab-red focus:ring-mindlab-red/20 resize-none"
                          placeholder="Tell us about your project and how we can help..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary-modern h-12 text-base font-semibold"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-3">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending Message...</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        )}
                      </Button>

                      <p className="text-sm text-mindlab-gray-medium text-center">
                        By submitting this form, you agree to our privacy policy and terms of service.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mindlab-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              Join hundreds of forward-thinking companies that have transformed their business with MindLab's AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-gradient-glow h-12 px-8 text-base font-semibold">
                <Calendar className="w-5 h-5 mr-3" />
                Book Discovery Call
              </Button>
              <Button variant="outline" className="h-12 px-8 text-base font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-mindlab-black transition-all duration-300">
                <MessageCircle className="w-5 h-5 mr-3" />
                Start Live Chat
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-mindlab-red/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-mindlab-red/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </section>
    </div>
  );
}