import Main from "../components/About/Main";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/Whatsapp";
import Hows from "../components/About/Hows";

export default function About() {
  return (
    <>
      <Navbar />
      <Main />
      <Hows />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
