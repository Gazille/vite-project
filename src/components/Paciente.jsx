const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("Deseas Eliminar a Este Paciente?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };
  return (
    <div className="m-3 bg-white px-5 py-10 rounded-xl">
      <p className=" uppercase text-indigo-700 font-bold mb-3">
        Nombre: <span className="normal-case font-normal">{nombre}</span>
      </p>
      <p className=" uppercase text-indigo-700 font-bold mb-3">
        Propietario:{" "}
        <span className="normal-case font-normal">{propietario} </span>
      </p>
      <p className=" uppercase text-indigo-700 font-bold mb-3">
        Email: <span className="normal-case font-normal">{email} </span>
      </p>
      <p className=" uppercase text-indigo-700 font-bold mb-3">
        Fecha Alta: <span className="normal-case font-normal">{fecha} </span>
      </p>
      <p className=" uppercase text-indigo-700 font-bold mb-3">
        Sintomas: <span className="normal-case font-normal">{sintomas}</span>
      </p>
      <div className=" flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 uppercase font-bold rounded-lg text-white"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 uppercase font-bold rounded-lg text-white"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
