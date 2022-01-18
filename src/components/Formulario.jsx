import { useEffect, useState } from "react";
import Error from "./Error";
import Paciente from "./Paciente";

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  const handleSumit = (e) => {
    e.preventDefault();

    //Validacion de Formulario

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("No se completaron todos los campos");
      setError(true);
      return;
    }
    setError(false);

    // Generar una id random

    const generarId = () => {
      const random = Math.random().toString(36).substring(2);
      const fecha = Date.now().toString(36);
      return fecha + random;
    };

    // Objeto paciente, almacenamiento

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      //Editando el registro
      objetoPaciente.id = paciente.id;
      const pacienteActualizado = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );
      setPacientes(pacienteActualizado);
      setPaciente({});
    }
    //Nuevo Registro
    else {
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  //Editar utilizando useEffect

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  return (
    <div className="md:w-1/2 lg:w-2/3 text-center">
      <h2 className="text-center font-black text-3xl">Seguimiento Pacientes</h2>
      <p className="mt-5 text-lg mb-5 text-center">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <div className="mb-5">
        <form
          onSubmit={handleSumit}
          className="bg-white shadow-md rounded-md px-5 py-10 mb-10"
        >
          {error && (
            <Error>
              <p>Todos los campos son obligatorios</p>
            </Error>
          )}
          <div>
            <label
              htmlFor="mascota"
              className="block font-bold uppercase text-gray-700"
            >
              Nombre Mascota
            </label>
            <input
              type="text"
              placeholder="Nombre de la Mascota"
              className="placeholder-gray-400 p-2 mt-2 w-full rounded-md border-2"
              id="mascota"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-5 mt-5">
            <label
              htmlFor="propietario"
              className="block font-bold uppercase text-gray-700"
            >
              Nombre del propietario
            </label>
            <input
              type="text"
              placeholder="Nombre del Propietario"
              className="placeholder-gray-400 p-2 mt-2 w-full rounded-md border-2"
              id="propietario"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />
          </div>
          <div className="mb-5 mt-5">
            <label
              htmlFor="email"
              className="block font-bold uppercase text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email del Propietario"
              className="placeholder-gray-400 p-2 mt-2 w-full rounded-md border-2"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5 mt-5">
            <label
              htmlFor="alta"
              className="block font-bold uppercase text-gray-700"
            >
              Alta
            </label>
            <input
              type="date"
              className="placeholder-gray-400 p-2 mt-2 w-full rounded-md border-2"
              id="alta"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className="mb-5 mt-5">
            <label
              htmlFor="sintomas"
              className="block font-bold uppercase text-gray-700"
            >
              sintomas
            </label>
            <textarea
              name="sintomas"
              id="sintomas"
              cols="30"
              rows="10"
              placeholder="Describe los Sintomas"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
              className="placeholder-gray-400 p-2 mt-2 w-full rounded-md border-2"
            >
              {" "}
            </textarea>
          </div>
          <input
            type="submit"
            className=" text-white bg-indigo-600 w-full hover:bg-indigo-700 uppercase font-bold cursor-pointer"
            value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          />
        </form>
      </div>
    </div>
  );
}

export default Formulario;
