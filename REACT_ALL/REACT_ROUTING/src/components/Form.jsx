import React from 'react'
import { useEffect, useEffectEvent, useState } from 'react'

// AUTOSAVE 
function Form() {

  const [formData, setFormData] = useState({name:"", email:""});

  useEffect(() => {
    const interval = setInterval(() => {
       console.log(formData);
        
    },3000)

    return () => {
      clearInterval(interval)
    }
  },[])

  return (
    <div>
      <form>
        <input type="text" value={formData.name} onChange={e => setFormData({...formData, name:e.target.value})}/>
        <input type="text" value={formData.email} onChange={e => setFormData({...formData, email:e.target.value})}/>
      </form>
    </div>
  )
}

export default Form