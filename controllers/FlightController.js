import Flight from "../models/Flight.js";

// Create a new flight
export const createFlight = async (req, res) => {
  try {
    const { flightNumber, name, airline, from, to, departureTime, user, arrivalTime, price, availableSeats, classType,image } = req.body;
   console.log(req.body)

    const newFlight = new Flight({
      flightNumber,
      name,
      airline,
      from,
      to,
      departureTime,
      arrivalTime,
      price,
      availableSeats,
      classType,
      image,
      user,
    });

    const flight = await newFlight.save();
    res.status(201).json(flight);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a flight by ID
export const getFlightById = async (req, res) => {
    console.log(req.params.id)
  try {
    const flight = await Flight.find({user:req.params.id})
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }
    res.status(200).json(flight);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all flights
export const getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find().populate('user', 'name email');
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
