import React, { useState } from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaPaperPlane,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { TbMoodKid } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";

import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    age: "",
    referralSource: "",
    englishExperience: "",
    englishDuration: "",
    location: "",
    preferredSchedule: "",
    comments: "",
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
          phoneNumber: "",
          age: "",
          referralSource: "",
          englishExperience: "",
          englishDuration: "",
          location: "",
          preferredSchedule: "",
          comments: "",
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

  const referralOptions = ["Instagram", "Letrero", "Volante", "Otro"];
  const scheduleOptions = [
    "Lunes, Miércoles y Viernes de 7-9 PM (intensivo)",
    "Lunes, Miércoles y Viernes de 6-7 PM (14 años en adelante y adultos)",
    "Lunes y Miércoles de 9-11 AM (jóvenes y adultos)",
    "Sábados de 3-6 PM (Niños de 7 años en adelante)",
    "Sábados de 3-6 PM (Jóvenes y adultos)",
    "OTRO HORARIO",
  ];

  return (
    <div className="flex flex-col lg:flex-row h-full bg-white mt-4 md:mt-4">
      <div className="w-full lg:w-1/2 hidden lg:block">
        <img
          src="https://imgs.search.brave.com/BlilFrALn28MpPm5Pnf5BBZam6jfrPcdhQ3wVSxHztc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/NzIzNDc4NS9lcy9m/b3RvL2ltYWdlbi1n/ZW5lcmFkYS1wb3It/b3JkZW5hZG9yLWRl/LXNpbGwlQzMlQjNu/LWVuLWxhLXNhbGEt/ZGUtZXN0YXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWlC/dEJGNmNUNVBmOUxM/Z2ZqSU4tVGtuNEJW/VlZGMl9reGdhTWNG/RnZQOGM9"
          alt="Contact Us"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
        <div className="w-full max-w-md rounded-3xl p-1 pt-16 sm:p-2 sm:pt-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-8 text-indigo-800 text-center">
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
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <InputField
              type="text"
              name="fullName"
              label="Nombre Completo"
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
              icon={<FaUser />}
            />
            <InputField
              type="tel"
              name="phoneNumber"
              label="Número de Teléfono con WhatsApp"
              value={formData.phoneNumber}
              onChange={handleChange}
              error={errors.phoneNumber}
              icon={<FaPhone />}
            />
            <InputField
              type="text"
              name="age"
              label="Edad del estudiante o ADULT@"
              value={formData.age}
              onChange={handleChange}
              error={errors.age}
              icon={<TbMoodKid size={24} />}
            />
            <SelectField
              name="referralSource"
              label="¿Por cuál medio supo de nuestra academia?"
              options={referralOptions}
              value={formData.referralSource}
              onChange={handleChange}
              error={errors.referralSource}
            />
            <SelectField
              name="englishExperience"
              label="¿Usted ha estudiado inglés antes?"
              options={["Si", "No"]}
              value={formData.englishExperience}
              onChange={handleChange}
              error={errors.englishExperience}
            />
            <InputField
              type="text"
              name="englishDuration"
              label="¿Cuánto tiempo estudió? (o NUNCA)"
              value={formData.englishDuration}
              onChange={handleChange}
              error={errors.englishDuration}
              icon={<IoMdTime size={24} />}
            />
            <InputField
              type="text"
              name="location"
              label="Sector en que reside"
              value={formData.location}
              onChange={handleChange}
              error={errors.location}
              icon={<FaMapMarkerAlt size={24} />}
            />
            <SelectField
              name="preferredSchedule"
              label="¿Cuál es el horario le conviene?"
              options={scheduleOptions}
              value={formData.preferredSchedule}
              onChange={handleChange}
              error={errors.preferredSchedule}
            />
            <textarea
              id="comments"
              name="comments"
              placeholder="Déjenos aquí cualquier comentario que considere necesario con relación a los horarios disponibles o a su situación en particular."
              value={formData.comments}
              onChange={handleChange}
              className="w-full p-4 text-gray-700 bg-gray-100 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              rows="4"
            />
            {errors.comments && (
              <p className="text-red-500 text-xs mt-1">{errors.comments}</p>
            )}
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

function InputField({ type, name, label, value, onChange, error, icon }) {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-indigo-500">
          {icon}
        </div>
      )}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={label}
        value={value}
        onChange={onChange}
        className={`w-full ${
          icon ? "pl-10" : "pl-4"
        } pr-4 py-3 text-gray-700 bg-gray-100 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300`}
        required
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

function SelectField({ name, label, options, value, onChange, error }) {
  return (
    <div className="relative">
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full pl-4 pr-4 py-3 text-gray-700 bg-gray-100 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
        required
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
