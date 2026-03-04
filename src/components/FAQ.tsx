import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is the maximum loan amount I can get?',
    answer: 'You can apply for a personal loan ranging from ₹50,000 up to ₹15,00,000, depending on your eligibility and credit profile.'
  },
  {
    question: 'What documents are required for the application?',
    answer: 'We only require your PAN card, Aadhaar card (for e-KYC), and your last 3 months bank statements. The entire process is 100% paperless.'
  },
  {
    question: 'How long does it take for the loan to be disbursed?',
    answer: 'Once your application is approved and KYC is verified, the funds are typically disbursed into your bank account within 2 to 24 hours.'
  },
  {
    question: 'Are there any hidden charges or processing fees?',
    answer: 'We believe in complete transparency. All charges, including the processing fee (typically 1-2%), are clearly mentioned in your loan agreement before you sign.'
  },
  {
    question: 'Can I repay my loan early?',
    answer: 'Yes! InstantLoan offers zero pre-closure charges after the first 6 EMIs. You can pay off your loan anytime without any additional penalties.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-950 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">
            Everything you need to know about our personal loans.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-brand-900">{faq.question}</span>
                <ChevronDown
                  className={`text-slate-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
