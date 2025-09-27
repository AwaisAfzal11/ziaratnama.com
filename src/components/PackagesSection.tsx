import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Check, Users, Utensils, Car, CreditCard } from 'lucide-react';

export function PackagesSection() {
  const cashPackages = [
    {
      name: "Economy Package",
      price: "PKR 270,000",
      accommodation: "Standard hotels (Quad Sharing)",
      meals: "Breakfast included",
      transport: "AC buses, group ziyarat tours",
      features: ["Budget-friendly", "Group tours", "Standard accommodation"],
      popular: false
    },
    {
      name: "Economy Plus Package",
      price: "PKR 335,000",
      accommodation: "3★ hotels (Triple Sharing)",
      meals: "Breakfast included",
      transport: "Better hotels, closer location",
      features: ["Comfort within budget", "Better location", "Guided tours"],
      popular: false
    },
    {
      name: "4-Star Package",
      price: "PKR 425,000",
      accommodation: "4★ hotels (Flexible sharing)",
      meals: "Breakfast included",
      transport: "AC buses or private vans",
      features: ["Near Haram stay", "Laundry service", "Family-friendly"],
      popular: true
    },
    {
      name: "5-Star Package",
      price: "PKR 595,000",
      accommodation: "Luxury 5★ hotels (Near Haram)",
      meals: "Breakfast included",
      transport: "VIP buses or private SUVs",
      features: ["24/7 support", "VIP airport services", "Exclusive tours"],
      popular: false
    }
  ];

  const instalmentPlans = [
    { package: "Economy Package", total: "PKR 270,000", advance: "PKR 27,000", monthly: "PKR 10,125", final: "PKR 27,000" },
    { package: "Economy Plus Package", total: "PKR 335,000", advance: "PKR 33,500", monthly: "PKR 12,521", final: "PKR 33,500" },
    { package: "4-Star Package", total: "PKR 425,000", advance: "PKR 42,500", monthly: "PKR 15,938", final: "PKR 42,500" },
    { package: "5-Star Package", total: "PKR 595,000", advance: "PKR 59,500", monthly: "PKR 22,271", final: "PKR 59,500" }
  ];

  return (
    <section id="packages" className="py-20 bg-[#f4f1e8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-[#1e3a5f] mb-4">
            Umrah Packages
          </h2>
          <p className="font-['Nunito_Sans'] text-lg text-[#1a2b3d] max-w-3xl mx-auto">
            Choose from our comprehensive 14-day packages designed to suit every budget and preference. 
            All packages include complete journey management from arrival to departure.
          </p>
        </div>

        <Tabs defaultValue="cash" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="cash" className="font-['Nunito_Sans']">Cash Packages</TabsTrigger>
            <TabsTrigger value="instalment" className="font-['Nunito_Sans']">Instalment Plans</TabsTrigger>
          </TabsList>

          <TabsContent value="cash">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cashPackages.map((pkg, index) => (
                <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${pkg.popular ? 'ring-2 ring-[#d4af37] shadow-lg' : 'border shadow-md'}`}>
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-[#d4af37] text-[#1a2b3d] px-3 py-1 text-sm font-['Nunito_Sans'] font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#1e3a5f] mb-2">
                      {pkg.name}
                    </h3>
                    <div className="text-3xl font-['Playfair_Display'] font-bold text-[#2d5a4f] mb-1">
                      {pkg.price}
                    </div>
                    <p className="font-['Nunito_Sans'] text-sm text-[#1a2b3d]">per person (14 days)</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-[#2d5a4f] mt-0.5" />
                      <div>
                        <p className="font-['Nunito_Sans'] font-medium text-[#1e3a5f]">Accommodation</p>
                        <p className="font-['Nunito_Sans'] text-sm text-[#1a2b3d]">{pkg.accommodation}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Utensils className="w-5 h-5 text-[#2d5a4f] mt-0.5" />
                      <div>
                        <p className="font-['Nunito_Sans'] font-medium text-[#1e3a5f]">Meals</p>
                        <p className="font-['Nunito_Sans'] text-sm text-[#1a2b3d]">{pkg.meals}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Car className="w-5 h-5 text-[#2d5a4f] mt-0.5" />
                      <div>
                        <p className="font-['Nunito_Sans'] font-medium text-[#1e3a5f]">Transport</p>
                        <p className="font-['Nunito_Sans'] text-sm text-[#1a2b3d]">{pkg.transport}</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <p className="font-['Nunito_Sans'] font-medium text-[#1e3a5f] mb-2">Features:</p>
                      <div className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-[#2d5a4f]" />
                            <span className="font-['Nunito_Sans'] text-sm text-[#1a2b3d]">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className={`w-full ${pkg.popular ? 'bg-[#d4af37] text-[#1a2b3d] hover:bg-[#c19b26]' : 'bg-[#1e3a5f] text-white hover:bg-[#2d4a6b]'} font-['Nunito_Sans'] font-semibold`}>
                      Select Package
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="instalment">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <CreditCard className="w-6 h-6 text-[#d4af37]" />
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#1e3a5f]">
                    Easy Instalment Plans
                  </h3>
                </div>
                <p className="font-['Nunito_Sans'] text-[#1a2b3d] mb-4">
                  We are among the few in Pakistan offering interest-free instalment-based Umrah packages:
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-[#f4f1e8] rounded-lg p-4">
                    <h4 className="font-['Playfair_Display'] font-semibold text-[#1e3a5f]">10%</h4>
                    <p className="font-['Nunito_Sans'] text-sm text-[#1a2b3d]">Advance booking</p>
                  </div>
                  <div className="bg-[#f4f1e8] rounded-lg p-4">
                    <h4 className="font-['Playfair_Display'] font-semibold text-[#1e3a5f]">24</h4>
                    <p className="font-['Nunito_Sans'] text-sm text-[#1a2b3d]">Easy monthly instalments</p>
                  </div>
                  <div className="bg-[#f4f1e8] rounded-lg p-4">
                    <h4 className="font-['Playfair_Display'] font-semibold text-[#1e3a5f]">10%</h4>
                    <p className="font-['Nunito_Sans'] text-sm text-[#1a2b3d]">Final payment (25th month)</p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
                  <thead className="bg-[#1e3a5f] text-white">
                    <tr>
                      <th className="font-['Nunito_Sans'] font-semibold p-4 text-left">Package</th>
                      <th className="font-['Nunito_Sans'] font-semibold p-4 text-right">Total Price</th>
                      <th className="font-['Nunito_Sans'] font-semibold p-4 text-right">Advance</th>
                      <th className="font-['Nunito_Sans'] font-semibold p-4 text-right">Monthly</th>
                      <th className="font-['Nunito_Sans'] font-semibold p-4 text-right">Final Payment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {instalmentPlans.map((plan, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-[#f4f1e8]' : 'bg-white'}>
                        <td className="font-['Nunito_Sans'] font-medium text-[#1e3a5f] p-4">{plan.package}</td>
                        <td className="font-['Nunito_Sans'] font-semibold text-[#2d5a4f] p-4 text-right">{plan.total}</td>
                        <td className="font-['Nunito_Sans'] text-[#1a2b3d] p-4 text-right">{plan.advance}</td>
                        <td className="font-['Nunito_Sans'] text-[#1a2b3d] p-4 text-right">{plan.monthly}</td>
                        <td className="font-['Nunito_Sans'] text-[#1a2b3d] p-4 text-right">{plan.final}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <h4 className="font-['Playfair_Display'] font-semibold text-[#1e3a5f] mb-3">Important Notes</h4>
            <ul className="font-['Nunito_Sans'] text-sm text-[#1a2b3d] space-y-2 text-left">
              <li>• Standard duration: 14 days (extra days available at additional cost)</li>
              <li>• Prices vary by season & availability</li>
              <li>• Visa & insurance may be separate</li>
              <li>• Group & family discounts available</li>
              <li>• No interest or extra charges on instalment plans</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}