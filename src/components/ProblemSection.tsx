import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, TrendingDown, Users } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    {
      icon: AlertCircle,
      title: 'Your Competitors Show Up First',
      description:
        'When customers search for your services, your competitors appear at the top while your business is buried on page 2 or 3.',
    },
    {
      icon: TrendingDown,
      title: '70% of Traffic Goes to Top 3',
      description:
        'Studies show that 70% of all clicks go to the first three results. If you\'re not in the top 3, you\'re virtually invisible.',
    },
    {
      icon: Users,
      title: 'Missing Out on Ready-to-Buy Customers',
      description:
        'Every day, potential customers are calling your competitors instead of you - simply because they found them first on Google Maps.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Your Business Isn't Getting Found
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The harsh reality of local search in 2025
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="border-2 border-gray-100 hover:border-[#2563EB] hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50/50"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <problem.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
