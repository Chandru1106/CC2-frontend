import React from 'react';
import './Pg1.css';
import { Link } from "react-router-dom" 

const App=() => {
  return (
    <>
      <div className="hd"></div>
       <center><div className="log">
    </div></center>
    <a><Link to="/Page2">
    <button className="button">Next</button>
    </Link>
    </a>
   </>

    
  )
}

export default App;