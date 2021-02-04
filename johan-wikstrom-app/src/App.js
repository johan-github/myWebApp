import './App.css';
import '../src/styles/Sidenav.css'
import '../src/styles/Footer.css'
import '../src/styles/Introduction.css'
import { useState } from 'react'

import Sidenav from './components/Sidenav'
import Footer from './components/Footer'
import Introduction from './components/Introduction'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from "./components/Skills";

function App() {

  const [currentPage, setCurrentPage] = useState('About');
  const page = currentPage === 'Introduction' ? <Introduction /> : <About/>;
  console.log("Current page:: " + currentPage);
  return (
    <div className="App-container">

      <Sidenav setCurrentPage={setCurrentPage} />
      {page}
      <Footer />

    </div> // KEEP AT BOTTOM AT ALL TIMES
  );
}

export default App;
// Comments:

// ...
// {...this.state} ------> ... will send all from whatever 'this.state' has.
// Good practice when sending data between components.

// Component VS Container
// Good practice to use Component as blueprint for UI and Container for logic-use.