export default function Step9({ formData, handleChange }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Encabezado */}
      <h2 className="text-xl font-bold text-gray-700 mt-6">🕰 EMPLEOS ANTERIORES</h2>

      {/* Cargo o puesto */}
      <div className="flex flex-col">
        <label htmlFor="cargoAnterior" className="block text-gray-700 font-medium mb-1">
          Cargo o puesto
        </label>
        <small className="text-gray-500 mb-1">Ingresa el cargo o puesto que desempeñaste.</small>
        <input
          type="text"
          id="cargoAnterior"
          name="cargoAnterior"
          value={formData.cargoAnterior}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Nombre del jefe directo */}
      <div className="flex flex-col">
        <label htmlFor="nombreJefeAnterior" className="block text-gray-700 font-medium mb-1">
          Nombre del jefe directo
        </label>
        <small className="text-gray-500 mb-1">Ingresa el nombre completo de tu jefe directo.</small>
        <input
          type="text"
          id="nombreJefeAnterior"
          name="nombreJefeAnterior"
          value={formData.nombreJefeAnterior}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Fecha de inicio */}
      <div className="flex flex-col">
        <label htmlFor="fechaInicioAnterior" className="block text-gray-700 font-medium mb-1">
          Fecha de inicio
        </label>
        <small className="text-gray-500 mb-1">Selecciona la fecha de inicio en tu empleo anterior.</small>
        <input
          type="date"
          id="fechaInicioAnterior"
          name="fechaInicioAnterior"
          value={formData.fechaInicioAnterior}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Fecha de término */}
      <div className="flex flex-col">
        <label htmlFor="fechaTerminoAnterior" className="block text-gray-700 font-medium mb-1">
          Fecha de término
        </label>
        <small className="text-gray-500 mb-1">Selecciona la fecha de término en tu empleo anterior.</small>
        <input
          type="date"
          id="fechaTerminoAnterior"
          name="fechaTerminoAnterior"
          value={formData.fechaTerminoAnterior}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Nombre de la empresa */}
      <div className="flex flex-col">
        <label htmlFor="nombreEmpresaAnterior" className="block text-gray-700 font-medium mb-1">
          Nombre de la empresa
        </label>
        <small className="text-gray-500 mb-1">Ingresa el nombre de la empresa donde trabajaste.</small>
        <input
          type="text"
          id="nombreEmpresaAnterior"
          name="nombreEmpresaAnterior"
          value={formData.nombreEmpresaAnterior}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Dirección */}
      <div className="flex flex-col">
        <label htmlFor="direccionEmpresaAnterior" className="block text-gray-700 font-medium mb-1">
          Dirección
        </label>
        <small className="text-gray-500 mb-1">Ingresa la dirección completa de la empresa.</small>
        <input
          type="text"
          id="direccionEmpresaAnterior"
          name="direccionEmpresaAnterior"
          value={formData.direccionEmpresaAnterior}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Colonia */}
      <div className="flex flex-col">
        <label htmlFor="coloniaEmpresaAnterior" className="block text-gray-700 font-medium mb-1">
          Colonia
        </label>
        <small className="text-gray-500 mb-1">Ingresa la colonia donde se encontraba la empresa.</small>
        <input
          type="text"
          id="coloniaEmpresaAnterior"
          name="coloniaEmpresaAnterior"
          value={formData.coloniaEmpresaAnterior}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Ciudad */}
      <div className="flex flex-col">
        <label htmlFor="ciudadEmpresaAnterior" className="block text-gray-700 font-medium mb-1">
          Ciudad
        </label>
        <small className="text-gray-500 mb-1">Ingresa la ciudad donde se encontraba la empresa.</small>
        <input
          type="text"
          id="ciudadEmpresaAnterior"
          name="ciudadEmpresaAnterior"
          value={formData.ciudadEmpresaAnterior}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Provincia/Estado */}
      <div className="flex flex-col">
        <label htmlFor="estadoEmpresaAnterior" className="block text-gray-700 font-medium mb-1">
          Provincia/Estado
        </label>
        <small className="text-gray-500 mb-1">Selecciona la provincia o estado donde se encontraba la empresa.</small>
        <input
          type="text"
          id="estadoEmpresaAnterior"
          name="estadoEmpresaAnterior"
          value={formData.estadoEmpresaAnterior}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Código postal */}
      <div className="flex flex-col">
        <label htmlFor="codigoPostalEmpresaAnterior" className="block text-gray-700 font-medium mb-1">
          Código postal
        </label>
        <small className="text-gray-500 mb-1">Ingresa el código postal de la empresa.</small>
        <input
          type="text"
          id="codigoPostalEmpresaAnterior"
          name="codigoPostalEmpresaAnterior"
          value={formData.codigoPostalEmpresaAnterior}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          pattern="^\d{5}$"
          title="El código postal debe contener exactamente 5 dígitos."
          required
        />
      </div>

      {/* Teléfono principal */}
      <div className="flex flex-col">
        <label htmlFor="telefonoPrincipalEmpresaAnterior" className="block text-gray-700 font-medium mb-1">
          Teléfono principal
        </label>
        <small className="text-gray-500 mb-1">Ingresa el teléfono principal de la empresa.</small>
        <input
          type="tel"
          id="telefonoPrincipalEmpresaAnterior"
          name="telefonoPrincipalEmpresaAnterior"
          value={formData.telefonoPrincipalEmpresaAnterior}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          pattern="^\d{10}$"
          title="El número de teléfono debe contener exactamente 10 dígitos."
          required
        />
      </div>

      {/* Otro teléfono */}
      <div className="flex flex-col">
        <label htmlFor="otroTelefonoEmpresaAnterior" className="block text-gray-700 font-medium mb-1">
          Otro teléfono
        </label>
        <small className="text-gray-500 mb-1">Ingresa otro teléfono de contacto de la empresa, si aplica.</small>
        <input
          type="tel"
          id="otroTelefonoEmpresaAnterior"
          name="otroTelefonoEmpresaAnterior"
          value={formData.otroTelefonoEmpresaAnterior}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          pattern="^\d{10}$"
          title="El número de teléfono debe contener exactamente 10 dígitos."
        />
      </div>
    </div>
  );
}