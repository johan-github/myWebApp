import './App.css';
import '../src/styles/Sidenav.css'
import '../src/styles/Footer.css'
import '../src/styles/Introduction.css'
import { useState, Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Sidenav from './components/Sidenav'
import Footer from './components/Footer'
import Introduction from './components/Introduction'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from "./components/Skills"
import Error from "./components/Error"

// const [currentPage, setCurrentPage] = useState('About');
// const page = currentPage === 'Introduction' ? <Introduction /> : <About/>;
// console.log("Current page:: " + currentPage);

function App() {
  return (
    <div className="App-container">

      <Sidenav/>
      
      <Switch>
        <Route path="/" component={Introduction} exact/>
        <Route path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/skills" component={Skills}/>
        <Route component={Error} />
      </Switch>

      <Footer />




    </div>
  );
}

export default App;
// Comments:

// ...
// {...this.state} ------> ... will send all from whatever 'this.state' has.
// Good practice when sending data between components.

// Component VS Container
// Good practice to use Component as blueprint for UI and Container for logic-use.