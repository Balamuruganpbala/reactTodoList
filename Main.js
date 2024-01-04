import React from 'react'

import ListComponent from './ListComponent';



const Main=({items,handleCheckbox,handleDelete})=>{
     

     return( 
      <main>
     { (items.length)?(
           <ListComponent
           items={items}
           handleCheckbox={handleCheckbox}
           handleDelete={handleDelete}
           
           />
     )
         :
         (<p>
            contain empty
            </p>)
        
          
         }</main>
           
         
     )
    
     }
export default Main;