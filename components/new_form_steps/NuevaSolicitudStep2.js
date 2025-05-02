export default function Step2({ formData, handleChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Estado Civil */}
      <div className="flex flex-col">
        <label htmlFor="estadoCivil" className="block text-gray-700 font-medium mb-1">
          Estado Civil
        </label>
        <small className="text-gray-500 mb-1">Selecciona tu estado civil.</small>
        <select
          id="estadoCivil"
          name="estadoCivil"
          value={formData.estadoCivil}
          onChange={handleChange}
          className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecciona tu estado civil</option>
          <option value="Soltero/a">Soltero/a</option>
          <option value="Casado/a">Casado/a</option>
          <option value="Divorciado/a">Divorciado/a</option>
          <option value="Viudo/a">Viudo/a</option>
          <option value="Unión Libre">Unión Libre</option>
        </select>
      </div>

      {/* Datos de la pareja (si aplica) */}
      {formData.estadoCivil === "Casado/a" || formData.estadoCivil === "Unión Libre" || formData.estadoCivil === "Viudo/a" ? (
        <>
          {/* Nombre completo de la pareja */}
          <div className="flex flex-col">
            <label htmlFor="nombrePareja" className="block text-gray-700 font-medium mb-1">
              Nombre Completo de la Pareja
            </label>
            <small className="text-gray-500 mb-1">Ingresa el nombre completo de tu pareja (solo letras, espacios y acentos).</small>
            <input
              type="text"
              id="nombrePareja"
              name="nombrePareja"
              value={formData.nombrePareja}
              onChange={handleChange}
              className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$"
              title="El nombre solo puede contener letras, espacios y acentos."
              maxLength="50"
              required={formData.estadoCivil !== "Viudo/a"}
            />
          </div>

          {/* Fecha de nacimiento de la pareja */}
          <div className="flex flex-col">
            <label htmlFor="fechaNacimientoPareja" className="block text-gray-700 font-medium mb-1">
              Fecha de Nacimiento de la Pareja
            </label>
            <small className="text-gray-500 mb-1">Selecciona la fecha de nacimiento de tu pareja.</small>
            <input
              type="date"
              id="fechaNacimientoPareja"
              name="fechaNacimientoPareja"
              value={formData.fechaNacimientoPareja}
              onChange={handleChange}
              className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required={formData.estadoCivil !== "Viudo/a"}
            />
          </div>

          {/* Lugar de nacimiento de la pareja */}
          <div className="flex flex-col">
            <label htmlFor="lugarNacimientoPareja" className="block text-gray-700 font-medium mb-1">
              Lugar de Nacimiento de la Pareja
            </label>
            <small className="text-gray-500 mb-1">Ingresa el lugar de nacimiento de tu pareja.</small>
            <input
              type="text"
              id="lugarNacimientoPareja"
              name="lugarNacimientoPareja"
              value={formData.lugarNacimientoPareja}
              onChange={handleChange}
              className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required={formData.estadoCivil !== "Viudo/a"}
            />
          </div>

          {/* Fecha y lugar del deceso (si ha fallecido) */}
          {formData.estadoCivil === "Viudo/a" && (
            <>
              <div className="flex flex-col">
                <label htmlFor="fechaDecesoPareja" className="block text-gray-700 font-medium mb-1">
                  Fecha del Deceso
                </label>
                <small className="text-gray-500 mb-1">Selecciona la fecha del deceso de tu pareja.</small>
                <input
                  type="date"
                  id="fechaDecesoPareja"
                  name="fechaDecesoPareja"
                  value={formData.fechaDecesoPareja}
                  onChange={handleChange}
                  className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="lugarDecesoPareja" className="block text-gray-700 font-medium mb-1">
                  Lugar del Deceso
                </label>
                <small className="text-gray-500 mb-1">Ingresa el lugar del deceso de tu pareja.</small>
                <input
                  type="text"
                  id="lugarDecesoPareja"
                  name="lugarDecesoPareja"
                  value={formData.lugarDecesoPareja}
                  onChange={handleChange}
                  className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </>
          )}
        </>
      ) : null}
    </div>
  );
}

