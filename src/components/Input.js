import React from 'react'

import Select from 'react-select'
import makeAnimated from 'react-select/animated'
// import { colourOptions } from '../data';

const options = [
    { value: 'yogurtParfait', label: 'Yogurt Parfait' },
    { value: 'test1', label: 'Test Food' },
    { value: 'test2', label: 'Test Food 2' }
  ]
  
  const animatedComponents = makeAnimated();

  const Input = () => (
    <Select 
    closeMenuOnSelect={false}
    components={animatedComponents}
    isMulti={true}
    options={options} />
  )
  
  export default Input