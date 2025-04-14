export default function Step1({ formData, handleChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="nombre" className="block text-gray-700 font-medium">
          Nombre Completo
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
        <label htmlFor="correo" className="block text-gray-700 font-medium">
          Correo Electrónico
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
      <div>
        <label htmlFor="fechaNacimiento" className="block text-gray-700 font-medium">
          Fecha de Nacimiento
        </label>
        <input
          type="date"
          id="fechaNacimiento"
          name="fechaNacimiento"
          value={formData.fechaNacimiento}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="genero" className="block text-gray-700 font-medium">
          Género
        </label>
        <select
          id="genero"
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded"
          required
        >
          <option value="">Selecciona tu género</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
    </div>
  );
}