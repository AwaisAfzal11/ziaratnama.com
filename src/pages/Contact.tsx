import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    package: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/send_email.php", {
        method: "POST",
        body: new URLSearchParams(formData), // sends as form-data
      });

      const result = await response.text();
      if (response.ok) {
        setStatus("✅ Message sent successfully!");
      } else {
        setStatus("❌ Failed to send: " + result);
      }
    } catch (error) {
      setStatus("❌ Error sending message.");
    }
  };

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8 text-[#c7941e]" />,
      title: "Phone Support",
      details: "0304-0008000",
      description: "Call us anytime for immediate assistance",
      available: "24/7 Available"
    },
    {
      icon: <Mail className="w-8 h-8 text-[#c7941e]" />,
      title: "Email Support",
      details: "ziaratnama.com@gmail.com",
      description: "Send us detailed inquiries via email",
      available: "Response within 2 hours"
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#c7941e]" />,
      title: "Office Locations",
      details: "Islamabad + Nationwide",
      description: "Visit our offices for in-person consultation",
      available: "Mon-Sat: 9AM-6PM"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-[#c7941e]" />,
      title: "WhatsApp",
      details: "+92 304 0008000",
      description: "Quick messages and instant support",
      available: "24/7 Available"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
    { day: "Emergency Support", hours: "24/7 Available" }
  ];

  const faqs = [
    {
      question: "How do I book an Umrah package?",
      answer: "You can book by calling us, visiting our office, or filling out the contact form. We'll guide you through the entire process."
    },
    {
      question: "What documents do I need for Umrah?",
      answer: "You need a valid passport (6+ months validity), passport-size photos, vaccination certificates, and other documents we'll specify during booking."
    },
    {
      question: "Are the instalment plans really interest-free?",
      answer: "Yes, absolutely! Our instalment plans are 100% interest-free with no hidden charges. You pay the same total amount as cash packages."
    },
    {
      question: "Can I customize my package?",
      answer: "Yes, we offer flexible packages. Contact us to discuss your specific requirements and we'll create a customized solution."
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
            Contact{' '}
            <span className="bg-gradient-to-r from-[#c7941e] to-[#f7e98e] bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="font-['Nunito_Sans'] text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to begin your sacred journey? Get in touch with our expert team for personalized guidance 
            and support throughout your pilgrimage planning.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gradient-to-br from-[#fffef7] to-[#f7f3e9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="font-['Nunito_Sans'] text-lg text-[#0a1219]/70 max-w-3xl mx-auto">
              Choose the most convenient way to connect with our team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center bg-gradient-to-br from-white to-[#f7f3e9]">
                <CardContent className="p-8">
                  <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-[#c7941e]/10 to-[#f7e98e]/5 rounded-full w-fit">
                    {method.icon}
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mb-3">
                    {method.title}
                  </h3>
                  <p className="font-['Nunito_Sans'] font-semibold text-[#2c5530] mb-2 text-lg">
                    {method.details}
                  </p>
                  <p className="font-['Nunito_Sans'] text-[#0a1219]/70 mb-3 text-sm">
                    {method.description}
                  </p>
                  <div className="inline-block bg-[#c7941e]/10 text-[#c7941e] px-3 py-1 rounded-full text-xs font-['Nunito_Sans'] font-semibold">
                    {method.available}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-br from-[#1a365d] to-[#2c5530]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center">
                <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1a365d] mb-2">
                  Send Us a Message
                </h2>
                <p className="font-['Nunito_Sans'] text-[#0a1219]/70">
                  Fill out the form and we'll get back to you within 2 hours
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
  <div className="grid md:grid-cols-2 gap-4">
    <div className="space-y-2">
      <label>Full Name *</label>
      <Input 
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your full name" 
        required
      />
    </div>
    <div className="space-y-2">
      <label>Phone Number *</label>
      <Input 
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter your phone number" 
        required
      />
    </div>
  </div>

  <Input 
    name="email"
    type="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Enter your email address" 
    required
  />

  <Input 
    type="date"
    name="date"
    value={formData.date}
    onChange={handleChange}
  />

  <select
    name="package"
    value={formData.package}
    onChange={handleChange}
    required
  >
    <option value="">Select a package type</option>
    <option>Economy Package</option>
    <option>Economy Plus Package</option>
    <option>4-Star Package</option>
    <option>5-Star Package</option>
    <option>Custom Package</option>
  </select>

  <Textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Tell us about your requirements..."
  />

  <Button type="submit">Send Message</Button>

  {status && (
    <p className="mt-3 text-sm text-center">{status}</p>
  )}
</form>

              </CardContent>
            </Card>

            {/* Contact Info & Hours */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] flex items-center">
                    <Clock className="w-6 h-6 text-[#c7941e] mr-3" />
                    Office Hours
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="font-['Nunito_Sans'] font-medium text-[#1a365d]">{schedule.day}</span>
                        <span className="font-['Nunito_Sans'] text-[#0a1219]/70">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-[#c7941e] to-[#f7e98e] text-[#0a1219]">
                <CardContent className="p-8 text-center">
                  <h3 className="font-['Playfair_Display'] text-xl font-bold mb-4">
                    Need Immediate Assistance?
                  </h3>
                  <p className="font-['Nunito_Sans'] mb-6">
                    Our expert consultants are available 24/7 for urgent inquiries
                  </p>
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-[#1a365d] text-white hover:bg-[#0f2a44] font-['Nunito_Sans'] font-semibold"
                      onClick={() => window.open('tel:03040008000', '_self')}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now: 0304-0008000
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full border-[#1a365d] text-[#1a365d] hover:bg-[#1a365d] hover:text-white font-['Nunito_Sans'] font-semibold"
                      onClick={() => window.open('https://wa.me/923040008000', '_blank')}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-[#f7f3e9] to-[#fffef7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-['Nunito_Sans'] text-lg text-[#0a1219]/70 max-w-3xl mx-auto">
              Find quick answers to common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-[#f7f3e9]">
                <CardContent className="p-6">
                  <h3 className="font-['Playfair_Display'] font-bold text-[#1a365d] mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-['Nunito_Sans'] text-[#0a1219]/80 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-['Nunito_Sans'] text-[#0a1219]/70 mb-4">
              Don't see your question here?
            </p>
            <Link to='/about'>
            <Button 
              className="bg-gradient-to-r from-[#1a365d] to-[#2c5530] text-white hover:from-[#0f2a44] hover:to-[#1a3321] font-['Nunito_Sans'] font-semibold px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Learn More About Us
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}