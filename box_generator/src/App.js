import './App.css';
import Form from './components/Form';
import BoxDisplay from './components/BoxDisplay'
import {useState} from 'react'

function App() {

  const [boxState, setColorState] = useState([])

  const addBox = (color) => {
    setColorState([...boxState, color])
  }

  return (
    <div>
      <Form addBox={addBox}/>
      <BoxDisplay boxState={boxState}/>
      <br />
    </div>
  );
}

export default App;