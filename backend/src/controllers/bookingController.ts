import type { Request, Response, NextFunction } from 'express';
import Booking from '../models/Booking.js';
import { validateBookingPayload } from '../utils/validators.js';

export async function createBooking(request: Request, response: Response, next: NextFunction) {
  try {
    const payload = {
      name: String(request.body.name ?? ''),
      phone: String(request.body.phone ?? ''),
      deviceType: String(request.body.deviceType ?? ''),
      problem: String(request.body.problem ?? ''),
    };

    const errors = validateBookingPayload(payload);
    if (errors.length > 0) {
      return response.status(400).json({
        message: errors[0],
        errors,
      });
    }

    const booking = await Booking.create(payload);

    return response.status(201).json({
      message: 'Repair booking created successfully.',
      bookingId: booking._id,
    });
  } catch (error) {
    return next(error);
  }
}
