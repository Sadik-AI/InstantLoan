import { Schema, model } from 'mongoose';

const bookingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    deviceType: {
      type: String,
      required: true,
      trim: true,
    },
    problem: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'in_progress', 'resolved'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  },
);

const Booking = model('Booking', bookingSchema);

export default Booking;
