import './App.css';
import NavBar from './Components/NavBar';
import Headlines from './Views/Headlines';
import Sports from './Views/Sports';
import Weather from './Views/Weather';
import Footer from './Components/Footer';
import Activities from './Views/Activities';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
<Router>
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src="" className="App-logo" alt="logo" />
        <div>
         <br/>
          <p>Create a News Site</p>
          <p>Set up a Single Page Application (SPA) with react-router</p>
          <Headlines/>
          <Sports/>
          <Weather/>
          <Activities/>
        </div>
      </header>
      <Footer/>
    </div>
  );
}
</Router>
export default App;
