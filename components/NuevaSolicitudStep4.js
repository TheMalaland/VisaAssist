export default function Step4({ formData, handleChange }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Encabezado */}
      <h2 className="text-xl font-bold text-gray-700 mt-6">📅 ITINERARIOS DE VIAJE</h2>

      {/* Fecha del próximo viaje */}
      <div className="flex flex-col">
        <label htmlFor="fechaProximoViaje" className="block text-gray-700 font-medium mb-1">
          Fecha del próximo viaje a E.U.
        </label>
        <small className="text-gray-500 mb-1">Selecciona la fecha de tu próximo viaje.</small>
        <input
          type="date"
          id="fechaProximoViaje"
          name="fechaProximoViaje"
          value={formData.fechaProximoViaje}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Fecha de regreso */}
      <div className="flex flex-col">
        <label htmlFor="fechaRegreso" className="block text-gray-700 font-medium mb-1">
          Fecha de regreso
        </label>
        <small className="text-gray-500 mb-1">Selecciona la fecha de regreso.</small>
        <input
          type="date"
          id="fechaRegreso"
          name="fechaRegreso"
          value={formData.fechaRegreso}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Destino */}
      <div className="flex flex-col">
        <label htmlFor="destino" className="block text-gray-700 font-medium mb-1">
          Destino
        </label>
        <small className="text-gray-500 mb-1">Ingresa el destino de tu viaje.</small>
        <input
          type="text"
          id="destino"
          name="destino"
          value={formData.destino}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Dirección de hospedaje */}
      <div className="flex flex-col">
        <label htmlFor="direccionHospedaje" className="block text-gray-700 font-medium mb-1">
          Dirección de hospedaje
        </label>
        <small className="text-gray-500 mb-1">Ingresa la dirección donde te hospedarás.</small>
        <input
          type="text"
          id="direccionHospedaje"
          name="direccionHospedaje"
          value={formData.direccionHospedaje}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Personas que acompañan */}
      <div className="flex flex-col">
        <label htmlFor="personasAcompanantes" className="block text-gray-700 font-medium mb-1">
          Personas que acompañan
        </label>
        <small className="text-gray-500 mb-1">Ingresa los nombres de las personas que te acompañan.</small>
        <input
          type="text"
          id="personasAcompanantes"
          name="personasAcompanantes"
          value={formData.personasAcompanantes}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Relación o parentesco */}
      <div className="flex flex-col">
        <label htmlFor="relacionAcompanantes" className="block text-gray-700 font-medium mb-1">
          Relación o parentesco
        </label>
        <small className="text-gray-500 mb-1">Especifica la relación o parentesco con las personas que te acompañan.</small>
        <input
          type="text"
          id="relacionAcompanantes"
          name="relacionAcompanantes"
          value={formData.relacionAcompanantes}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* ¿Ha viajado a EE.UU.? */}
      <div className="flex flex-col">
        <label htmlFor="haViajadoEU" className="block text-gray-700 font-medium mb-1">
          ¿Ha viajado a EE.UU.?
        </label>
        <small className="text-gray-500 mb-1">Selecciona si has viajado a EE.UU. anteriormente.</small>
        <select
          id="haViajadoEU"
          name="haViajadoEU"
          value={formData.haViajadoEU}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* Fecha del último viaje */}
      {formData.haViajadoEU === "Sí" && (
        <>
          <div className="flex flex-col">
            <label htmlFor="fechaUltimoViaje" className="block text-gray-700 font-medium mb-1">
              Fecha del último viaje
            </label>
            <small className="text-gray-500 mb-1">Selecciona la fecha de tu último viaje a EE.UU.</small>
            <input
              type="date"
              id="fechaUltimoViaje"
              name="fechaUltimoViaje"
              value={formData.fechaUltimoViaje}
              onChange={handleChange}
              className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="destinoUltimoViaje" className="block text-gray-700 font-medium mb-1">
              Destino
            </label>
            <small className="text-gray-500 mb-1">Ingresa el destino de tu último viaje a EE.UU.</small>
            <input
              type="text"
              id="destinoUltimoViaje"
              name="destinoUltimoViaje"
              value={formData.destinoUltimoViaje}
              onChange={handleChange}
              className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="duracionUltimoViaje" className="block text-gray-700 font-medium mb-1">
              Duración
            </label>
            <small className="text-gray-500 mb-1">Especifica la duración de tu último viaje a EE.UU.</small>
            <input
              type="text"
              id="duracionUltimoViaje"
              name="duracionUltimoViaje"
              value={formData.duracionUltimoViaje}
              onChange={handleChange}
              className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </>
      )}

      {/* ¿Ha viajado fuera del país (excluyendo EE.UU.)? */}
      <div className="flex flex-col">
        <label htmlFor="haViajadoFuera" className="block text-gray-700 font-medium mb-1">
          ¿Ha viajado fuera del país (excluyendo EE.UU.) en los últimos 5 años?
        </label>
        <small className="text-gray-500 mb-1">Selecciona si has viajado fuera del país.</small>
        <select
          id="haViajadoFuera"
          name="haViajadoFuera"
          value={formData.haViajadoFuera}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* Detalles de viajes fuera del país */}
      {formData.haViajadoFuera === "Sí" && (
        <>
          <div className="flex flex-col">
            <label htmlFor="paisUltimoViaje" className="block text-gray-700 font-medium mb-1">
              País
            </label>
            <small className="text-gray-500 mb-1">Ingresa el país que visitaste.</small>
            <input
              type="text"
              id="paisUltimoViaje"
              name="paisUltimoViaje"
              value={formData.paisUltimoViaje}
              onChange={handleChange}
              className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="fechaUltimoViajeFuera" className="block text-gray-700 font-medium mb-1">
              Fecha
            </label>
            <small className="text-gray-500 mb-1">Selecciona la fecha del viaje.</small>
            <input
              type="month"
              id="fechaUltimoViajeFuera"
              name="fechaUltimoViajeFuera"
              value={formData.fechaUltimoViajeFuera}
              onChange={handleChange}
              className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="duracionUltimoViajeFuera" className="block text-gray-700 font-medium mb-1">
              Duración
            </label>
            <small className="text-gray-500 mb-1">Especifica la duración del viaje.</small>
            <input
              type="text"
              id="duracionUltimoViajeFuera"
              name="duracionUltimoViajeFuera"
              value={formData.duracionUltimoViajeFuera}
              onChange={handleChange}
              className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </>
      )}
    </div>
  );
}