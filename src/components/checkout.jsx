import React from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./pagos";

const stripePromise = loadStripe("pk_test_51PUkfKGVlodpuCj1PWrwP3Mn67PCm8p72q4GxhaKupbV8XlzzBDyMDW4CsRUy8Rbj1Gc8rLzq4VViKzRCbLGhyLt00ZpWOTS86");

const CheckoutPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const precio = params.get("precio");

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Elements stripe={stripePromise}>
        <CheckoutForm precio={parseFloat(precio)} />
      </Elements>
    </div>
  );
};

export default CheckoutPage;
