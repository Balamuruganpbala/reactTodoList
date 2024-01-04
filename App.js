

import Header from './Header';
import Footer from './Footer';
import { useState } from "react";
import Main from './Main';
import './index.css';
import AddInput from './AddInput';
import Searched from './Searched';

function App() {
  const[items,setItems]=useState(JSON.parse(localStorage.getItem("bala")))

       const handleCheckbox=(id)=>{
           var box=items.map((item)=>
             item.id===id?{...item,checked:!item.checked}:item
          
           
        

          )
          setItems(box)
          localStorage.setItem("bala",JSON.stringify(box))
          

       } 
       const handleDelete=(id)=>{
          var box=items.filter((item)=>
            (  item.id!=id )
               

         )
         setItems(box)
         localStorage.setItem("bala",JSON.stringify(box))

      }
      const addItem=(value)=>{
        const id=items.length?items[items.length-1].id+1:1
        const ob={id,checked:false,value}
        const listItem=[...items,ob]
        setItems(listItem)
        localStorage.setItem("bala",JSON.stringify(listItem))

      }
    
      const [item,setItem]=useState('')
      const handleSubmit=(e)=>{
        e.preventDefault();
        setItem(" ")
        addItem(item)
      
          
      }
      const [searchItem,setSearchItem]=useState('')
      
 
  return ( 
    <div>
    <Header />
    <AddInput 
            item={item}
            setItem={setItem}
            handleSubmit={handleSubmit} />
   <Searched
            searchItem={searchItem}
            setSearchItem={setSearchItem}
                     
                     />         
          
     <Main items={items.filter(item=>(item.value).toLowerCase().includes(searchItem.toLowerCase()))}
            handleCheckbox={handleCheckbox}
            handleDelete={handleDelete} 

          
            />
    <Footer/>
    </div>
   

  )}

export default App;
