import { motion } from 'motion/react';
import { Zap, ShieldCheck, Smartphone, RefreshCcw, Lock, Headset } from 'lucide-react';

const features = [
  {
    title: 'Instant Loan Approval',
    description: 'Get your loan approved in as little as 5 minutes with our automated credit assessment.',
    icon: Zap,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Zero Pre-closure Charges',
    description: 'Pay off your loan whenever you want without any additional penalties or hidden fees.',
    icon: RefreshCcw,
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    title: 'Fully Digital KYC',
    description: 'Complete your verification from the comfort of your home using just your smartphone.',
    icon: Smartphone,
    color: 'bg-purple-50 text-purple-600'
  },
  {
    title: 'Flexible Repayment',
    description: 'Choose a tenure that suits your budget, ranging from 6 months to 5 years.',
    icon: ShieldCheck,
    color: 'bg-orange-50 text-orange-600'
  },
  {
    title: 'Secure Transactions',
    description: 'Your data and money are protected by bank-grade 256-bit encryption protocols.',
    icon: Lock,
    color: 'bg-rose-50 text-rose-600'
  },
  {
    title: '24/7 Support',
    description: 'Our dedicated customer success team is always here to help you with any queries.',
    icon: Headset,
    color: 'bg-cyan-50 text-cyan-600'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-950 mb-4">Why Choose InstantLoan</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We've redesigned the lending experience to be fast, transparent, and completely human-centric.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-950 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
