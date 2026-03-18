export type BookingPayload = {
  name: string;
  phone: string;
  deviceType: string;
  problem: string;
};

export function validateBookingPayload(payload: BookingPayload) {
  const errors: string[] = [];
  const normalizedPhone = payload.phone.replace(/\D/g, '');

  if (!payload.name.trim() || payload.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long.');
  }

  if (normalizedPhone.length < 10 || normalizedPhone.length > 15) {
    errors.push('Phone number must contain 10 to 15 digits.');
  }

  if (!payload.deviceType.trim()) {
    errors.push('Device type is required.');
  }

  if (!payload.problem.trim() || payload.problem.trim().length < 20) {
    errors.push('Problem description must be at least 20 characters long.');
  }

  return errors;
}
