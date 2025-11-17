import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  website: z.string().url('Please enter a valid website URL'),
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  canAfford: z.enum(['yes', 'no'], {
    required_error: 'Please select an option',
  }),
  problem: z.string().min(10, 'Please describe your problem in detail'),
  timeline: z.enum(['today', 'tomorrow', 'few-weeks'], {
    required_error: 'Please select a timeline',
  }),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      website: '',
      companyName: '',
      problem: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form submitted:', data);
    setIsLoading(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
      onClose();
    }, 3000);
  };

  const handleClose = () => {
    if (!isLoading) {
      form.reset();
      setIsSubmitted(false);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900">
                Get Your Free Google Ranking Analysis
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                Fill out the form below and we will contact you within 48 hours
                to find out if we can help you. No costs, no obligations, no
                annoying sales pitch. Guaranteed.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 mt-4"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 font-semibold">
                        Full Name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Smith"
                          {...field}
                          className="border-gray-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-semibold">
                          Business Email *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@company.com"
                            {...field}
                            className="border-gray-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-semibold">
                          Phone *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="(414) 555-0123"
                            {...field}
                            className="border-gray-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-semibold">
                          Website *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="url"
                            placeholder="https://yourcompany.com"
                            {...field}
                            className="border-gray-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-semibold">
                          Company Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Company LLC"
                            {...field}
                            className="border-gray-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="canAfford"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 font-semibold">
                        Can you afford to pay $497 USD for our 30-day paid
                        trial? *
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="border-gray-300">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="problem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 font-semibold">
                        What is the current problem you're experiencing? *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your current situation and what challenges you're facing with Google Maps rankings..."
                          className="min-h-[100px] border-gray-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 font-semibold">
                        By when do you want to solve this problem? *
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="border-gray-300">
                            <SelectValue placeholder="Select a timeline" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="today">Today</SelectItem>
                          <SelectItem value="tomorrow">Tomorrow</SelectItem>
                          <SelectItem value="few-weeks">
                            In a Few Weeks
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isLoading ? 'Submitting...' : 'Submit Request'}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to be contacted about our
                  services. We respect your privacy.
                </p>
              </form>
            </Form>
          </>
        ) : (
          <div className="py-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Thank You!
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We've received your request and will contact you within 48 hours
              to discuss how we can help you rank in the top 3 on Google Maps.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
