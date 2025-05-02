export default function Step8({ formData, handleChange }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Encabezado */}
      <h2 className="text-xl font-bold text-gray-700 mt-6">💼 ESTATUS LABORAL</h2>

      {/* Cargo o puesto */}
      <div className="flex flex-col">
        <label htmlFor="cargo" className="block text-gray-700 font-medium mb-1">
          Cargo o puesto
        </label>
        <small className="text-gray-500 mb-1">Ingresa el cargo o puesto que desempeñas.</small>
        <input
          type="text"
          id="cargo"
          name="cargo"
          value={formData.cargo}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Fecha de inicio */}
      <div className="flex flex-col">
        <label htmlFor="fechaInicioLaboral" className="block text-gray-700 font-medium mb-1">
          Fecha de inicio
        </label>
        <small className="text-gray-500 mb-1">Selecciona la fecha de inicio en tu puesto actual.</small>
        <input
          type="date"
          id="fechaInicioLaboral"
          name="fechaInicioLaboral"
          value={formData.fechaInicioLaboral}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Actividades del puesto */}
      <div className="flex flex-col">
        <label htmlFor="actividadesPuesto" className="block text-gray-700 font-medium mb-1">
          Actividades del puesto
        </label>
        <small className="text-gray-500 mb-1">Describe brevemente las actividades que realizas en tu puesto.</small>
        <textarea
          id="actividadesPuesto"
          name="actividadesPuesto"
          value={formData.actividadesPuesto}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          required
        />
      </div>

      {/* Nombre del jefe directo */}
      <div className="flex flex-col">
        <label htmlFor="nombreJefe" className="block text-gray-700 font-medium mb-1">
          Nombre del jefe directo
        </label>
        <small className="text-gray-500 mb-1">Ingresa el nombre completo de tu jefe directo.</small>
        <input
          type="text"
          id="nombreJefe"
          name="nombreJefe"
          value={formData.nombreJefe}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Ingreso mensual */}
      <div className="flex flex-col">
        <label htmlFor="ingresoMensual" className="block text-gray-700 font-medium mb-1">
          Ingreso mensual
        </label>
        <small className="text-gray-500 mb-1">Ingresa tu ingreso mensual en pesos mexicanos.</small>
        <input
          type="number"
          id="ingresoMensual"
          name="ingresoMensual"
          value={formData.ingresoMensual}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Nombre de la empresa */}
      <div className="flex flex-col">
        <label htmlFor="nombreEmpresa" className="block text-gray-700 font-medium mb-1">
          Nombre de la empresa
        </label>
        <small className="text-gray-500 mb-1">Ingresa el nombre de la empresa donde trabajas.</small>
        <input
          type="text"
          id="nombreEmpresa"
          name="nombreEmpresa"
          value={formData.nombreEmpresa}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Dirección */}
      <div className="flex flex-col">
        <label htmlFor="direccionEmpresa" className="block text-gray-700 font-medium mb-1">
          Dirección
        </label>
        <small className="text-gray-500 mb-1">Ingresa la dirección completa de la empresa.</small>
        <input
          type="text"
          id="direccionEmpresa"
          name="direccionEmpresa"
          value={formData.direccionEmpresa}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Colonia */}
      <div className="flex flex-col">
        <label htmlFor="coloniaEmpresa" className="block text-gray-700 font-medium mb-1">
          Colonia
        </label>
        <small className="text-gray-500 mb-1">Ingresa la colonia donde se encuentra la empresa.</small>
        <input
          type="text"
          id="coloniaEmpresa"
          name="coloniaEmpresa"
          value={formData.coloniaEmpresa}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Ciudad */}
      <div className="flex flex-col">
        <label htmlFor="ciudadEmpresa" className="block text-gray-700 font-medium mb-1">
          Ciudad
        </label>
        <small className="text-gray-500 mb-1">Ingresa la ciudad donde se encuentra la empresa.</small>
        <input
          type="text"
          id="ciudadEmpresa"
          name="ciudadEmpresa"
          value={formData.ciudadEmpresa}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Provincia/Estado */}
      <div className="flex flex-col">
        <label htmlFor="estadoEmpresa" className="block text-gray-700 font-medium mb-1">
          Provincia/Estado
        </label>
        <small className="text-gray-500 mb-1">Selecciona la provincia o estado donde se encuentra la empresa.</small>
        <input
          type="text"
          id="estadoEmpresa"
          name="estadoEmpresa"
          value={formData.estadoEmpresa}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Código postal */}
      <div className="flex flex-col">
        <label htmlFor="codigoPostalEmpresa" className="block text-gray-700 font-medium mb-1">
          Código postal
        </label>
        <small className="text-gray-500 mb-1">Ingresa el código postal de la empresa.</small>
        <input
          type="text"
          id="codigoPostalEmpresa"
          name="codigoPostalEmpresa"
          value={formData.codigoPostalEmpresa}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          pattern="^\d{5}$"
          title="El código postal debe contener exactamente 5 dígitos."
          required
        />
      </div>

      {/* Teléfono principal */}
      <div className="flex flex-col">
        <label htmlFor="telefonoPrincipalEmpresa" className="block text-gray-700 font-medium mb-1">
          Teléfono principal
        </label>
        <small className="text-gray-500 mb-1">Ingresa el teléfono principal de la empresa.</small>
        <input
          type="tel"
          id="telefonoPrincipalEmpresa"
          name="telefonoPrincipalEmpresa"
          value={formData.telefonoPrincipalEmpresa}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          pattern="^\d{10}$"
          title="El número de teléfono debe contener exactamente 10 dígitos."
          required
        />
      </div>

      {/* Otro teléfono */}
      <div className="flex flex-col">
        <label htmlFor="otroTelefonoEmpresa" className="block text-gray-700 font-medium mb-1">
          Otro teléfono
        </label>
        <small className="text-gray-500 mb-1">Ingresa otro teléfono de contacto de la empresa, si aplica.</small>
        <input
          type="tel"
          id="otroTelefonoEmpresa"
          name="otroTelefonoEmpresa"
          value={formData.otroTelefonoEmpresa}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          pattern="^\d{10}$"
          title="El número de teléfono debe contener exactamente 10 dígitos."
        />
      </div>
    </div>
  );
}