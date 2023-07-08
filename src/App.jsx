import { useState } from 'react'
import {Login} from "../src/Login/Login.jsx"
import {getPeople} from "../src/services/index.jsx"
import {People} from "../src/People/People.jsx"
import './App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [people, setPeople] = useState([]);

  const handleLogin = async (token) => {
    setLoggedIn(true);
    // Llamada al servicio de personas (pseudocódigo)
    const peopleData =  await getPeople(token); // Obtén la lista de personas desde el servicio
    setPeople(peopleData.data)
    console.log(peopleData.data)
    
  };


  return (
    
    <div>
      {loggedIn ? (
        <><Login /><People people={people} /></>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  )
}

export default App
