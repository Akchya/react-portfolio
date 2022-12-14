import React from 'react'
import './contact.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const validation = (props) => {
  return (
    <>
      <div className="valid__button">
        {props === "success" ? <BsPatchCheckFill/> : ''}
        <div className="message">{props === "success" ? 'Success' : ''}</div>
      </div>
    </>
  )
}

export default validation
