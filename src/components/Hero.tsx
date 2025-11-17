import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onCTAClick: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Get Your Business to{' '}
              <span className="text-[#2563EB]">Top 3 on Google Maps</span> -
              Without Paying for Ads
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We help local businesses dominate Google search and get
              found by customers who are ready to buy. Stop losing leads to your
              competitors.
            </p>
            <Button
              onClick={onCTAClick}
              size="lg"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Get Your Free Google Ranking Analysis
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-gray-500">
              No credit card required • Results in 90 days or money back
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                alt="Google Maps on mobile device"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  #1
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Top Ranking</p>
                  <p className="text-sm text-gray-600">Google Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
