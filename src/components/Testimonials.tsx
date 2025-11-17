import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      business: 'Local Plumbing Pro',
      location: 'West Allis, WI',
      result: 'Jumped from #12 to #2 in 45 days',
      quote:
        'We were skeptical at first, but the results speak for themselves. Our phone hasn\'t stopped ringing, and we\'ve had to hire two more plumbers to keep up with demand.',
      owner: 'Mike Thompson',
      type: 'Plumbing Services',
    },
    {
      business: 'Lakefront Dental Care',
      location: 'Local Area, WI',
      result: 'Reached #1 position in 60 days',
      quote:
        'As a new practice, we needed visibility fast. MKE Results got us to the top spot on Google Maps. We\'re now booked out three weeks in advance.',
      owner: 'Dr. Sarah Chen',
      type: 'Dental Practice',
    },
    {
      business: 'Giovanni\'s Italian Kitchen',
      location: 'Wauwatosa, WI',
      result: 'From #8 to #3 in just 30 days',
      quote:
        'Our dinner reservations have doubled since working with MKE Results. Being visible on Google Maps has been a game-changer for our family restaurant.',
      owner: 'Anthony Giovanni',
      type: 'Restaurant',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Results Our Clients Are Seeing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real businesses, real rankings, real growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-white to-gray-50/40"
            >
              <CardContent className="p-8">
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-16 h-16 text-[#2563EB]" />
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#F97316] text-[#F97316]"
                    />
                  ))}
                </div>

                <div className="mb-6">
                  <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {testimonial.result}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-gray-200 pt-6">
                  <p className="font-bold text-gray-900">{testimonial.owner}</p>
                  <p className="text-sm text-gray-600">{testimonial.type}</p>
                  <p className="text-sm text-[#2563EB] font-medium mt-1">
                    {testimonial.business} • {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
