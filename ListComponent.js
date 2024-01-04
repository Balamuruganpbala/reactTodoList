import React from 'react';

import InsideComponent from './InsideComponent';
const ListComponent = (
    {items,handleCheckbox,handleDelete}
) => {
  return (
     <ul>
    {items.map((item)=>{ return <InsideComponent 
                                    handleCheckbox={handleCheckbox}
                                    handleDelete={handleDelete}
                                    item={item}
                                    key={item.id}
                                    
                                    
                                    />
  }

  )}
    
     </ul>

  
  )
}

export default ListComponent