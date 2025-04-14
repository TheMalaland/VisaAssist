import { countries } from 'countries-list';

export default function Step1({ formData, handleChange }) {
    const countryList = Object.values(countries);
    const statesByCountry = {
    México: ['Yucatán', 'Quintana Roo', 'Ciudad de México'],
    'Estados Unidos': ['California', 'Texas', 'Nueva York'],
    Canadá: ['Ontario', 'Quebec', 'Columbia Británica'],
  };

  const citiesByState = {
    Yucatán: ['Mérida', 'Valladolid', 'Progreso'],
    Texas: ['Houston', 'Dallas', 'Austin'],
    Ontario: ['Toronto', 'Ottawa', 'Hamilton'],
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Tipo de Solicitud
        </label>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="tipoSolicitud"
              value="Primera Vez"
              checked={formData.tipoSolicitud === "Primera Vez"}
              onChange={handleChange}
              className="mr-2"
              required
            />
            PRIMERA VEZ
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="tipoSolicitud"
              value="Renovación"
              checked={formData.tipoSolicitud === "Renovación"}
              onChange={handleChange}
              className="mr-2"
              required
            />
            RENOVACIÓN
          </label>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-700 mt-6">👤 REFERENCIAS DEL SOLICITANTE</h2>

      {/* Datos en dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block text-gray-700 font-medium">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="direccion" className="block text-gray-700 font-medium">
            Dirección
          </label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="colonia" className="block text-gray-700 font-medium">
            Colonia
          </label>
          <input
            type="text"
            id="colonia"
            name="colonia"
            value={formData.colonia}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="codigoPostal" className="block text-gray-700 font-medium">
            Código Postal
          </label>
          <input
            type="text"
            id="codigoPostal"
            name="codigoPostal"
            value={formData.codigoPostal}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="pais" className="block text-gray-700 font-medium">
            País
          </label>
          <select
            id="pais"
            name="pais"
            value={formData.pais}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          >
            <option value="">Selecciona tu país</option>
            {countryList.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="estado" className="block text-gray-700 font-medium">
            Provincia/Estado
          </label>
          <select
            id="estado"
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          >
            <option value="">Selecciona tu estado</option>
            {(statesByCountry[formData.pais] || []).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="ciudad" className="block text-gray-700 font-medium">
            Ciudad
          </label>
          <select
            id="ciudad"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          >
            <option value="">Selecciona tu ciudad</option>
            {(citiesByState[formData.estado] || []).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="telefonoCelular" className="block text-gray-700 font-medium">
            Teléfono Celular
          </label>
          <input
            type="text"
            id="telefonoCelular"
            name="telefonoCelular"
            value={formData.telefonoCelular}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="correo" className="block text-gray-700 font-medium">
            Correo
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
      </div>

      {/* Campos adicionales en una sola columna */}
      <div>
        <label htmlFor="numPasaporte" className="block text-gray-700 font-medium">
          Núm. Pasaporte
        </label>
        <input
          type="text"
          id="numPasaporte"
          name="numPasaporte"
          value={formData.numPasaporte}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="curp" className="block text-gray-700 font-medium">
          CURP
        </label>
        <input
          type="text"
          id="curp"
          name="curp"
          value={formData.curp}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded"
        />
      </div>
      <div>
        <label htmlFor="pasaporteExtraviado" className="block text-gray-700 font-medium">
          ¿Ha extraviado o le han robado algún pasaporte? (Número de pasaporte)
        </label>
        <input
          type="text"
          id="pasaporteExtraviado"
          name="pasaporteExtraviado"
          value={formData.pasaporteExtraviado}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded"
        />
      </div>
      <div>
        <label htmlFor="redSocial" className="block text-gray-700 font-medium">
          ¿Cuenta con alguna red social? (Indique cuál y usuario)
        </label>
        <input
          type="text"
          id="redSocial"
          name="redSocial"
          value={formData.redSocial}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded"
        />
      </div>
    </div>
  );
}