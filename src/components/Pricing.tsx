import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Shield } from 'lucide-react';

interface PricingProps {
  onCTAClick: () => void;
}

export function Pricing({ onCTAClick }: PricingProps) {
  const features = [
    'Complete Google Business Profile optimization',
    'Local authority building strategy',
    'Monthly progress tracking & reporting',
    'Competitor analysis & monitoring',
    'Review management guidance',
    'Ongoing ranking improvements',
    'Direct access to your account manager',
    '90-day money-back guarantee',
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            One flat fee. No hidden costs. No long-term contracts.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-4 border-[#2563EB] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#F97316] text-white px-6 py-2 text-sm font-bold transform rotate-12 translate-x-8 -translate-y-2">
              BEST VALUE
            </div>

            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Google Maps Domination
                </h3>
                <div className="flex items-end justify-center gap-2 mb-2">
                  <span className="text-6xl font-bold text-[#2563EB]">$497</span>
                  <span className="text-2xl text-gray-600 mb-2">one-time</span>
                </div>
                <p className="text-gray-600">Setup fee - No monthly contracts</p>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border-2 border-[#2563EB] rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Our Iron-Clad Guarantee
                    </h4>
                    <p className="text-gray-700">
                      If you don't see measurable ranking improvements within 90
                      days, we'll refund 100% of your investment. No questions
                      asked.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={onCTAClick}
                size="lg"
                className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-6 text-xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Claim Your Spot
              </Button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Limited to 5 new clients per month to ensure quality service
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
