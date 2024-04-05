import { useState } from 'react'

import './App.css'
import Question from './Question';
import { Link,useNavigate } from 'react-router-dom';

function App() {
  const [name, setName] = useState('');
  const [roll,setRoll]=useState(null);
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate('/question', { state: { name, roll } });
    console.log(name," ",roll);
    
  }
  return (
    <>
 <form onSubmit={handleSubmit}>
 <label htmlFor="name">Enter Your Name:</label>
 <input type="text"  placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)} required/>
 <label htmlFor="name">Enter Your Roll:</label>
 <input type="number"  placeholder='Enter Your Roll/Id' onChange={(e)=>setRoll(e.target.value)} required/>
 
 <button type='submit'>submit</button>
 </form>
 
    </>
  )
}

export default App
