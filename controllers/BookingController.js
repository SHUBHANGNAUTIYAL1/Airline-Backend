import Booking from "../models/Booking.js";

// Create a new booking
export const createBooking = async (req, res) => {
    console.log("aya hoon bhai")
  try {
    const { flightId, bookingDate, bookingTravellers, price, category, user } = req.body;

    const newBooking = new Booking({
      flight: flightId,
      user,
      from: req.body.from,
      to: req.body.to,
      airline: req.body.airline,
      flightName: req.body.flightName,
      time: req.body.time,
      bookingDate,
      bookingTravellers,
      price,
      category,
    });

    const booking = await newBooking.save();
    res.status(201).json(booking);
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message });
  }
};
export const deleteAllBookings = async (req, res) => {
  try {
    const result = await Booking.deleteMany({}); // This deletes all documents in the Booking collection
    res.status(200).json({ message: 'All bookings deleted successfully', deletedCount: result.deletedCount });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Get all bookings by user ID
export const getBookingsByUserId = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.params.id }).populate('flight');
    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ message: 'No bookings found for this user' });
    }
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getBookingsByUserId2 = async (req, res) => {
  console.log('hi')
  try {
    console.log('bye')
    const bookings = await Booking.find({ flight: req.params.id }).populate('flight');
    console.log(bookings)
    if (!bookings || bookings.length === 0) {
      console.log("no booking found")
      return res.status(404).json({ message: 'No bookings found for this user' });
      
    }
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single booking by ID
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('flight');
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
