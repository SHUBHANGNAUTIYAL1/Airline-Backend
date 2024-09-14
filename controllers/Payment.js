
import Stripe from 'stripe';

const stripe = Stripe('sk_test_51Pw6xrIsxzKgfHeHKIHRpXPSoiBS8bIHZ3XMV3ndIKLYoduioqXs8VXpSLvexqPYOnwUrogigjqsjsK0MhtbAQOC00DeLBfoYr');


export const payment=async (req, res) => {
    console.log('bye')
  const { flightId, price } = req.body;
  console.log('hi')
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: 'Flight Reservation',
              description: `Flight ID: ${flightId}`,
            },
            unit_amount: price * 100, // Stripe expects the price in the smallest currency unit (paise for INR)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:5173/booking', // Adjust the success URL as per your app
      cancel_url: 'http://localhost:5173/home', // Adjust the cancel URL as per your app
    });
   
    res.json({ sessionId: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


