import {useState} from 'react';


const Counter = () => {
    const [counter,setCounter]=useState(0);

    const increement=()=>{
        setCounter(counter+1);
        console.log('increment');
    }
    const decreement=()=>{
       if(counter>0)
       {
        setCounter(counter-1);
       }
       else{
        setCounter(0);
       }
       console.log('decrement'
       );
    }
  return (
    <div style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center',gap:'2rem', background:'grey', color:'white', minHeight:'100vh', fontFamily:'cursive' }}>
      <h1>counter:{counter}</h1>
      <button style={{height:'40px',width:'200px', padding:'2px',background:'black', color:'white', borderRadius:'3px'}} onClick={increement}>
      increment
      </button>
      <button style={{height:'40px',width:'200px', padding:'2px',background:'black', color:'white', borderRadius:'3px'}} onClick={decreement}>
      decrement
      </button>
    </div>
  )
}

export default Counter
