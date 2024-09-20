import Navbar from "@/components/ui/shop/Navbar";
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
    </>
  );
}