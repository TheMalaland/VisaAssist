export default function FAQs() {
    const faqs = [
      {
        question: "¿Cuánto tiempo tarda el trámite de la visa?",
        answer:
          "El tiempo puede variar dependiendo de la disponibilidad de citas en el consulado. Generalmente, toma entre 2 y 4 semanas.",
      },
      {
        question: "¿Qué documentos necesito para la solicitud?",
        answer:
          "Necesitarás tu pasaporte vigente, una fotografía reciente y el formulario DS-160 completado.",
      },
      {
        question: "¿Puedo renovar mi visa si ya expiró?",
        answer:
          "Sí, puedes renovarla si no ha pasado mucho tiempo desde su expiración. Consulta los requisitos específicos del consulado.",
      },
      {
        question: "¿Qué pasa si mi visa es rechazada?",
        answer:
          "Si tu visa es rechazada, puedes volver a solicitarla, pero es importante entender las razones del rechazo antes de hacerlo.",
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">Preguntas Frecuentes (FAQs)</h1>
          <p className="text-gray-700 mb-6">
            Es normal tener muchas preguntas al realizar el trámite legal para obtener la visa. Aquí
            respondemos las más comunes para ayudarte con claridad y confianza.
          </p>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  