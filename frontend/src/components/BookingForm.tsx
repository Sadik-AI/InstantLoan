import { useState } from 'react';
import { LoaderCircle, ShieldCheck } from 'lucide-react';
import { companyInfo, deviceOptions } from '@/data/siteContent.ts';
import {
  validateBookingForm,
  type BookingFormErrors,
  type BookingFormValues,
} from '@/utils/validation.ts';

const initialFormValues: BookingFormValues = {
  name: '',
  phone: '',
  deviceType: '',
  problem: '',
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '/api';

export default function BookingForm() {
  const [formValues, setFormValues] = useState<BookingFormValues>(initialFormValues);
  const [errors, setErrors] = useState<BookingFormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: undefined,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateBookingForm(formValues);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('error');
      setFeedback('Please fix the highlighted fields and try again.');
      return;
    }

    try {
      setStatus('submitting');
      setFeedback('');

      const response = await fetch(`${API_BASE_URL}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      const payload = (await response.json()) as { message?: string; bookingId?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? 'Unable to submit your request right now.');
      }

      setFormValues(initialFormValues);
      setErrors({});
      setStatus('success');
      setFeedback(
        payload.bookingId
          ? `Booking submitted successfully. Reference ID: ${payload.bookingId}`
          : 'Booking submitted successfully. Our team will contact you shortly.',
      );
    } catch (error) {
      setStatus('error');
      setFeedback(
        error instanceof Error
          ? error.message
          : 'Something went wrong while sending your booking request.',
      );
    }
  };

  return (
    <div className="glass-panel rounded-[2.2rem] p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="eyebrow">Repair booking</span>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-slate-950">
            Book your device inspection
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Share the issue and our team will confirm the next step, estimated cost, and pickup or visit details.
          </p>
        </div>

        <div className="hidden rounded-2xl bg-brand-50 p-3 text-brand-700 sm:block">
          <ShieldCheck size={24} />
        </div>
      </div>

      <form className="mt-8 grid gap-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Name
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              className="input-shell"
              placeholder="Your full name"
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name ? <span className="text-sm text-brand-700">{errors.name}</span> : null}
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Phone number
            <input
              type="tel"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
              className="input-shell"
              placeholder={companyInfo.phoneDisplay}
              aria-invalid={Boolean(errors.phone)}
            />
            {errors.phone ? <span className="text-sm text-brand-700">{errors.phone}</span> : null}
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Device type
          <select
            name="deviceType"
            value={formValues.deviceType}
            onChange={handleChange}
            className="input-shell"
            aria-invalid={Boolean(errors.deviceType)}
          >
            <option value="">Select your device</option>
            {deviceOptions.map((device) => (
              <option key={device} value={device}>
                {device}
              </option>
            ))}
          </select>
          {errors.deviceType ? (
            <span className="text-sm text-brand-700">{errors.deviceType}</span>
          ) : null}
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Problem description
          <textarea
            name="problem"
            value={formValues.problem}
            onChange={handleChange}
            rows={6}
            className="input-shell resize-none"
            placeholder="Tell us what happened, when the issue started, and any important details."
            aria-invalid={Boolean(errors.problem)}
          />
          {errors.problem ? <span className="text-sm text-brand-700">{errors.problem}</span> : null}
        </label>

        <button type="submit" className="btn-primary w-full sm:w-fit" disabled={status === 'submitting'}>
          {status === 'submitting' ? (
            <>
              <LoaderCircle size={18} className="animate-spin" />
              Sending request...
            </>
          ) : (
            'Submit booking'
          )}
        </button>

        {feedback ? (
          <p
            className={`rounded-2xl px-4 py-3 text-sm ${
              status === 'success'
                ? 'bg-emerald-50 text-emerald-700'
                : 'bg-brand-50 text-brand-700'
            }`}
          >
            {feedback}
          </p>
        ) : null}
      </form>
    </div>
  );
}
