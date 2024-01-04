import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const AddInput = ({item,setItem,handleSubmit}) => {
  return (
    <form className='addForm'>
        <label>add item</label>
        <input
           autoFocus
           required
           type='text'
           value={item}
           onChange={(e)=>setItem(e.target.value
           )
           
            
           }
           placeholder='type item name'
        

            />
            <button
            type='submit'
            onClick={handleSubmit}
                     >
            <FaPlus/> 
            </button>
            
            

                
            
    </form>
  )
}

export default AddInput