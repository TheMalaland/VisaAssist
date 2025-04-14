import { useState } from 'react';
import Step1 from '../components/NuevaSolicitudStep1';
import Step2 from '../components/NuevaSolicitudStep2';
import Step3 from '../components/NuevaSolicitudStep3';

export default function NuevaSolicitud() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    fechaNacimiento: '',
    genero: '',
    nacionalidad: '',
    pais: '',
    estado: '',
  });

  const [step, setStep] = useState(1); // Controla el paso actual

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    alert('¡Gracias! Tus datos han sido enviados.');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 mt-8 text-center">
        Solicitud de Visa Americana
      </h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        Has iniciado el proceso para tramitar tu visa. Ingresa los datos solicitados para poder realizar el trámite con nosotros.
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 sm:p-12 rounded-lg shadow-md w-full max-w-4xl"
      >
        {step === 1 && <Step1 formData={formData} handleChange={handleChange} />}
        {step === 2 && <Step2 formData={formData} handleChange={handleChange} />}
        {step === 3 && <Step3 formData={formData} handleChange={handleChange} />}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
            >
              Atrás
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Siguiente
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Enviar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}