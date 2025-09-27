import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Check, Users, Utensils, Car, Star, CreditCard,  Clock, Shield,  CheckCircle2, Crown, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';



export function Packages() {
 const cashPackages = [
  {
    name: "Economy Package",
    price: "PKR 270,000 (Per Person)",
    duration: "14 Days",
    accommodation: "Standard hotels (Quad Sharing – 4 persons per room)",
    meals: "Breakfast included (Lunch & Dinner not included)",
    transport: "Jeddah ⇄ Makkah ⇄ Madinah ⇄ Makkah ⇄ Jeddah",
    features: [
      "AC buses, group ziyarat tours",
      "Standard accommodation near Haram",
      "Airport transfers included",
      "Basic travel insurance"
    ],
    bestFor: "Budget-conscious pilgrims",
    popular: false,
    savings: "Save PKR 30,000"
  },
  {
    name: "Economy Plus Package",
    price: "PKR 335,000 (Per Person)",
    duration: "14 Days",
    accommodation: "3★ hotels (Triple Sharing – 3 persons per room)",
    meals: "Breakfast included (Lunch & Dinner not included)",
    transport: "Jeddah ⇄ Makkah ⇄ Madinah ⇄ Makkah ⇄ Jeddah",
    features: [
      "Better hotels, closer location",
      "Guided tours with cultural insights",
      "Enhanced room amenities",
      "Priority customer support"
    ],
    bestFor: "Pilgrims seeking comfort within reasonable budget",
    popular: false,
    savings: "Save PKR 30,000"
  },
  {
    name: "4-Star Package",
    price: "PKR 425,000 (Per Person)",
    duration: "14 Days",
    accommodation: "4★ hotels (Single/Double/Triple/Quad room options)",
    meals: "Breakfast included (Lunch & Dinner not included)",
    transport: "AC buses or private vans",
    features: [
      "Near Haram premium accommodation",
      "Laundry service included",
      "Guided ziyarat tours",
      "Private transport options",
      "Family-friendly arrangements"
    ],
    bestFor: "Families and comfort seekers",
    popular: true,
    savings: "Save PKR 40,000"
  },
  {
    name: "5-Star Package",
    price: "PKR 595,000 (Per Person)",
    duration: "14 Days",
    accommodation: "Luxury 5★ hotels (Near Haram – subject to availability)",
    meals: "Breakfast included (Lunch & Dinner not included)",
    transport: "VIP buses or private SUVs",
    features: [
      "Walking distance accommodation",
      "24/7 premium customer support",
      "VIP airport services & lounge access",
      "Exclusive private ziyarat tours",
      "Personal concierge services"
    ],
    bestFor: "Business class & luxury travelers",
    popular: false,
    savings: "Save PKR 50,000"
  },
  {
    name: "Executive 5-Star Package",
    price: "To be finalized",
    duration: "14 Days",
    accommodation: "Luxury 5★ hotels (within 300–1000m of Haram)",
    meals: "Breakfast included (Lunch & Dinner not included)",
    transport: "VIP coasters or private SUVs",
    features: [
      "Walking distance (300–1000m from Haram)",
      "Concierge services & personal assistance",
      "Exclusive ziyarat tours with professional guides",
      "VIP reception & fast-track immigration"
    ],
    bestFor: "Pilgrims preferring luxury & peace",
    popular: false,
    savings: "Seasonal pricing"
  }
];

// 📌 Notes:
// - Standard duration: 14 days
// - Extra days available on request (charges vary by hotel category)
// - Prices may vary by season & availability
// - Visa & insurance may be included or separate
// - Group & family discounts available


 const instalmentPlans = [
  { 
    package: "Economy Package", 
    total: "PKR 270,000", 
    advance: "PKR 27,000", 
    monthly: "PKR 10,125", 
    final: "PKR 27,000",
    features: [
      "1. Total price: PKR 270,000 (same as cash)",
      "2. Advance (10%): PKR 27,000 — payable at booking",
      "3. Monthly (24 months): PKR 10,125 / month",
      "4. Final payment (10%): PKR 27,000 — in 25th month",
      "5. Meals: Breakfast included (Lunch & Dinner not included)",
      "6. Hotels: Standard (Quad Sharing)",
      "7. Duration: 14 Days",
      "8. No interest or extra charges — total equals cash price"
    ]
  },
  { 
    package: "Economy Plus Package", 
    total: "PKR 335,000", 
    advance: "PKR 33,500", 
    monthly: "PKR 12,521", 
    final: "PKR 33,500",
    features: [
      "1. Total price: PKR 335,000 (same as cash)",
      "2. Advance (10%): PKR 33,500 — payable at booking",
      "3. Monthly (24 months): PKR 12,521 / month",
      "4. Final payment (10%): PKR 33,500 — in 25th month",
      "5. Meals: Breakfast included (Lunch & Dinner not included)",
      "6. Hotels: 3★ (Triple Sharing)",
      "7. Duration: 14 Days",
      "8. No interest or extra charges — total equals cash price"
    ]
  },
  { 
    package: "4-Star Package", 
    total: "PKR 425,000", 
    advance: "PKR 42,500", 
    monthly: "PKR 15,938", 
    final: "PKR 42,500",
    features: [
      "1. Total price: PKR 425,000 (same as cash)",
      "2. Advance (10%): PKR 42,500 — payable at booking",
      "3. Monthly (24 months): PKR 15,938 / month",
      "4. Final payment (10%): PKR 42,500 — in 25th month",
      "5. Meals: Breakfast included (Lunch & Dinner not included)",
      "6. Hotels: 4★ (Single/Double/Triple/Quad options)",
      "7. Duration: 14 Days",
      "8. No interest or extra charges — total equals cash price"
    ]
  },
  { 
    package: "5-Star Package", 
    total: "PKR 595,000", 
    advance: "PKR 59,500", 
    monthly: "PKR 22,271", 
    final: "PKR 59,500",
    features: [
      "1. Total price: PKR 595,000 (same as cash)",
      "2. Advance (10%): PKR 59,500 — payable at booking",
      "3. Monthly (24 months): PKR 22,271 / month",
      "4. Final payment (10%): PKR 59,500 — in 25th month",
      "5. Meals: Breakfast included (Lunch & Dinner not included)",
      "6. Hotels: 5★ (Near Haram)",
      "7. Duration: 14 Days",
      "8. No interest or extra charges — total equals cash price"
    ]
  },
  { 
    package: "Executive 5-Star Package", 
    total: "To be finalized", 
    advance: "—", 
    monthly: "—", 
    final: "—",
    features: [
      "1. Total price: To be finalized (will match cash when finalised)",
      "2. Advance (10%): — (TBD once price is fixed)",
      "3. Monthly (24 months): — / month (TBD)",
      "4. Final payment (10%): — (TBD)",
      "5. Meals: Breakfast included (Lunch & Dinner not included)",
      "6. Hotels: Super Luxury 5★ (within 300–1000m of Haram)",
      "7. Extras: Concierge services, VIP transport, personal assistance, VIP reception & fast-track immigration",
      "8. Duration: 14 Days"
    ]
  }
];

   const notes = [
    "Standard duration is 14 days",
    "Extra days can be added on request",
    "Extra day charges vary by hotel category",
    "Prices may vary by season & availability",
    "Visa & insurance may be included or separate",
    "Group & family discounts available",
  ]


  // const packageInclusions = [
  //   "Return air tickets (Jeddah/Madinah)",
  //   "Visa processing and documentation",
  //   "Airport transfers in Saudi Arabia", 
  //   "Hotel accommodation as per package",
  //   "Transportation between cities",
  //   "Group ziyarat tours with guide",
  //   "Travel insurance coverage",
  //   "24/7 customer support in Pakistan & Saudi Arabia"
  // ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a365d] via-[#2c5530] to-[#1a365d]"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#c7941e]/20 to-[#f7e98e]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-[#68d391]/20 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-white mb-6">
            Umrah{' '}
            <span className="bg-gradient-to-r from-[#c7941e] to-[#f7e98e] bg-clip-text text-transparent">
              Packages
            </span>
          </h1>
          <p className="font-['Nunito_Sans'] text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive 14-day packages designed to suit every budget and preference. 
            All packages include complete journey management from arrival to departure.
          </p>
        </div>
      </section>

      {/* Package Selection */}
      <section className="py-20 bg-gradient-to-br from-[#fffef7] to-[#f7f3e9]">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="cash" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2 h-14 bg-white shadow-lg border-0">
                <TabsTrigger 
                  value="cash" 
                  className="font-['Nunito_Sans'] cursor-pointer font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1a365d] data-[state=active]:to-[#2c5530] data-[state=active]:text-white"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Cash Packages
                </TabsTrigger>
                <TabsTrigger 
                  value="instalment" 
                  className="font-['Nunito_Sans'] cursor-pointer font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1a365d] data-[state=active]:to-[#2c5530] data-[state=active]:text-white"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  Instalment Plans
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="cash">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {cashPackages.map((pkg, index) => (
                  <Card key={index} className={`relative  transition-all duration-300 hover:shadow-2xl transform hover:scale-105 ${
                    pkg.popular 
                      ? 'ring-2 ring-[#c7941e] shadow-2xl bg-gradient-to-br from-white to-[#f7f3e9]' 
                      : 'border shadow-lg bg-white hover:bg-gradient-to-br hover:from-white hover:to-[#f7f3e9]'
                  }`}>
                    {pkg.popular && (
                      <div className="absolute top-0 rounded-tl-xl rounded-tr-xl left-0 overflow-x-hidden right-0 bg-gradient-to-r from-[#c7941e] to-[#f7e98e] text-[#0a1219] px-4 py-2 text-center">
                        <span className="font-['Nunito_Sans'] font-bold text-sm">🌟 MOST POPULAR</span>
                      </div>
                    )}
                    
                    {pkg.savings && (
                      <div className="absolute -top-4 left-1/2 bg-gradient-to-r from-[#2c5530] to-[#68d391] text-white px-3 py-1 rounded-full text-xs font-['Nunito_Sans'] font-semibold">
                        {pkg.savings}
                      </div>
                    )}
                    
                    <CardHeader className={`text-center ${pkg.popular ? 'pt-12 pb-4' : 'pb-4'}`}>
                      <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mb-3">
                        {pkg.name}
                      </h3>
                      <div className="space-y-2">
                        {/* {pkg.originalPrice && (
                          <div className="text-lg font-['Nunito_Sans'] text-[#0a1219]/50 line-through">
                            {pkg?.originalPrice}
                          </div>
                        )} */}
                        <div className="text-3xl font-['Playfair_Display'] font-bold text-[#2c5530]">
                          {pkg.price}
                        </div>
                        <p className="font-['Nunito_Sans'] text-sm text-[#0a1219]/70">per person (14 days)</p>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6 px-6 pb-8">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Users className="w-5 h-5 text-[#2c5530] mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-['Nunito_Sans'] font-semibold text-[#1a365d] text-sm">Accommodation</p>
                            <p className="font-['Nunito_Sans'] text-sm text-[#0a1219]/70">{pkg.accommodation}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <Utensils className="w-5 h-5 text-[#2c5530] mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-['Nunito_Sans'] font-semibold text-[#1a365d] text-sm">Meals</p>
                            <p className="font-['Nunito_Sans'] text-sm text-[#0a1219]/70">{pkg.meals}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <Car className="w-5 h-5 text-[#2c5530] mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-['Nunito_Sans'] font-semibold text-[#1a365d] text-sm">Transport</p>
                            <p className="font-['Nunito_Sans'] text-sm text-[#0a1219]/70">{pkg.transport}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-200">
                        <p className="font-['Nunito_Sans'] font-semibold text-[#1a365d] mb-3 text-sm">Package Features:</p>
                        <div className="space-y-2">
                          {pkg.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <Check className="w-4 h-4 text-[#2c5530] mt-0.5 flex-shrink-0" />
                              <span className="font-['Nunito_Sans'] text-xs text-[#0a1219]/80 leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Link to='/contact' >
                      <Button className={`w-full ${
                        pkg.popular 
                          ? 'bg-gradient-to-r from-[#c7941e] to-[#f7e98e] text-[#0a1219] hover:from-[#996f10] hover:to-[#c7941e]' 
                          : 'bg-gradient-to-r from-[#1a365d] to-[#2c5530] text-white hover:from-[#0f2a44] hover:to-[#1a3321]'
                      } font-['Nunito_Sans'] font-semibold py-3 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                        Select Package
                      </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
 
            <TabsContent value="instalment">
              <div className="max-w-6xl mx-auto">
                {/* Instalment Benefits */}
                <Card className="mb-12 border-0 shadow-xl bg-gradient-to-br from-[#1a365d] to-[#2c5530] text-white overflow-hidden">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4">
                        Interest-Free Instalment Plans
                      </h3>
                      <p className="font-['Nunito_Sans'] text-lg opacity-90">
                        We are among the few in Pakistan offering completely interest-free instalment-based Umrah packages
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                        <div className="text-3xl font-['Playfair_Display'] font-bold text-[#c7941e] mb-2">10%</div>
                        <h4 className="font-['Nunito_Sans'] font-semibold mb-2">Advance Booking</h4>
                        <p className="font-['Nunito_Sans'] text-sm opacity-80">Initial payment to secure your spot</p>
                      </div>
                      <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                        <div className="text-3xl font-['Playfair_Display'] font-bold text-[#c7941e] mb-2">24</div>
                        <h4 className="font-['Nunito_Sans'] font-semibold mb-2">Monthly Instalments</h4>
                        <p className="font-['Nunito_Sans'] text-sm opacity-80">Easy monthly payments over 2 years</p>
                      </div>
                      <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                        <div className="text-3xl font-['Playfair_Display'] font-bold text-[#c7941e] mb-2">10%</div>
                        <h4 className="font-['Nunito_Sans'] font-semibold mb-2">Final Payment</h4>
                        <p className="font-['Nunito_Sans'] text-sm opacity-80">Final payment in 25th month before departure</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Instalment Table */}
                <div className="grid md:grid-cols-2 gap-8">
  {instalmentPlans.map((plan, index) => (
    <Card
      key={index}
      className="relative border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-[#f7f3e9]"
    >
      {/* Card Header */}
      <CardHeader className="bg-gradient-to-r from-[#1a365d] to-[#2c5530] text-white">
        <h3 className="font-['Playfair_Display'] text-xl font-bold">
          {plan.package}
        </h3>
        <p className="font-['Nunito_Sans'] text-xs opacity-90">
          {plan.total !== "To be finalized"
            ? "Instalment plan with no extra charges"
            : "Exclusive package with custom pricing"}
        </p>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Total Price */}
          <div className="flex justify-between items-center p-3 bg-[#f7f3e9] rounded-lg">
            <span className="font-['Nunito_Sans'] font-semibold text-[#1a365d]">
              Total Package Price:
            </span>
            <span className="font-['Playfair_Display'] text-xl font-bold text-[#2c5530]">
              {plan.total}
            </span>
          </div>

          {/* Numbers Grid */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-[#c7941e]/10 rounded-lg">
              <p className="font-['Nunito_Sans'] text-xs text-[#0a1219]/60 mb-1">
                Advance
              </p>
              <p className="font-['Nunito_Sans'] font-bold text-[#1a365d]">
                {plan.advance}
              </p>
            </div>
            <div className="p-3 bg-[#c7941e]/10 rounded-lg">
              <p className="font-['Nunito_Sans'] text-xs text-[#0a1219]/60 mb-1">
                Monthly
              </p>
              <p className="font-['Nunito_Sans'] font-bold text-[#1a365d]">
                {plan.monthly}
              </p>
            </div>
            <div className="p-3 bg-[#c7941e]/10 rounded-lg">
              <p className="font-['Nunito_Sans'] text-xs text-[#0a1219]/60 mb-1">
                Final
              </p>
              <p className="font-['Nunito_Sans'] font-bold text-[#1a365d]">
                {plan.final}
              </p>
            </div>
          </div>

          {/* Features List */}
          <ol className="list-decimal list-inside space-y-2 text-sm text-[#0a1219]/85">
            {plan.features.map((feature, i) => (
              <li
                key={i}
                className="pl-1 font-['Nunito_Sans'] leading-relaxed"
              >
                {feature.replace(/^\d+\.\s*/, "")}
              </li>
            ))}
          </ol>

          {/* CTA Button */}
          <Link to='/contact' >
          <Button className="w-full cursor-pointer bg-gradient-to-r from-[#1a365d] to-[#2c5530] text-white hover:from-[#0f2a44] hover:to-[#1a3321] font-['Nunito_Sans'] font-semibold py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Choose Instalment Plan
          </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  ))}
</div>


              </div>
            </TabsContent>
          </Tabs>
          <div className="mt-12">
      <div className="bg-gradient-to-r from-[#f7e98e]/40 to-[#fff9e6] border border-[#f7e98e]/60 rounded-2xl p-6 shadow-md">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="w-6 h-6 text-[#c7941e]" />
          <h3 className="font-['Nunito_Sans'] text-lg font-bold text-[#1a365d]">
            📌 Important Notes
          </h3>
        </div>

        {/* List */}
        <ul className="space-y-2">
          {notes.map((note, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-700"
            >
              <span className="text-[#c7941e] font-bold">•</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
        </div>
      </section>

      {/* Package Inclusions */}
      <section className="py-20 bg-gradient-to-br from-[#1a365d] to-[#2c5530]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">
              What's Included in Every Package
            </h2>
            <p className="font-['Nunito_Sans'] text-lg text-white/80 max-w-3xl mx-auto">
              Comprehensive services ensuring a hassle-free pilgrimage experience
            </p>
          </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cashPackages.map((pkg, index) => (
        
        <Card
          key={index}
          className={`relative border-0 shadow-xl bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-2xl  ${
            pkg.popular ? "ring-2 ring-[#c7941e]" : ""
          }`}
        >
          {/* Popular Badge */}
          {pkg.popular && (
            <div className="absolute top-4 right-4 bg-[#c7941e] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <Crown className="w-4 h-4" /> Popular
            </div>
          )}

          <CardContent className="p-6 space-y-4">
            {/* Title */}
            <h3 className="font-bold text-xl text-[#1a365d]">{pkg.name}</h3>

            {/* Price + Savings */}
            <div>
              <p className="text-2xl font-extrabold text-[#c7941e]">{pkg.price}</p>
             {/* {pkg.savings && (
  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#2c5530] to-[#68d391] text-white px-4 py-1 rounded-full text-xs font-['Nunito_Sans'] font-semibold shadow-md">
    {pkg.savings}
  </div>
)} */}

            </div>

            {/* Duration */}
            <p className="text-sm text-gray-600">⏳ {pkg.duration}</p>

            {/* Accommodation / Meals / Transport */}
            <div className="text-sm text-gray-700 space-y-1">
              <p><span className="font-semibold">🏨 Accommodation:</span> {pkg.accommodation}</p>
              <p><span className="font-semibold">🍽 Meals:</span> {pkg.meals}</p>
              <p><span className="font-semibold">🚌 Transport:</span> {pkg.transport}</p>
            </div>

            {/* Features */}
            <ul className="space-y-2 pt-3">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#c7941e] flex-shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Best For */}
            <div className="bg-[#f7e98e]/20 border border-[#f7e98e]/50 p-3 rounded-xl mt-4 text-sm text-[#1a365d] font-semibold text-center">
              ✨ Best for: {pkg.bestFor}
            </div>

            {/* Call to Action */}
            <Link to='/contact' >
            <button className="mt-6 cursor-pointer w-full py-2 px-4 rounded-xl bg-[#c7941e] text-white font-semibold hover:bg-[#a17b18] transition">
              Book Now
            </button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-gradient-to-br from-[#f7f3e9] to-[#fffef7]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-[#f7f3e9]">
              <CardHeader className="text-center">
                <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1a365d] mb-2">
                  Important Information
                </h2>
                <p className="font-['Nunito_Sans'] text-[#0a1219]/70">
                  Please read these important details about our packages
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-[#c7941e] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-['Nunito_Sans'] font-semibold text-[#1a365d] mb-1">Duration</h4>
                        <p className="font-['Nunito_Sans'] text-sm text-[#0a1219]/70">Standard duration: 14 days (extra days available at additional cost)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-[#c7941e] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-['Nunito_Sans'] font-semibold text-[#1a365d] mb-1">Pricing</h4>
                        <p className="font-['Nunito_Sans'] text-sm text-[#0a1219]/70">Prices vary by season & availability</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-[#c7941e] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-['Nunito_Sans'] font-semibold text-[#1a365d] mb-1">Additional Costs</h4>
                        <p className="font-['Nunito_Sans'] text-sm text-[#0a1219]/70">Visa & insurance may be separate</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-[#c7941e] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-['Nunito_Sans'] font-semibold text-[#1a365d] mb-1">Discounts</h4>
                        <p className="font-['Nunito_Sans'] text-sm text-[#0a1219]/70">Group & family discounts available</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CreditCard className="w-5 h-5 text-[#c7941e] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-['Nunito_Sans'] font-semibold text-[#1a365d] mb-1">Instalments</h4>
                        <p className="font-['Nunito_Sans'] text-sm text-[#0a1219]/70">No interest or extra charges on instalment plans</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-[#c7941e] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-['Nunito_Sans'] font-semibold text-[#1a365d] mb-1">Departure</h4>
                        <p className="font-['Nunito_Sans'] text-sm text-[#0a1219]/70">Departure only after 100% payment completion</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#1a365d] to-[#2c5530]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-6">
              Ready to Book Your Sacred Journey?
            </h2>
            <p className="font-['Nunito_Sans'] text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our team is ready to help you choose the perfect package for your spiritual pilgrimage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to='/contact'>
              <Button 
                size="lg"
                
                className="bg-gradient-to-r cursor-pointer from-[#c7941e] to-[#f7e98e] text-[#0a1219] hover:from-[#996f10] hover:to-[#c7941e] font-['Nunito_Sans'] font-semibold px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Contact Us Now
              </Button>
              </Link>
              <Link to='/about'>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#1a365d] font-['Nunito_Sans'] font-semibold px-8 py-4 transition-all duration-300"
              >
                Learn More About Us
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}