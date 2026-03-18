export type BookingFormValues = {
  name: string;
  phone: string;
  deviceType: string;
  problem: string;
};

export type BookingFormErrors = Partial<Record<keyof BookingFormValues, string>>;

export function validateBookingForm(values: BookingFormValues): BookingFormErrors {
  const errors: BookingFormErrors = {};
  const normalizedPhone = values.phone.replace(/\D/g, '');

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'Please enter a valid name.';
  }

  if (normalizedPhone.length < 10 || normalizedPhone.length > 15) {
    errors.phone = 'Enter a valid phone number with 10 to 15 digits.';
  }

  if (!values.deviceType) {
    errors.deviceType = 'Please choose your device type.';
  }

  if (!values.problem.trim() || values.problem.trim().length < 20) {
    errors.problem = 'Describe the issue in at least 20 characters.';
  }

  return errors;
}
