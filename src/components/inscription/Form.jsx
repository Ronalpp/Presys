import React, { useState } from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBirthdayCake,
} from "react-icons/fa";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    ageRange: "",
    location: "",
  });
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({ message: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) newErrors[key] = `${key} es requerido`;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/inscriptions`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.message) {
        setAlert({ message: response.data.message, type: "success" });
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          ageRange: "",
          location: "",
        });
      } else {
        setAlert({
          message: response.data.error || "Error al enviar el mensaje.",
          type: "error",
        });
      }
    } catch (error) {
      setAlert({
        message: "Error al enviar el mensaje. Inténtalo nuevamente.",
        type: "error",
      });
      console.error("Error al enviar el mensaje:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const ageRanges = [
    "7-12 años",
    "13-17 años",
    "18-25 años",
    "26-35 años",
    "36-45 años",
    "46-55 años",
    "56+ años",
  ];

  return (
    <div className="flex h-full bg-white md:mt-14 mt-8">
      <div className="w-1/2 hidden lg:block">
        <img
          src="https://imgs.search.brave.com/BlilFrALn28MpPm5Pnf5BBZam6jfrPcdhQ3wVSxHztc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/NzIzNDc4NS9lcy9m/b3RvL2ltYWdlbi1n/ZW5lcmFkYS1wb3It/b3JkZW5hZG9yLWRl/LXNpbGwlQzMlQjNu/LWVuLWxhLXNhbGEt/ZGUtZXN0YXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWlC/dEJGNmNUNVBmOUxM/Z2ZqSU4tVGtuNEJW/VlZGMl9reGdhTWNG/RnZQOGM9"
          alt="Contact Us"
          className="h-auto w-full object-cover"
        />
      </div>
      <div className="w-full h-screen sm:h-auto md:w-1/2 flex items-center justify-center p-8 overflow-hidden">
        <div className="w-full rounded-3xl p-8">
          <h1 className="text-4xl font-extrabold mb-8 text-indigo-800 text-center">
            ¡Inscríbete ya!
          </h1>
          {alert.message && (
            <div
              className={`mb-6 p-4 rounded-lg text-white flex items-center justify-center ${
                alert.type === "success" ? "bg-green-500" : "bg-red-500"
              } transition-all duration-300 animate-pulse`}
            >
              {alert.type === "success" ? (
                <FaCheckCircle className="mr-2" />
              ) : (
                <FaExclamationCircle className="mr-2" />
              )}
              <span>{alert.message}</span>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              {
                name: "fullName",
                type: "text",
                label: "Nombre Completo",
                icon: <FaUser />,
              },
              {
                name: "email",
                type: "email",
                label: "Correo Electrónico",
                icon: <FaEnvelope />,
              },
              {
                name: "phoneNumber",
                type: "tel",
                label: "Número de Teléfono",
                icon: <FaPhone />,
              },
            ].map((field) => (
              <div key={field.name} className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-indigo-500">
                  {field.icon}
                </div>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  placeholder={field.label}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 text-gray-700 bg-gray-100 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  required
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-indigo-500">
                <FaBirthdayCake />
              </div>
              <select
                id="ageRange"
                name="ageRange"
                value={formData.ageRange}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 text-gray-700 bg-gray-100 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                required
              >
                <option value="">Selecciona tu rango de edad</option>
                {ageRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
              {errors.ageRange && (
                <p className="text-red-500 text-xs mt-1">{errors.ageRange}</p>
              )}
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-indigo-500">
                <FaMapMarkerAlt />
              </div>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Ubicación"
                value={formData.location}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 text-gray-700 bg-gray-100 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                required
              />
              {errors.location && (
                <p className="text-red-500 text-xs mt-1">{errors.location}</p>
              )}
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className={`${
                  isLoading
                    ? "bg-indigo-400"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center w-full`}
              >
                {isLoading ? (
                  "Enviando..."
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Enviar
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
