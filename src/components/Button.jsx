import React from 'react'

//const Button = ({ title, color, func}) => {}

  let myName="EMMIE"
const Button = ({title, color, func}) => {
  return (
    <button className={`btn ${color}`} onClick={()=>func(myName)}>
        {title}
    </button>
  )
}

export default Button