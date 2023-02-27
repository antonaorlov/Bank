import React from 'react'

const Button = ({styles}) => {
  return (
    <button type="button" className={`py-4 px-6 mt-5
     bg-blue-gradient font-poppins font-medium text-[19px] 
     text-primary outline-none ${styles} rounded-[10px]`}>
      Get Started
    </button>
  )
}

export default Button