import React, { useState } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({ message: "", type: "" });

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

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/contact`, // Conecta solo a /teacher
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setAlert({ message: "Mensaje enviado con éxito", type: "success" });
      console.log("Mensaje enviado con éxito:", response.data);
    } catch (error) {
      setAlert({
        message: "Error al enviar el mensaje. Inténtalo nuevamente.",
        type: "error",
      });
      console.error("Error al enviar el mensaje:", error);
    }
  };

  return (
    <div className="mt-2 md:mt-14">
      <div className="min-h-screen bg-gray-200 flex items-center justify-center flex-col p-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text mb-6 text-blue-900">
          ¿Tienes dudas o preguntas?
        </h1>
        {alert.message && (
          <div
            className={`mb-4 p-3 px-8 rounded-lg text-white flex items-center justify-start ${
              alert.type === "success" ? "bg-green-500" : "bg-red-500"
            } transition-opacity duration-300`}
          >
            {alert.type === "success" ? (
              <FaCheckCircle className="mr-2" />
            ) : (
              <FaExclamationCircle className="mr-2" />
            )}
            <span>{alert.message}</span>
          </div>
        )}
        <div className="bg-white rounded-2xl shadow-xl justify-between p-6 w-full max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:gap-4 gap-4">
              {[
                { name: "email", type: "email", label: "Correo Electrónico" },
                { name: "fullName", type: "text", label: "Nombre Completo" },
                {
                  name: "phoneNumber",
                  type: "tel",
                  label: "Número de Teléfono",
                },
              ].map((field) => (
                <div key={field.name}>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    placeholder={field.label}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full px-4 py-6 md:px-3 md:py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                  {errors[field.name] && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <textarea
              id="contactMessage"
              name="message"
              placeholder="Mensaje"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-6 md:px-3 md:py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              required
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}

            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
