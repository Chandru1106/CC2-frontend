import axios from 'axios';
import './Frm.css'
import { useState, } from 'react';
function Del() {
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.delete('http://127.0.0.1:8080/deletedet1/'+search)
            .then( document.getElementById("dels").innerHTML = "deleted")
            .catch(err=>console.log(err))
        }
    }
  return (
    <>
    {/* <div className="im">

        </div>
        <div className="header">
            <div className="row1">
           
            </div>
            <div className="row2">
                <h2 id="dels">Delete Book</h2>
                <div className="search" >
                    <input type="text" placeholder="enter"  value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                   
                    
                </div>
                
                 
            </div>
        </div> */}
        <div className="ig"></div>
        <div className='container'>
            
            <h1><center>Delete Your Details</center></h1>
            
            <div className='row'>
                <label>Enter ID:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</label>
                <input type="text" id='aid' placeholder='Enter ID' value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
            </div>
            
            <div className='row'>
                <button className="bon">Delete</button>
            </div>
 
  
        </div>
        </>
  )
}
export default Del