import {useEffect,useCallback,useState,useRef} from 'react'

import {  toast } from 'react-toastify';
function Password() {
    const [length,setLength]=useState(8);
    const [character,setAddCharacter]=useState(false);
    const [number,setAddNumber]=useState(false);
    const [password,setPassword]=useState('');
    const passwordCopy=useRef(null)
    const passwordClipboard=useCallback(()=>{
        passwordCopy.current?.select();
        window.navigator.clipboard.writeText(password);
        toast("copied successfully");
    },[password])
    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (number) {
            str += "0123456789";
        }
        if (character) {
            str += "!@#$%^&*()_+-~`<>:;'[]{}|";
        }
        for (let i = 0; i < length; i++) {
            let char_index = Math.floor(Math.random() * str.length);
            pass += str.charAt(char_index);
        }
    
        setPassword(pass);
        console.log(password);
    }, [length, character, number]);
    

useEffect(()=>{
passwordGenerator()
},[length,character,number,passwordGenerator])
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h3 className='text-white text-center my-3'>Password generator</h3>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input type="text" value={password}  readOnly className='outline-none w-full py-1 px-3' placeholder="password" ref={passwordCopy}/>
    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={passwordClipboard}>copy</button>
    </div>
    <div className='flex text-sm gap-x-2 '>
    <div className='flex items-center gap-x-1'>
    <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>setLength(e.target.value)} />
    <label >Length:{length}</label>
    
    </div>
    <div className='flex items-center gap-x-1'>
    <input type="checkbox" defaultChecked={number} id='numberInput' onChange={()=>{
        setAddNumber((prev)=>!prev)
    }} />
    <label >number</label>
    <input type="checkbox" defaultChecked={character} id='numberInput' onChange={()=>{
        setAddCharacter((prev)=>!prev)
    }} />
    <label >character</label>
    </div>
    </div>
    
    </div>

  )
}

export default Password