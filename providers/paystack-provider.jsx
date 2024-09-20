"use client";

import { PaystackButton } from 'react-paystack'
import { useEffect, useState } from "react";
import '@/styles/globals.css';


const PaystackProvider = ({ amount }) => {
  const [isMounted, setIsMounted] = useState(false);
  const publicKey = `${process.env.PAYSTACK_PUBLIC_KEY}`
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }


  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  }


  return (
    <div className="App">
        <div className="checkout-form">
          <form>
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </form>
          <PaystackButton {...componentProps} />
        </div>
    </div>
  )
}
 
export default PaystackProvider;


