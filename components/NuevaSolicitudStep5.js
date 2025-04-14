export default function Step5({ formData, handleChange }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Encabezado */}
      <h2 className="text-xl font-bold text-gray-700 mt-6">🛂 VISADO</h2>

      {/* ¿Ha tenido visa americana anteriormente? */}
      <div className="flex flex-col">
        <label htmlFor="haTenidoVisa" className="block text-gray-700 font-medium mb-1">
          ¿Ha tenido visa americana anteriormente?
        </label>
        <small className="text-gray-500 mb-1">Selecciona si has tenido una visa americana.</small>
        <select
          id="haTenidoVisa"
          name="haTenidoVisa"
          value={formData.haTenidoVisa}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* Número de visa y fecha de expedición */}
      {formData.haTenidoVisa === "Sí" && (
        <>
          <div className="flex flex-col">
            <label htmlFor="numeroVisa" className="block text-gray-700 font-medium mb-1">
              Número de visa
            </label>
            <small className="text-gray-500 mb-1">Ingresa el número de tu visa anterior.</small>
            <input
              type="text"
              id="numeroVisa"
              name="numeroVisa"
              value={formData.numeroVisa}
              onChange={handleChange}
              className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="fechaExpedicionVisa" className="block text-gray-700 font-medium mb-1">
              Fecha de expedición
            </label>
            <small className="text-gray-500 mb-1">Selecciona la fecha de expedición de tu visa.</small>
            <input
              type="date"
              id="fechaExpedicionVisa"
              name="fechaExpedicionVisa"
              value={formData.fechaExpedicionVisa}
              onChange={handleChange}
              className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </>
      )}

      {/* ¿Le han robado o ha extraviado una visa? */}
      <div className="flex flex-col">
        <label htmlFor="haExtraviadoVisa" className="block text-gray-700 font-medium mb-1">
          ¿Le han robado o ha extraviado una visa?
        </label>
        <small className="text-gray-500 mb-1">Selecciona si has perdido o te han robado una visa.</small>
        <select
          id="haExtraviadoVisa"
          name="haExtraviadoVisa"
          value={formData.haExtraviadoVisa}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
      </div>

      {formData.haExtraviadoVisa === "Sí" && (
        <div className="flex flex-col">
          <label htmlFor="anioExtravioVisa" className="block text-gray-700 font-medium mb-1">
            Año
          </label>
          <small className="text-gray-500 mb-1">Ingresa el año en que perdiste o te robaron la visa.</small>
          <input
            type="text"
            id="anioExtravioVisa"
            name="anioExtravioVisa"
            value={formData.anioExtravioVisa}
            onChange={handleChange}
            className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {/* ¿Le han rechazado una visa / rehusado entrada / negado solicitud? */}
      <div className="flex flex-col">
        <label htmlFor="haRechazadoVisa" className="block text-gray-700 font-medium mb-1">
          ¿Le han rechazado una visa / rehusado entrada / negado solicitud?
        </label>
        <small className="text-gray-500 mb-1">Selecciona si te han rechazado una visa o entrada.</small>
        <select
          id="haRechazadoVisa"
          name="haRechazadoVisa"
          value={formData.haRechazadoVisa}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
      </div>

      {formData.haRechazadoVisa === "Sí" && (
        <div className="flex flex-col">
          <label htmlFor="explicacionRechazoVisa" className="block text-gray-700 font-medium mb-1">
            Explicación
          </label>
          <small className="text-gray-500 mb-1">Proporciona una explicación breve.</small>
          <textarea
            id="explicacionRechazoVisa"
            name="explicacionRechazoVisa"
            value={formData.explicacionRechazoVisa}
            onChange={handleChange}
            className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {/* ¿Le han cancelado o revocado una visa? */}
      <div className="flex flex-col">
        <label htmlFor="haCanceladoVisa" className="block text-gray-700 font-medium mb-1">
          ¿Le han cancelado o revocado una visa?
        </label>
        <small className="text-gray-500 mb-1">Selecciona si te han cancelado o revocado una visa.</small>
        <select
          id="haCanceladoVisa"
          name="haCanceladoVisa"
          value={formData.haCanceladoVisa}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
      </div>

      {formData.haCanceladoVisa === "Sí" && (
        <div className="flex flex-col">
          <label htmlFor="motivoCancelacionVisa" className="block text-gray-700 font-medium mb-1">
            Motivo
          </label>
          <small className="text-gray-500 mb-1">Proporciona el motivo de la cancelación o revocación.</small>
          <textarea
            id="motivoCancelacionVisa"
            name="motivoCancelacionVisa"
            value={formData.motivoCancelacionVisa}
            onChange={handleChange}
            className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {/* Tipo de visa solicitada */}
      <div className="flex flex-col">
        <label htmlFor="tipoVisaSolicitada" className="block text-gray-700 font-medium mb-1">
          Tipo de visa solicitada
        </label>
        <small className="text-gray-500 mb-1">Selecciona el tipo de visa que estás solicitando.</small>
        <select
          id="tipoVisaSolicitada"
          name="tipoVisaSolicitada"
          value={formData.tipoVisaSolicitada}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Turista">Turista</option>
          <option value="Turista-Negocios">Turista-Negocios</option>
          <option value="Estudiante">Estudiante</option>
          <option value="Otra">Otra</option>
        </select>
      </div>

      {/* ¿Le han tomado las 10 huellas dactilares? */}
      <div className="flex flex-col">
        <label htmlFor="huellasDactilares" className="block text-gray-700 font-medium mb-1">
          ¿Le han tomado las 10 huellas dactilares?
        </label>
        <small className="text-gray-500 mb-1">Selecciona si te han tomado las 10 huellas dactilares.</small>
        <select
          id="huellasDactilares"
          name="huellasDactilares"
          value={formData.huellasDactilares}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
      </div>
    </div>
  );
}