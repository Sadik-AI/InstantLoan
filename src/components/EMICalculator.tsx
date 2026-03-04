import { useState, useMemo } from 'react';
import { motion } from 'motion/react';

export default function EMICalculator() {
  const [amount, setAmount] = useState(500000);
  const [tenure, setTenure] = useState(24);
  const [rate, setRate] = useState(10.5);

  const emiData = useMemo(() => {
    const p = amount;
    const r = rate / 12 / 100;
    const n = tenure;
    
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalRepayment = emi * n;
    const totalInterest = totalRepayment - p;
    
    return {
      monthlyEMI: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalRepayment: Math.round(totalRepayment),
      interestPercentage: (totalInterest / totalRepayment) * 100
    };
  }, [amount, tenure, rate]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="calculator" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-950 mb-4">Smart EMI Calculator</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Plan your finances better. Calculate your monthly installments and total interest instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="space-y-10">
              {/* Amount */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-slate-700 font-semibold">Loan Amount</label>
                  <span className="text-brand-600 font-bold text-xl">{formatCurrency(amount)}</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="1500000"
                  step="10000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>₹50,000</span>
                  <span>₹15,00,000</span>
                </div>
              </div>

              {/* Tenure */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-slate-700 font-semibold">Loan Tenure (Months)</label>
                  <span className="text-brand-600 font-bold text-xl">{tenure} Months</span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="60"
                  step="6"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>6 Months</span>
                  <span>60 Months</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-slate-700 font-semibold">Interest Rate (% p.a.)</label>
                  <span className="text-brand-600 font-bold text-xl">{rate}%</span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="24"
                  step="0.5"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>8%</span>
                  <span>24%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Card */}
          <div className="lg:col-span-5">
            <div className="bg-brand-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-800 rounded-full -mr-16 -mt-16 opacity-50" />
              
              <div className="relative z-10">
                <p className="text-brand-300 font-medium mb-2">Your Monthly EMI</p>
                <h3 className="text-5xl font-bold mb-8">{formatCurrency(emiData.monthlyEMI)}</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex justify-between items-center pb-4 border-b border-brand-800">
                    <span className="text-brand-300">Principal Amount</span>
                    <span className="font-semibold">{formatCurrency(amount)}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-brand-800">
                    <span className="text-brand-300">Total Interest</span>
                    <span className="font-semibold">{formatCurrency(emiData.totalInterest)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-300">Total Repayment</span>
                    <span className="font-semibold">{formatCurrency(emiData.totalRepayment)}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-brand-300">Principal vs Interest</span>
                  </div>
                  <div className="h-3 w-full bg-brand-800 rounded-full overflow-hidden flex">
                    <div 
                      className="h-full bg-brand-500 transition-all duration-500" 
                      style={{ width: `${100 - emiData.interestPercentage}%` }}
                    />
                    <div 
                      className="h-full bg-brand-300 transition-all duration-500" 
                      style={{ width: `${emiData.interestPercentage}%` }}
                    />
                  </div>
                  <div className="flex gap-4 mt-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-brand-500" />
                      <span className="text-[10px] text-brand-300 uppercase tracking-wider">Principal</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-brand-300" />
                      <span className="text-[10px] text-brand-300 uppercase tracking-wider">Interest</span>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-10 bg-white text-brand-900 py-4 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-lg">
                  Apply for this Loan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
