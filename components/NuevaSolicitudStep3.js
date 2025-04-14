export default function Step3({ formData, handleChange }) {
  return (
    <div>
      <p className="text-gray-700">
        Verifica que toda la información ingresada sea correcta antes de enviar el formulario.
      </p>
      <pre className="bg-gray-100 p-4 rounded mt-4">{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
}