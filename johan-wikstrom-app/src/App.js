import './App.css';
import '../src/styles/Sidenav.css'
import '../src/styles/Footer.css'
import '../src/styles/Introduction.css'

import Sidenav from './components/Sidenav'
import Footer from './components/Footer'
import Introduction from './components/Introduction'


// Content from JSON-file

function App() {
  return (
    <div className="App-container">

      <Sidenav />
      <div className="App-div-tag-for-p">
        <p className="App-p-tag">
          P-TAG INSIDE APP
                    </p>
        <Introduction/>
      </div>
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