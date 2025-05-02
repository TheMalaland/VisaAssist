import { useState } from 'react';
import Step1 from '../components/new_form_steps/NuevaSolicitudStep1';
import Step2 from '../components/new_form_steps/NuevaSolicitudStep2';
import Step3 from '../components/new_form_steps/NuevaSolicitudStep3';
import Step4 from '../components/new_form_steps/NuevaSolicitudStep4';
import Step5 from '../components/new_form_steps/NuevaSolicitudStep5';
import Step6 from '../components/new_form_steps/NuevaSolicitudStep6';
import Step7 from '../components/new_form_steps/NuevaSolicitudStep7';
import Step8 from '../components/new_form_steps/NuevaSolicitudStep8';
import Step9 from '../components/new_form_steps/NuevaSolicitudStep9';
import Step10 from '../components/new_form_steps/NuevaSolicitudStep10';
import Step11 from '../components/new_form_steps/NuevaSolicitudStep11';




/** 
import Step5 from '../components/NuevaSolicitudStep5';
import Step6 from '../components/NuevaSolicitudStep6';
import Step7 from '../components/NuevaSolicitudStep7';
import Step8 from '../components/NuevaSolicitudStep8';
import Step9 from '../components/NuevaSolicitudStep9';
import Step10 from '../components/NuevaSolicitudStep10';
import Step11 from '../components/NuevaSolicitudStep11';
*/

export default function NuevaSolicitud() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    fechaNacimiento: '',
    genero: '',
    nacionalidad: '',
    pais: '',
    estado: '',
    // Campos adicionales para los pasos 5-11
    step5Field1: '',
    step6Field1: '',
    step7Field1: '',
    step8Field1: '',
    step9Field1: '',
    step10Field1: '',
    step11Field1: '',
  });

  const [step, setStep] = useState(1); // Controla el paso actual

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (step < 10) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
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
        {step === 4 && <Step4 formData={formData} handleChange={handleChange} />}
        {step === 5 && <Step5 formData={formData} handleChange={handleChange} />}
        {step === 6 && <Step6 formData={formData} handleChange={handleChange} />}
        {step === 7 && <Step7 formData={formData} handleChange={handleChange} />}
        {step === 8 && <Step8 formData={formData} handleChange={handleChange} />}
        {step === 9 && <Step9 formData={formData} handleChange={handleChange} />}
        {step === 10 && <Step10 formData={formData} handleChange={handleChange} />}

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
          {step < 10 ? (
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