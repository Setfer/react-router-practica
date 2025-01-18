import React from 'react'
import "./contact.css"
import { useParams } from 'react-router-dom'

const Contact = () => {
  const {name} = useParams()
  return (
    <div className='contact'><h1>Contact de {name}</h1></div>
  )
}

export default Contact