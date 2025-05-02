export default function Step10({ formData, handleChange }) {
  const preguntas = [
    "¿Tiene usted una enfermedad contagiosa (como tuberculosis)?",
    "¿Tiene un trastorno mental o físico que represente amenaza?",
    "¿Ha sido adicto a las drogas?",
    "¿Ha sido arrestado o condenado por algún delito?",
    "¿Ha violado alguna ley de sustancias controladas?",
    "¿Viene a ejercer prostitución o ha estado involucrado en ella?",
    "¿Ha estado involucrado en lavado de dinero?",
    "¿Ha participado en espionaje, sabotaje u otra actividad ilegal en EE.UU.?",
    "¿Ha participado en actividades terroristas?",
    "¿Ha proporcionado apoyo a terroristas?",
    "¿Es miembro de una organización terrorista?",
    "¿Ha participado en genocidio?",
    "¿Ha participado en tortura?",
    "¿Ha participado en asesinatos políticos u otros actos de violencia?",
    "¿Ha violado gravemente la libertad religiosa como funcionario?",
    "¿Ha sido deportado o sujeto a audiencia de expulsión?",
    "¿Ha intentado obtener visa o beneficios de inmigración por medios fraudulentos?",
    "¿No asistió a una audiencia migratoria en los últimos 5 años?",
    "¿Ha estado ilegalmente o violado los términos de una visa en EE.UU.?",
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Encabezado */}
      <h2 className="text-xl font-bold text-gray-700 mt-6">❓ PREGUNTAS DE SEGURIDAD</h2>
      <p className="text-gray-500 mb-4">Por favor, contesta Sí o No a las siguientes preguntas:</p>

      {/* Lista de preguntas */}
      {preguntas.map((pregunta, index) => (
        <div key={index} className="flex flex-col">
          <label className="block text-gray-700 font-medium mb-1">{pregunta}</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name={`pregunta${index}`}
                value="Sí"
                checked={formData[`pregunta${index}`] === "Sí"}
                onChange={handleChange}
                className="mr-2"
                required
              />
              Sí
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name={`pregunta${index}`}
                value="No"
                checked={formData[`pregunta${index}`] === "No"}
                onChange={handleChange}
                className="mr-2"
                required
              />
              No
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}