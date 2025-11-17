import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onCTAClick: () => void;
}

export function FinalCTA({ onCTAClick }: FinalCTAProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Dominate Your Local Market?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Book a free 15-minute analysis call with our team. We'll review your
          current Google Maps ranking and show you exactly how we can help you
          reach the top 3.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-2 text-white">
            <CheckCircle2 className="w-5 h-5" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <CheckCircle2 className="w-5 h-5" />
            <span>No obligations</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <CheckCircle2 className="w-5 h-5" />
            <span>No sales pitch</span>
          </div>
        </div>

        <Button
          onClick={onCTAClick}
          size="lg"
          className="bg-[#F97316] hover:bg-[#EA580C] text-white px-12 py-6 text-xl rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group"
        >
          Book Your Free Analysis Call
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        <p className="text-blue-100 mt-6 text-sm">
          Join 100+ Milwaukee businesses already dominating their local search results
        </p>
      </div>
    </section>
  );
}
