import React from 'react'
  
const Searched = (
  {searchItem,setSearchItem}
) => {
  return (
   <form className='searchForm' onChange={(e)=>e.preventDefault()}>
    <label htmlFor="search">search</label>
    <input 
     type='text'
     autoFocus
     value={searchItem}
     onChange={(e)=>setSearchItem(e.target.value)}
      
    
    />
   </form>
  )
}

export default Searched