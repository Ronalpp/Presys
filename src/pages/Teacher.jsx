import React from "react";
import Forms from "../components/teacher/Forms";
import Navbar from "../components/Navbarbg";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/Whatsapp";

export default function Teacher() {
  return (
    <>
      <Navbar />
      <Forms />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
