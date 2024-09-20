import About from "@/components/About";
import Ambassadors from "@/components/Ambassadors";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Transition from "@/components/Transition";
import React from "react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Carousel />
      <Transition />
      {/* <About />
      <Services />
      <Ambassadors /> */}
      <Testimonials />
      <Footer />
    </>
  );
}
