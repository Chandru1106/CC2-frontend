import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Page1}></Route>
        <Route exact path="/Page2" component={Page2}></Route>
        <Route exact path="/Page3" component={Page3}></Route>
        <Route exact path="/Page4" component={Page4}></Route>
        <Route exact path="/Page5" component={Page5}></Route>
        <Route exact path="/Form1" component={Form1}></Route>
        <Route exact path="/Form2" component={Form2}></Route>
        <Route exact path="/Form3" component={Form3}></Route>
        <Route exact path="/Form4" component={Form4}></Route>
      </Switch>
    </div>
    </Router>
  
  );
}

export default App;
