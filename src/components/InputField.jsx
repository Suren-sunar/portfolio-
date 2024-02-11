import React from 'react'
import { FormControl, FormLabel } from 'react-bootstrap';

const InputField = ({name , placeholder, text}) => {
  return (
    <>
      <div>
        <FormLabel htmlFor={name}>{name}</FormLabel>
        <FormControl
        type={text} 
        name={name} 
        id={name} 
        placeholder={placeholder}
        />
      </div>
    </>
  )
}

export default InputField;
