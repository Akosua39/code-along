import React, { useState } from 'react'

const useLocalStorage = (key, initalValue) => {
    const [value, setvalue] = useState(() => {

  if (typeof window === undefined) {
      return initalValue
  }
      
        try {
          const data = window.localStorage.getItem(key); 
          return data? JSON.parse(data) : initalValue
        } catch (error) {
            console.log(error);
            return initalValue;
        }
    
  })

  const setLocalStorage = (value) => {
      try {
          setvalue(value);

          if (typeof window !== undefined) {
              window.localStorage.setItem(key, JSON.stringify(value));
          }
      } catch (error) {
          console.log(error)
          
      }
    }
  
  return[value, setLocalStorage]
}

export default useLocalStorage