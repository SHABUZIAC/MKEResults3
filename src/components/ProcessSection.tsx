import { Card, CardContent } from '@/components/ui/card';
import { Settings, Trophy, TrendingUp } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    {
      number: '1',
      icon: Settings,
      title: 'Optimize Your Listing',
      description:
        'We completely overhaul your Google Business Profile with proven optimization strategies that signal authority to Google.',
    },
    {
      number: '2',
      icon: Trophy,
      title: 'Build Local Authority',
      description:
        'We establish your business as a trusted local authority through strategic signals that Google uses to rank businesses.',
    },
    {
      number: '3',
      icon: TrendingUp,
      title: 'Track & Improve',
      description:
        'We continuously monitor your rankings and make data-driven adjustments to keep you ahead of the competition.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How We Get You to the Top 3
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 3-step process to dominate Google Maps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-2 border-gray-100 hover:border-[#2563EB] hover:shadow-xl transition-all duration-300 h-full bg-gradient-to-br from-white to-blue-50/30">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#2563EB] rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-[#2563EB]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#2563EB] z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
