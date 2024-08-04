import mongoose from "mongoose";

const flightSchema = new mongoose.Schema({
  flightNumber: { type: String, required: true },
  name: { type: String, required: true },
  airline: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  departureTime: { type: String, required: true },
  arrivalTime: { type: String, required: true },
  price: { type: Number, required: true },
  availableSeats: { type: Number, required: true },
  classType: { type: String, required: true },
  image: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

export default mongoose.model('Flight', flightSchema);
