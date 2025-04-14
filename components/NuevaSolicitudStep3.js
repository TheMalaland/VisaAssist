export default function Step3({ formData, handleChange, handleAutoFill }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Encabezado */}
      <h2 className="text-xl font-bold text-gray-700 mt-6">✈️ REFERENCIAS DE VIAJE</h2>

      {/* Checkbox para autofill */}
      <div className="flex items-center">
        <input
          type="checkbox"
          id="mismaPersona"
          name="mismaPersona"
          checked={formData.mismaPersona}
          onChange={(e) => handleAutoFill(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="mismaPersona" className="text-gray-700">
          Soy la misma persona que paga el viaje
        </label>
      </div>

      {/* Grid para los campos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Persona que paga el viaje */}
        <div className="flex flex-col">
          <label htmlFor="personaPagaViaje" className="block text-gray-700 font-medium mb-1">
            Persona que paga el viaje
          </label>
          <small className="text-gray-500 mb-1">Ingresa el nombre completo de la persona que paga el viaje.</small>
          <input
            type="text"
            id="personaPagaViaje"
            name="personaPagaViaje"
            value={formData.personaPagaViaje}
            onChange={handleChange}
            className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$"
            title="El nombre solo puede contener letras, espacios y acentos."
            maxLength="50"
            required
          />
        </div>

        {/* Relación o parentesco */}
        <div className="flex flex-col">
          <label htmlFor="relacionSolicitante" className="block text-gray-700 font-medium mb-1">
            Relación o parentesco con el solicitante
          </label>
          <small className="text-gray-500 mb-1">Especifica la relación o parentesco con el solicitante.</small>
          <input
            type="text"
            id="relacionSolicitante"
            name="relacionSolicitante"
            value={formData.relacionSolicitante}
            onChange={handleChange}
            className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$"
            title="La relación solo puede contener letras, espacios y acentos."
            maxLength="50"
            required
          />
        </div>

        {/* Dirección */}
        <div className="flex flex-col">
          <label htmlFor="direccion" className="block text-gray-700 font-medium mb-1">
            Dirección
          </label>
          <small className="text-gray-500 mb-1">Ingresa la dirección completa.</small>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Colonia */}
        <div className="flex flex-col">
          <label htmlFor="colonia" className="block text-gray-700 font-medium mb-1">
            Colonia
          </label>
          <small className="text-gray-500 mb-1">Ingresa la colonia.</small>
          <input
            type="text"
            id="colonia"
            name="colonia"
            value={formData.colonia}
            onChange={handleChange}
            className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Ciudad */}
        <div className="flex flex-col">
          <label htmlFor="ciudad" className="block text-gray-700 font-medium mb-1">
            Ciudad
          </label>
          <small className="text-gray-500 mb-1">Ingresa la ciudad.</small>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Provincia/Estado */}
        <div className="flex flex-col">
          <label htmlFor="estado" className="block text-gray-700 font-medium mb-1">
            Provincia/Estado
          </label>
          <small className="text-gray-500 mb-1">Selecciona la provincia o estado.</small>
          <input
            type="text"
            id="estado"
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Código Postal */}
        <div className="flex flex-col">
          <label htmlFor="codigoPostal" className="block text-gray-700 font-medium mb-1">
            Código Postal
          </label>
          <small className="text-gray-500 mb-1">Ingresa el código postal (solo números).</small>
          <input
            type="text"
            id="codigoPostal"
            name="codigoPostal"
            value={formData.codigoPostal}
            onChange={handleChange}
            className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            pattern="^\d{5}$"
            title="El código postal debe contener exactamente 5 dígitos."
            required
          />
        </div>

        {/* Correo */}
        <div className="flex flex-col">
          <label htmlFor="correo" className="block text-gray-700 font-medium mb-1">
            Correo
          </label>
          <small className="text-gray-500 mb-1">Ingresa un correo electrónico válido.</small>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            title="El correo debe contener un '@' y un dominio válido."
            required
          />
        </div>

        {/* Teléfono */}
        <div className="flex flex-col">
          <label htmlFor="telefono" className="block text-gray-700 font-medium mb-1">
            Teléfono
          </label>
          <small className="text-gray-500 mb-1">Ingresa un número de teléfono válido (10 dígitos).</small>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            pattern="^\d{10}$"
            title="El número de teléfono debe contener exactamente 10 dígitos."
            required
          />
        </div>
      </div>
    </div>
  );
}