import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, Award, Zap } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: Phone,
      title: 'More Phone Calls',
      description:
        'Get a steady stream of qualified leads calling your business every single day.',
    },
    {
      icon: MapPin,
      title: 'Increased Foot Traffic',
      description:
        'More customers finding and visiting your physical location through Google Maps.',
    },
    {
      icon: Award,
      title: 'Beat Competition',
      description:
        'Outrank your competitors and capture the market share they\'re currently enjoying.',
    },
    {
      icon: Zap,
      title: 'Long-Term Results',
      description:
        'Unlike ads, organic rankings continue working for you 24/7 without ongoing ad spend.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Happens When You Rank in the Top 3
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The competitive advantages you'll enjoy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-2 border-gray-100 hover:border-[#F97316] hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#F97316] transition-colors">
                  <benefit.icon className="w-8 h-8 text-[#F97316] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
