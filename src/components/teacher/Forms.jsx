import React, { useState, useRef } from "react";
import {
  FaFileUpload,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import axios from "axios";

export default function TeacherForm() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    idNumber: "",
    phoneNumber: "",
    message: "",
    cv: null,
  });
  const [errors, setErrors] = useState({});
  const [dragActive, setDragActive] = useState(false);
  const [alert, setAlert] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false); // Estado de carga
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFiles = (files) => {
    if (files.length > 0) {
      const file = files[0];
      const acceptedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (acceptedTypes.includes(file.type)) {
        setFormData((prev) => ({ ...prev, cv: file }));
        setErrors((prev) => ({ ...prev, cv: "" }));
      } else {
        setErrors((prev) => ({
          ...prev,
          cv: "Por favor, sube un archivo PDF o DOCX.",
        }));
      }
    }
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

    setLoading(true); // Activa el estado de carga
    const formDataObject = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObject.append(key, formData[key]);
    });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/teacher`,
        formDataObject,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setAlert({ message: "Correo enviado con éxito", type: "success" });
      console.log("Correo enviado con éxito:", response.data);
    } catch (error) {
      setAlert({
        message: "Error al enviar el correo. Inténtalo nuevamente.",
        type: "error",
      });
      console.error("Error al enviar el correo:", error);
    } finally {
      setLoading(false); // Desactiva el estado de carga
    }
  };

  return (
    <div className="flex h-screen bg-white mt-14">
      <div className="w-1/2 hidden md:block">
        <img
          src="https://media.istockphoto.com/id/932822684/es/foto/college-estudiantes.webp?s=612x612&w=is&k=20&c=rUyg80YDtGegurOUC7NZGa3B6YKR8yLf6EW1l7fS924="
          alt="Contact Us"
          className="object-cover  h-full w-full"
        />
      </div>
      <div className="mt-14">
        <div className="min-h-screen bg-gray-200 flex items-center justify-center flex-col p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text mb-6 text-blue-900">
            ¿Te gustaría trabajar con nosotros?
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
                  { name: "idNumber", type: "text", label: "Número de Cedula" },
                  { name: "phoneNumber", type: "tel", label: "Teléfono" },
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
                id="message"
                name="message"
                placeholder="Mensaje"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-6 md:px-3 md:py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                required
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}

              <div>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  ref={fileInputRef}
                  accept=".pdf, .docx"
                  onChange={(e) => handleFiles(e.target.files)}
                  className="hidden"
                  required
                />
                <div
                  className={`group relative flex items-center justify-center w-full p-4 text-center border-2 border-dashed rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
                    dragActive
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current.click()}
                >
                  <div>
                    <FaFileUpload className="mx-auto w-8 h-8 text-gray-400 group-hover:text-blue-500 mb-2 transition-colors duration-300" />
                    <p className="text-sm font-medium text-gray-700 group-hover:text-blue-500 transition-colors duration-300">
                      {formData.cv
                        ? formData.cv.name
                        : "Arrastra tu CV (PDF o DOCX) o haz clic"}
                    </p>
                  </div>
                </div>
                {errors.cv && (
                  <p className="text-red-500 text-xs mt-1">{errors.cv}</p>
                )}
              </div>

              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
