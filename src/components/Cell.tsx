import React from 'react'
import '../styles/cell.css'
import { MdOutlineCircle } from "react-icons/md";
import { BsXSquareFill } from "react-icons/bs";

type typeId = {
  value: 'X' | 'O' | '';
  onclick: () => void;
}

function Cell({ value, onclick}: typeId) {

  return (
    <div className='Cell' onClick={onclick}>
      { value ? value === 'X' ? <BsXSquareFill size={40} color='#504cc5'/> : <MdOutlineCircle size={40} color='#fa5c87'/>:
      null}
    </div>
  )
}

export default Cell
