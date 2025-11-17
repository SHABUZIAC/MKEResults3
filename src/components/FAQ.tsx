import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQ() {
  const faqs = [
    {
      question: 'How long does it take to see results?',
      answer:
        'Most clients see significant ranking improvements within 30-60 days. However, every market is different. Some highly competitive industries may take up to 90 days to reach top 3 positions. That\'s why we offer our 90-day guarantee.',
    },
    {
      question: 'What exactly is included in the guarantee?',
      answer:
        'If your business doesn\'t see measurable ranking improvements in your target search terms within 90 days, we\'ll provide a full refund of the $497 setup fee. We track your rankings weekly and provide transparent reports so you can see your progress.',
    },
    {
      question: 'What\'s included in the service?',
      answer:
        'We provide complete Google Business Profile optimization, strategic local authority building, review management guidance, competitor monitoring, monthly progress reports, and ongoing ranking improvements. You\'ll also have direct access to your dedicated account manager.',
    },
    {
      question: 'How is this different from Google Ads?',
      answer:
        'Google Ads require ongoing monthly spending and stop working the moment you stop paying. Our organic ranking strategies create long-term visibility that continues working 24/7 without ongoing ad costs. Once you rank in the top 3, you stay there with minimal maintenance.',
    },
    {
      question: 'Do I need technical knowledge or have to do any work?',
      answer:
        'No technical knowledge required. We handle all the optimization work. You may occasionally need to provide basic business information or verify some details, but we make the process completely hands-off for you.',
    },
    {
      question: 'What if I already have a Google Business Profile?',
      answer:
        'Perfect! We\'ll audit your existing profile and optimize it for maximum visibility. Most businesses have significant room for improvement even if they think their profile is complete.',
    },
    {
      question: 'What types of businesses do you work with?',
      answer:
        'We work with all types of local service businesses including restaurants, medical practices, home services (plumbing, HVAC, etc.), retail stores, professional services, and more. If you serve customers in a specific geographic area, we can help you rank.',
    },
    {
      question: 'What is your refund policy?',
      answer:
        'We offer a straightforward 90-day money-back guarantee. If you don\'t see ranking improvements within 90 days of starting service, simply request a refund and we\'ll return 100% of your $497 investment. No complicated terms or conditions.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Common Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our service
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gradient-to-r from-white to-blue-50/20 border-2 border-gray-100 rounded-lg px-6 hover:border-[#2563EB] transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#2563EB] py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
