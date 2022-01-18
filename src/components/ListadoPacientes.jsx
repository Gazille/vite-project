import React from "react";
import Paciente from "./Paciente";

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 text-center ">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="text-center font-black text-3xl">Listado Pacientes</h2>
          <p className="mt-5 text-lg mb-5 text-center">
            Administra tus {""}{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>{" "}
          </p>
          {pacientes.map((e) => (
            <Paciente
              key={e.id}
              paciente={e}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="text-center font-black text-3xl">No Hay Pacientes</h2>
          <p className="mt-5 text-lg mb-5 text-center">
            Comienza Agregando Pacientes {""}{" "}
            <span className="text-indigo-600 font-bold">
              Y Apareceran En Este Lugar
            </span>{" "}
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;
