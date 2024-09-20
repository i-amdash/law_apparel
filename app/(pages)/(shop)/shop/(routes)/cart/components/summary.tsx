// "use client";

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";

// import Button from "@/components/ui/shop/Button";
// import Currency from "@/components/ui/shop/Currency";
// import useCart from "@/hooks/use-cart";
// import { toast } from "react-hot-toast";
// import PaystackProvider from "@/providers/paystack-provider";

// const Summary = () => {
//   const searchParams = useSearchParams();
//   const items = useCart((state) => state.items);
//   const removeAll = useCart((state) => state.removeAll);
//   const [formData, setFormData] = useState({ email: "", phone: "" });
//   const verify = async (): Promise<{
//     url: string;
//     status: boolean;
//   }> => {
//     const response = await axios.post(
//       `${process.env.NEXT_PUBLIC_API_URL}/verify-payment?`
//     );

//     return response.data;
//   };
//   useEffect(() => {
//     if (searchParams.get("success")) {
//       const reference = searchParams.get("reference");
//       if (!reference) toast.error("Something went wrong.");
//       const response = async () => {
//         return await verify();
//       };

//       toast.success("Payment completed.");

//       removeAll();
//     }

//     if (searchParams.get("canceled")) {
//       toast.error("Something went wrong.");
//     }
//   }, [searchParams, removeAll]);

//   const totalPrice = items.reduce((total, item) => {
//     return total + Number(item.price);
//   }, 0);

//   const { email, phone } = formData;
//   const handleChangeInput = (e: { target: { name: any; value: any } }) => {
//     // eslint-disable-next-line no-shadow
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const onCheckout = async () => {
//     const response = await axios.post(
//       `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
//       {
//         productIds: items.map((item) => item.id),
//         email,
//         phone,
//       }
//     );

//     window.location = response.data.url;
//   };

//   return (
//     <div className="mt-16 rounded-lg px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
//       <h2 className="text-lg font-medium">Order summary</h2>
//       <div className="mt-6 space-y-4">
//         <div className="flex items-center justify-between border-t border-gray-200 pt-4">
//           <div className="text-base font-medium">Order total</div>
//           <Currency value={totalPrice} />
//         </div>
//       </div>
//       <div className="mt-6 space-y-4">
//         <div className="flex items-center justify-between border-t border-gray-200 pt-4">
//           <div className="text-base font-medium">Email Address</div>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleChangeInput}
//             className="rounded-full px-[12px] text-base"
//           />
//         </div>
//       </div>
//       <div className="mt-6 space-y-4">
//         <div className="flex items-center justify-between border-t border-gray-200 pt-4">
//           <div className="text-base font-medium">Phone Number</div>
//           <input
//             type="number"
//             name="phone"
//             value={phone}
//             onChange={handleChangeInput}
//             className="rounded-full px-[12px] text-base"
//           />
//         </div>
//       </div>
//       {/* <PaystackProvider amount={totalPrice}/> */}
//       <Button
//         onClick={onCheckout}
//         disabled={items.length === 0 || phone == "" || email == ""}
//         className="w-full mt-6"
//       >
//         Checkout
//       </Button>
//     </div>
//   );
// };

// export default Summary;
