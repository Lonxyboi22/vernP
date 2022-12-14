import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Navigation from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Works from './components/pages/Works'
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/works" element={<Works />}  />
            {/* <Route path="/projects" element={<Projects />}  /> */}
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
