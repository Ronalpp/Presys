import React from "react";
import Main from "../components/Course/Main";
import Leves from "../components/Course/Leves";
import Years from "../components/Course/Years";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Course/Card";
import Class from "../components/Course/Class";
import WhatsAppButton from "../components/Whatsapp";

export default function Course() {
  return (
    <>
      <Navbar />
      <Main />
      <Leves />
      <Card />
      <Years />
      <Class />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
