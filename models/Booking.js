import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  flight: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  airline: { type: String, required: true },
  flightName: { type: String, required: true },
  time: { type: String, required: true },
  bookingDate: { type: Date, required: true },
  bookingTravellers: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true }, // e.g., Nurse, Army, Senior Citizen, etc.
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);
