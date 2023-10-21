import Content from './Content';
import {useState } from 'react';
import AddItem from './AddItem';
import { myContext } from './createcontext';
import { useEffect } from 'react';


function App() {
  const [items,SetItem]= useState(JSON.parse(localStorage.getItem("todos"))||[]
    // [{id:1,
    // checked:false,
    // item:"create app"}]
   
  )

  useEffect(()=>{
    
    Setupdatetitem(items)
    },[items])



  const [Additem,SetAdditem]=useState('')
  const [updateitem,Setupdatetitem]=useState('')

  

    const AddingList =(item)=>{
      const id =items.length?items[items.length-1].id+1:1
      const addnewItem ={id,checked:false,item}
      const newitem =[...items,addnewItem]
      SetItem(newitem)
      localStorage.setItem("todos",JSON.stringify(newitem))
      

    }

    const handelChech=(id)=>{
        const listItems =items.map(itm=>itm.id===id?{...itm,checked:!itm.checked}:itm)
        SetItem(listItems)
        localStorage.setItem("todos",JSON.stringify(listItems))
     
    }

    const handeldelete=(id)=>{  
        const listdelete =items.filter(itm=>itm.id!==id)
        SetItem(listdelete)
        localStorage.setItem("todos",JSON.stringify(listdelete))
        
    }

        const viewall=(itm)=>{
        const viewall =itm
        Setupdatetitem(viewall)
      
    }

    const incomplete=(itm)=>{
      const incomplete =itm.filter((itt)=>((!itt.checked)))
      Setupdatetitem(incomplete)
      
    }
    const completed=(itm)=>{
      const compt =itm.filter((itt)=>((itt.checked)))
      Setupdatetitem(compt)
      
    }

    const activebuttoncl=(val)=>{
        const buttons= document.querySelectorAll(".btnFilter")
        buttons.forEach((btn)=>{
        btn.classList.remove('active') 
      })
      
      const crntBtn=document.getElementById(`bt${val}`)
      crntBtn.classList.add('active')

    }

    

    const handelSubmit=(p)=>{
      // p.preventDefault()
      if (!Additem) return
      AddingList(Additem)
      SetAdditem('')

    }

    
              
  return ( <>
    <div className='bg-img'>
      <div className="Enter-list">
        <h1 className='heading'>TODAY TASKS...</h1>
          <myContext.Provider value={{Additem, SetAdditem, handelSubmit }}>
            <AddItem
            />
          </myContext.Provider>
          </div>
            <div className="app-body">
              <div className="app-body2">
                <div className="App">
                  

                  <div className='myflex'>
                  <p className="total-task">Total task {items.length}, Completed task  {items.filter((itt)=>((itt.checked))).length}</p>
                  </div>
              
              
                <div className='myflex'>
                <button 
                  id='bt1' 
                  className="btnFilter active" 
                  onClick={
                    ()=>{
                      viewall(items);
                      activebuttoncl(1)
                    }
                  }
                > 
                  All 
                </button>
                
                <button 
                id='bt3' 
                className="btnFilter" 
                onClick={
                  ()=>{
                    incomplete(items);
                    activebuttoncl(3)
                  }
                }
                >Active</button>

                <button 
                id='bt2' 
                className="btnFilter" 
                onClick={
                  ()=>{
                    completed(items);
                    activebuttoncl(2)
                  }
                }
                >Completed</button>
    </div>
            
            
            
            <myContext.Provider value={{items:updateitem,handelChech, handeldelete }}>
              <Content  />
            </myContext.Provider>
          </div>
        



        </div>
      </div>
    </div>

    </>
  );
}

export default App;
