import mongoose from "mongoose";

// Define the traveller schema for each individual traveller's details
const travellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true }, // e.g., Male, Female, Other
  category: { type: String, required: true }, // e.g., Nurse, Army, Senior Citizen, Student, etc.
});

const bookingSchema = new mongoose.Schema({
  flight: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  airline: { type: String, required: true },
  flightName: { type: String, required: true },
  time: { type: String, required: true },
  bookingDate: { type: Date, required: true },
  bookingTravellers: { type: Number, required: true }, // Number of travellers
  travellerDetails: [travellerSchema], // Array of traveller objects
  totalPrice: { type: Number, required: true }, // Calculated price
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);
