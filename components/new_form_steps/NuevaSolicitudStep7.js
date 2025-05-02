export default function Step7({ formData, handleChange }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Encabezado */}
      <h2 className="text-xl font-bold text-gray-700 mt-6">🎓 ESTATUS EDUCATIVO</h2>

      {/* Carrera */}
      <div className="flex flex-col">
        <label htmlFor="carrera" className="block text-gray-700 font-medium mb-1">
          Carrera
        </label>
        <small className="text-gray-500 mb-1">Ingresa el nombre de la carrera que estudiaste o estás estudiando.</small>
        <input
          type="text"
          id="carrera"
          name="carrera"
          value={formData.carrera}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Fecha de inicio */}
      <div className="flex flex-col">
        <label htmlFor="fechaInicio" className="block text-gray-700 font-medium mb-1">
          Fecha de inicio
        </label>
        <small className="text-gray-500 mb-1">Selecciona la fecha de inicio de tus estudios.</small>
        <input
          type="date"
          id="fechaInicio"
          name="fechaInicio"
          value={formData.fechaInicio}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Fecha de término */}
      <div className="flex flex-col">
        <label htmlFor="fechaTermino" className="block text-gray-700 font-medium mb-1">
          Fecha de término
        </label>
        <small className="text-gray-500 mb-1">Selecciona la fecha de término de tus estudios.</small>
        <input
          type="date"
          id="fechaTermino"
          name="fechaTermino"
          value={formData.fechaTermino}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Nombre de la escuela */}
      <div className="flex flex-col">
        <label htmlFor="nombreEscuela" className="block text-gray-700 font-medium mb-1">
          Nombre de la escuela
        </label>
        <small className="text-gray-500 mb-1">Ingresa el nombre de la escuela donde estudiaste o estudias actualmente.</small>
        <input
          type="text"
          id="nombreEscuela"
          name="nombreEscuela"
          value={formData.nombreEscuela}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Dirección */}
      <div className="flex flex-col">
        <label htmlFor="direccionEscuela" className="block text-gray-700 font-medium mb-1">
          Dirección
        </label>
        <small className="text-gray-500 mb-1">Ingresa la dirección completa de la escuela.</small>
        <input
          type="text"
          id="direccionEscuela"
          name="direccionEscuela"
          value={formData.direccionEscuela}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Colonia */}
      <div className="flex flex-col">
        <label htmlFor="coloniaEscuela" className="block text-gray-700 font-medium mb-1">
          Colonia
        </label>
        <small className="text-gray-500 mb-1">Ingresa la colonia donde se encuentra la escuela.</small>
        <input
          type="text"
          id="coloniaEscuela"
          name="coloniaEscuela"
          value={formData.coloniaEscuela}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Ciudad */}
      <div className="flex flex-col">
        <label htmlFor="ciudadEscuela" className="block text-gray-700 font-medium mb-1">
          Ciudad
        </label>
        <small className="text-gray-500 mb-1">Ingresa la ciudad donde se encuentra la escuela.</small>
        <input
          type="text"
          id="ciudadEscuela"
          name="ciudadEscuela"
          value={formData.ciudadEscuela}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Provincia/Estado */}
      <div className="flex flex-col">
        <label htmlFor="estadoEscuela" className="block text-gray-700 font-medium mb-1">
          Provincia/Estado
        </label>
        <small className="text-gray-500 mb-1">Selecciona la provincia o estado donde se encuentra la escuela.</small>
        <input
          type="text"
          id="estadoEscuela"
          name="estadoEscuela"
          value={formData.estadoEscuela}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Código postal */}
      <div className="flex flex-col">
        <label htmlFor="codigoPostalEscuela" className="block text-gray-700 font-medium mb-1">
          Código postal
        </label>
        <small className="text-gray-500 mb-1">Ingresa el código postal de la escuela.</small>
        <input
          type="text"
          id="codigoPostalEscuela"
          name="codigoPostalEscuela"
          value={formData.codigoPostalEscuela}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          pattern="^\d{5}$"
          title="El código postal debe contener exactamente 5 dígitos."
          required
        />
      </div>

      {/* Teléfono principal */}
      <div className="flex flex-col">
        <label htmlFor="telefonoPrincipalEscuela" className="block text-gray-700 font-medium mb-1">
          Teléfono principal
        </label>
        <small className="text-gray-500 mb-1">Ingresa el teléfono principal de la escuela.</small>
        <input
          type="tel"
          id="telefonoPrincipalEscuela"
          name="telefonoPrincipalEscuela"
          value={formData.telefonoPrincipalEscuela}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          pattern="^\d{10}$"
          title="El número de teléfono debe contener exactamente 10 dígitos."
          required
        />
      </div>

      {/* Otro teléfono */}
      <div className="flex flex-col">
        <label htmlFor="otroTelefonoEscuela" className="block text-gray-700 font-medium mb-1">
          Otro teléfono
        </label>
        <small className="text-gray-500 mb-1">Ingresa otro teléfono de contacto de la escuela, si aplica.</small>
        <input
          type="tel"
          id="otroTelefonoEscuela"
          name="otroTelefonoEscuela"
          value={formData.otroTelefonoEscuela}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          pattern="^\d{10}$"
          title="El número de teléfono debe contener exactamente 10 dígitos."
        />
      </div>

      {/* Idiomas que domina */}
      <div className="flex flex-col">
        <label htmlFor="idiomas" className="block text-gray-700 font-medium mb-1">
          Idiomas que domina
        </label>
        <small className="text-gray-500 mb-1">Ingresa los idiomas que dominas, separados por comas.</small>
        <input
          type="text"
          id="idiomas"
          name="idiomas"
          value={formData.idiomas}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}