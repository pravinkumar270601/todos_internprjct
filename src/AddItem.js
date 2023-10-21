import React, { useState } from 'react';
import { useRef } from 'react';

import { useContext } from 'react';
import { myContext } from './createcontext';
import {FaTimesCircle} from "react-icons/fa";

const AddItem = () => {
    const inputRef= useRef()
    const {handelSubmit,Additem,SetAdditem}= useContext(myContext)
    const [chng ,setchnge]=useState(false)
    return (
       <form onSubmit={handelSubmit}>
        <div className="add-list">
            
            <div className='chng-bg'>
            {chng? <FaTimesCircle
                                
                        
                                className='x-mark'
                                
                                 />:null}
           


            <input
                className=''
                type='checkbox'
                checked={chng?true:false}

                                
                                 />
            </div>
            
            <input
                className='addlist-input'
                placeholder='Create a new task'  
                required  
                value={Additem}
                onChange={(e)=>{SetAdditem(e.target.value);setchnge(e.target.value)}}
                ref={inputRef}
                
            />
            {/* <button
                className='add-button-out'
                type='submit'
                onClick={()=>inputRef.current.focus()}
            > </button> */}
          </div>
       </form>
    );
};

export default AddItem;