import React from 'react';
import { FaRegTrashAlt,FaRegCheckCircle} from "react-icons/fa";

import { useContext } from 'react';
import { myContext } from './createcontext';



const Content = () => {
    const {items,handelChech,handeldelete}= useContext(myContext)
                    
    return (
        <main>
            {items.length?
            <ul>
            {items.map((items)=>{
                        // console.log("pravin")
                        return(<li className='li-tiem' key={items.id}>
                            
                            <div>
                           
                            {items.checked?
                            <FaRegCheckCircle
                                role='button'
                                id='myIcon'
                                
                                
                                onClick={()=>handelChech(items.id)}
                                
                                 />:null}
                           
                            <input
                                
                                type='checkbox'
                                onChange={()=>handelChech(items.id)}
                                checked={items.checked} />
                            <label
                                className='itm-label'
                                onClick={()=>handelChech(items.id)}
                                style={items.checked?{textDecoration:'line-through'}:null}
                                
                            
                            >{items.item}</label>
                            </div>
                            {/* <button onClick={()=>handeldelete(items.id)}>
                               <FaRegTrashAlt/>
                            </button> */}
                                <FaRegTrashAlt 

                                    onClick={()=>handeldelete(items.id)}
                                    role='button'
                                    className='delbut'
                                                />

                                
                        </li>)
           

                        })}
             </ul>
          :<p className='empt-list'>your list is empty</p>}
            
        </main>
    );
};

export default Content;