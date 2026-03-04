import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Software Engineer',
    content: 'The process was incredibly smooth. I needed funds for a medical emergency and InstantLoan disbursed the amount within 2 hours. Truly life-saving!',
    avatar: 'https://i.pravatar.cc/150?u=rahul',
    rating: 5
  },
  {
    name: 'Priya Patel',
    role: 'Small Business Owner',
    content: 'As an entrepreneur, traditional banks were asking for too much paperwork. InstantLoan understood my needs and approved my loan with minimal documentation.',
    avatar: 'https://i.pravatar.cc/150?u=priya',
    rating: 5
  },
  {
    name: 'Amit Verma',
    role: 'Marketing Manager',
    content: 'The EMI calculator helped me plan my finances perfectly. No hidden charges, no surprises. The most transparent loan platform I have ever used.',
    avatar: 'https://i.pravatar.cc/150?u=amit',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-950 mb-4">What Our Customers Say</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Join millions of satisfied users who have achieved their financial goals with InstantLoan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-8 text-brand-200" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-brand-950">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
