import React from "react";
import Form from "../components/inscription/Form";
import Navbar from "../components/Navbarbg";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/Whatsapp";

export default function Inscription() {
  return (
    <>
      <Navbar />
      <Form />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
