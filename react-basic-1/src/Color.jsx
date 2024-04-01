import React, { useState } from 'react';

const Color = () => {
    const colors = ['red', 'green', 'blue', 'olive', 'gray', 'pink', 'yellow', 'purple', 'lavender', 'white', 'black'];
    const [color, setColor] = useState('black');
    
    const submitColor = (selectedColor) => {
        setColor(selectedColor);
        console.log('clicked');
        console.log(selectedColor);
        console.log(color);
    }
    
    return (
        <div className=' h-screen w-screen flex' style={{backgroundColor:color}}>
            <div className='fixed   px-4 z-10 bottom-12 inset-x-0 overflow-x-auto flex bg-white m-auto justify-center items-center'>
                {colors.map((col, i) => (
                    <button key={i} onClick={() => submitColor(col)} className=' w-20 h-10 rounded-xl m-1 flex p-2 text-white outline-none shadow-lg' style={{backgroundColor:col}}>{col}</button>
                ))}
            </div>
        </div>
    );
}

export default Color;
