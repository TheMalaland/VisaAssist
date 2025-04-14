export default function Step6({ formData, handleChange }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Encabezado */}
      <h2 className="text-xl font-bold text-gray-700 mt-6">👪 REFERENCIAS FAMILIARES</h2>

      {/* Nombre del padre */}
      <div className="flex flex-col">
        <label htmlFor="nombrePadre" className="block text-gray-700 font-medium mb-1">
          Nombre del padre
        </label>
        <small className="text-gray-500 mb-1">Ingresa el nombre completo de tu padre.</small>
        <input
          type="text"
          id="nombrePadre"
          name="nombrePadre"
          value={formData.nombrePadre}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Fecha de nacimiento del padre */}
      <div className="flex flex-col">
        <label htmlFor="fechaNacimientoPadre" className="block text-gray-700 font-medium mb-1">
          Fecha de nacimiento del padre
        </label>
        <small className="text-gray-500 mb-1">Selecciona la fecha de nacimiento de tu padre.</small>
        <input
          type="date"
          id="fechaNacimientoPadre"
          name="fechaNacimientoPadre"
          value={formData.fechaNacimientoPadre}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Situación legal del padre en EE.UU. */}
      <div className="flex flex-col">
        <label htmlFor="situacionLegalPadre" className="block text-gray-700 font-medium mb-1">
          Situación legal del padre (si vive en EE.UU.)
        </label>
        <small className="text-gray-500 mb-1">Selecciona la situación legal de tu padre en EE.UU., si aplica.</small>
        <select
          id="situacionLegalPadre"
          name="situacionLegalPadre"
          value={formData.situacionLegalPadre}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Selecciona una opción</option>
          <option value="Ciudadano">Ciudadano</option>
          <option value="Residente Permanente">Residente Permanente</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      {/* Nombre de la madre */}
      <div className="flex flex-col">
        <label htmlFor="nombreMadre" className="block text-gray-700 font-medium mb-1">
          Nombre de la madre
        </label>
        <small className="text-gray-500 mb-1">Ingresa el nombre completo de tu madre.</small>
        <input
          type="text"
          id="nombreMadre"
          name="nombreMadre"
          value={formData.nombreMadre}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Fecha de nacimiento de la madre */}
      <div className="flex flex-col">
        <label htmlFor="fechaNacimientoMadre" className="block text-gray-700 font-medium mb-1">
          Fecha de nacimiento de la madre
        </label>
        <small className="text-gray-500 mb-1">Selecciona la fecha de nacimiento de tu madre.</small>
        <input
          type="date"
          id="fechaNacimientoMadre"
          name="fechaNacimientoMadre"
          value={formData.fechaNacimientoMadre}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Situación legal de la madre en EE.UU. */}
      <div className="flex flex-col">
        <label htmlFor="situacionLegalMadre" className="block text-gray-700 font-medium mb-1">
          Situación legal de la madre (si vive en EE.UU.)
        </label>
        <small className="text-gray-500 mb-1">Selecciona la situación legal de tu madre en EE.UU., si aplica.</small>
        <select
          id="situacionLegalMadre"
          name="situacionLegalMadre"
          value={formData.situacionLegalMadre}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Selecciona una opción</option>
          <option value="Ciudadano">Ciudadano</option>
          <option value="Residente Permanente">Residente Permanente</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      {/* Otros familiares en EE.UU. */}
      <div className="flex flex-col">
        <label htmlFor="otrosFamiliares" className="block text-gray-700 font-medium mb-1">
          Otros familiares en EE.UU.
        </label>
        <small className="text-gray-500 mb-1">Ingresa los nombres, parentesco y situación legal de otros familiares en EE.UU.</small>
        <textarea
          id="otrosFamiliares"
          name="otrosFamiliares"
          value={formData.otrosFamiliares}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />
      </div>
    </div>
  );
}