import './App.css';
import './Sidenav.css'
import './Footer.css'

import Sidenav from './components/Sidenav'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App-container">
                
                <Sidenav/>

                <p className="p-inside-App">
                    P-TAG INSIDE APP
                </p>

                <Footer/>

        </div>
    );
}

console.log("Hello from APP.js");

export default App;
