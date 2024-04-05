import React, { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import InputBox from './components/InputBox';

const CurrencyConverter = () => {
    const [amount,setAmount] =useState(0);
    const [convertAmount,setConvertAmount] = useState(0);
    const [from,setForm]=useState('usd');
    const [to,setTo]=useState('bdt');
    const currencyInfo = useCurrencyInfo(from)

    const options = currencyInfo ? Object.keys(currencyInfo) : [];
    const convertedMoney=()=>{
        setConvertAmount(amount*currencyInfo[to]);
    }
    const swap=()=>{
        setAmount(convertAmount);
        setConvertAmount(amount);
        setForm(to);
        setTo(from);

    }
  return (
    
      <div className='flex flex-col w-full h-[100vh] gap-5 justify-center items-center mx-auto my-auto p-10'>
      <form onSubmit={(e)=>{
        e.preventDefault();
        convertedMoney(
        )
      }}>
     <div className='flex w-full justify-center text-xl'>
     <InputBox
     label={"From"}
     amount={amount}
     onAmountChange={(amount)=>setAmount(amount)}
     onCurrencyChange={(currency)=>setForm(currency)}
     selectCurrency='usd'
     currencyOptions={options}
     className='flex w-full flex-row'
     />
     
     </div>
      <button onClick={swap}> swap</button>
      <div className='flex w-full justify-center text-xl'>
      <InputBox
      label={"To"}
      amount={convertAmount}
      
      onCurrencyChange={(currency)=>setTo(currency)}
      selectCurrency='bdt'
      currencyOptions={options}
      amountDisable='true'
      />
      </div>
      <button type='submit'>usd to bdt </button>
      </form>
      </div>
    
  )
}

export default CurrencyConverter;
