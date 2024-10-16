
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
            currency: 'nzd',
            product_data: {
              name: 'Flight Reservation',
              description: `Flight ID: ${flightId}`,
            },
            unit_amount: price * 100, 
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://airline-frontend-xi.vercel.app/booking', 
      cancel_url: 'https://airline-frontend-xi.vercel.app/home', 
    });
   
    res.json({ sessionId: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


