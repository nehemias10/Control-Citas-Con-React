import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import './App.css'


function App() {
  
const [pacientes, setPacientes] = useState([]);

  return (
   
      <div className="container mx-auto mt-20">
        <Header
      

        />


        <div className='mt-12 md:flex'>
        <Formulario
        setPacientes={setPacientes}
        />
        <ListadoPacientes/>
        </div>
       
      </div>
      
   
  )
}

export default App
