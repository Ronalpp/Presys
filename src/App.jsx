import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Teacher from "./pages/Teacher";
import InfoDetails from "./pages/InfoDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/:slug" element={<InfoDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
