import React from "react";
import Main from "../components/Home/Main";
import Navbar from "../components/Navbar";
import Info from "../components/Home/Infos";
import Cards from "../components/Home/Cards";
import Work from "../components/Home/Work";
import Footer from "../components/Footer.jsx";
import WhatsAppButton from "../components/Whatsapp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Info />
      <Cards />
      <Work />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
