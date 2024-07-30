import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ precio }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Create a payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error("[PaymentMethod Error]", error);
    } else {
      try {
        const response = await axios.post("http://localhost:3000/api/pago", {
          id: paymentMethod.id,
          amount: Math.round(precio * 100), 
        });

        if (response.data.success) {
          alert("Payment successful!");
        } else {
          alert("Payment failed!");
        }
      } catch (err) {
        console.error("[Payment Error]", err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96 mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Pago con Tarjeta</h2>
      <h3 className="text-xl font-bold text-center p-4">${precio}</h3>
      <CardElement
        className="p-2 border border-gray-300 rounded-lg mb-4"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200 w-full"
      >
        Pagar
      </button>
    </form>
  );
};

export default CheckoutForm;
