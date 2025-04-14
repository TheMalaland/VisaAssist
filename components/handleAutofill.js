const handleAutoFill = (isSamePerson) => {
  if (isSamePerson) {
    setFormData({
      ...formData,
      personaPagaViaje: formData.nombre, // Nombre del solicitante
      relacionSolicitante: "Yo mismo/a", // Relación predeterminada
      direccion: formData.direccion,
      colonia: formData.colonia,
      ciudad: formData.ciudad,
      estado: formData.estado,
      codigoPostal: formData.codigoPostal,
      correo: formData.correo,
      telefono: formData.telefono,
      mismaPersona: true,
    });
  } else {
    setFormData({
      ...formData,
      personaPagaViaje: "",
      relacionSolicitante: "",
      direccion: "",
      colonia: "",
      ciudad: "",
      estado: "",
      codigoPostal: "",
      correo: "",
      telefono: "",
      mismaPersona: false,
    });
  }
};