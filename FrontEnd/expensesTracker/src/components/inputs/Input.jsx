import { useState } from 'react';
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa'



const Input = ({value, placeholder, type, label, onChange}) => {
const [showPassword,setShowPassword] =useState(false) ;

    const toggleShowPasswpord =() => {
        setShowPassword(!showPassword)
    };
  return (
    <div className=''>
  <label className='text-[13px] text-slate-800'>{label}</label>
  <div className='input-box'>
      <input 
      type ={type == 'password' ? showPassword ? 'text' : 'password' : type} className='w-full bg-transparent outline-none ' value={value} placeholder={placeholder} onChange={(e)=>onChange(e)}/>

        {type ==='password' && (
            <>
            {showPassword ? (
                <FaRegEye 
                size={22}
                className='text-primary cursor-pointer'
                onClick={()=>toggleShowPasswpord()}/>):(
                <FaRegEyeSlash
                size={22} 
                className='text-slate-400 cursor-pointer flex' 
                onClick={(e)=>toggleShowPasswpord()}/>
                )}
            </>
        )
    }
  </div>
  </div>
)
}

export default Input