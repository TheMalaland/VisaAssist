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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nombre */}
        <div className="flex flex-col">
          <label htmlFor="nombre" className="block text-gray-700 font-medium mb-1">
            Nombre
          </label>
          <small className="text-gray-500 mb-1">Ingresa tu nombre completo (solo letras, espacios y acentos).</small>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$"
            title="El nombre solo puede contener letras, espacios y acentos."
            maxLength="50"
            required
          />
        </div>

        {/* Código Postal */}
        <div className="flex flex-col">
          <label htmlFor="codigoPostal" className="block text-gray-700 font-medium mb-1">
            Código Postal
          </label>
          <small className="text-gray-500 mb-1">Ingresa tu código postal (solo números).</small>
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

        {/* Teléfono con selección de lada */}
        <div className="flex flex-col">
          <label htmlFor="telefonoCelular" className="block text-gray-700 font-medium mb-1">
            Teléfono Celular
          </label>
          <small className="text-gray-500 mb-1">Selecciona la lada de tu país e ingresa un número válido (10 dígitos).</small>
          <div className="flex items-center space-x-2">
            <select
              id="lada"
              name="lada"
              value={formData.lada}
              onChange={handleChange}
              className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Lada</option>
              <option value="+52">🇲🇽 +52</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+33">🇫🇷 +33</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
            <input
              type="tel"
              id="telefonoCelular"
              name="telefonoCelular"
              value={formData.telefonoCelular}
              onChange={handleChange}
              className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              pattern="^\d{10}$"
              title="El número de teléfono debe contener exactamente 10 dígitos."
              required
            />
          </div>
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

        <div className="flex flex-col">
          <label htmlFor="direccion" className="block text-gray-700 font-medium mb-1">
            Dirección
          </label>
          <small className="text-gray-500 mb-1">Ingresa tu dirección completa.</small>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="colonia" className="block text-gray-700 font-medium mb-1">
            Colonia
          </label>
          <small className="text-gray-500 mb-1">Ingresa tu colonia.</small>
          <input
            type="text"
            id="colonia"
            name="colonia"
            value={formData.colonia}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="ciudad" className="block text-gray-700 font-medium mb-1">
            Ciudad
          </label>
          <small className="text-gray-500 mb-1">Ingresa tu ciudad.</small>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="estado" className="block text-gray-700 font-medium mb-1">
            Provincia/Estado
          </label>
          <small className="text-gray-500 mb-1">Selecciona tu estado.</small>
          <select
            id="estado"
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            className="p-2 border rounded w-full"
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

        <div className="flex flex-col">
          <label htmlFor="telefonoOficina" className="block text-gray-700 font-medium mb-1">
            Teléfono Oficina
          </label>
          <small className="text-gray-500 mb-1">Ingresa un número de teléfono válido (10 dígitos).</small>
          <input
            type="tel"
            id="telefonoOficina"
            name="telefonoOficina"
            value={formData.telefonoOficina}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            pattern="^\d{10}$"
            title="El número de teléfono debe contener exactamente 10 dígitos."
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="telefonoCasa" className="block text-gray-700 font-medium mb-1">
            Teléfono Casa
          </label>
          <small className="text-gray-500 mb-1">Ingresa un número de teléfono válido (10 dígitos).</small>
          <input
            type="tel"
            id="telefonoCasa"
            name="telefonoCasa"
            value={formData.telefonoCasa}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            pattern="^\d{10}$"
            title="El número de teléfono debe contener exactamente 10 dígitos."
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="nacionalidad" className="block text-gray-700 font-medium mb-1">
            Nacionalidad
          </label>
          <small className="text-gray-500 mb-1">Ingresa tu nacionalidad.</small>
          <input
            type="text"
            id="nacionalidad"
            name="nacionalidad"
            value={formData.nacionalidad}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lugarNacimiento" className="block text-gray-700 font-medium mb-1">
            Lugar de Nacimiento
          </label>
          <small className="text-gray-500 mb-1">Ingresa tu lugar de nacimiento.</small>
          <input
            type="text"
            id="lugarNacimiento"
            name="lugarNacimiento"
            value={formData.lugarNacimiento}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="numPasaporte" className="block text-gray-700 font-medium mb-1">
            Núm. Pasaporte
          </label>
          <small className="text-gray-500 mb-1">Ingresa tu número de pasaporte (solo letras mayúsculas y números).</small>
          <input
            type="text"
            id="numPasaporte"
            name="numPasaporte"
            value={formData.numPasaporte}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            pattern="^[A-Z0-9]+$"
            title="El número de pasaporte solo puede contener letras mayúsculas y números."
            maxLength="20"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="curp" className="block text-gray-700 font-medium mb-1">
            CURP
          </label>
          <small className="text-gray-500 mb-1">Ingresa tu CURP (18 caracteres alfanuméricos en mayúsculas).</small>
          <input
            type="text"
            id="curp"
            name="curp"
            value={formData.curp}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            pattern="^[A-Z0-9]{18}$"
            title="El CURP debe contener exactamente 18 caracteres alfanuméricos en mayúsculas."
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="pasaporteExtraviado" className="block text-gray-700 font-medium mb-1">
            ¿Ha extraviado o le han robado algún pasaporte? (Número de pasaporte)
          </label>
          <small className="text-gray-500 mb-1">Ingresa el número de pasaporte si aplica.</small>
          <input
            type="text"
            id="pasaporteExtraviado"
            name="pasaporteExtraviado"
            value={formData.pasaporteExtraviado}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            pattern="^[A-Z0-9]+$"
            title="El número de pasaporte solo puede contener letras mayúsculas y números."
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="redSocial" className="block text-gray-700 font-medium mb-1">
            ¿Cuenta con alguna red social? (Indique cuál y usuario)
          </label>
          <small className="text-gray-500 mb-1">Especifica la red social y tu usuario.</small>
          <input
            type="text"
            id="redSocial"
            name="redSocial"
            value={formData.redSocial}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
        </div>
      </div>
    </div>
  );
}