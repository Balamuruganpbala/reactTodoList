 import React from 'react'
 import { FaTrashCan } from "react-icons/fa6";

const InsideComponent = ({handleCheckbox,handleDelete,item}) => {
  return (
    <li className="item" key={item.id}>

     <input type="checkbox" checked={item.checked}  onClick={()=>handleCheckbox(item.id)}/>
     <label  onDoubleClick={()=>handleCheckbox(item.id)} >{item.value}</label>
     <FaTrashCan  role="button"
     tabIndex={0}  onDoubleClick={()=>handleDelete(item.id)}/>

     </li>
  )
}

export default InsideComponent