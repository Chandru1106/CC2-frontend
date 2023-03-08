import "./App.css";
import "./Pg5.css"
import { Link } from "react-router-dom" 
const App = () => {
  return(
    <>
    <div className="bg">
    <center><div className="box3"><marquee>ADD ORPHANAGE DETAILS</marquee></div></center>
    <div className="allign">
  <a>
    <Link to="/Form1"><button className="rec1">Give Details</button></Link></a>
    <a><Link to="/Form2"><button className="rec2">Get Details</button></Link></a>
    <a><Link to="/Form3"><button className="rec3">Update Details</button></Link></a>
    <a><Link to="/Form4"><button className="rec4">Delete Details</button></Link></a>
    </div>
    </div>
    </>
  )
};
export default App;