import Paciente from "./Paciente"


const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mt-6">

      <h2 className="font-black text-3xl text-center">listado de pacientes</h2>
      <p className="text-xl mt-5 mt-10 text-center">Administra tus {""}
      <span className="text-indigo-600 font-bold">Pacientes y CItas</span>
      </p>
      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/>
     
    </div>
  )
}

export default ListadoPacientes
