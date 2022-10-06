import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Navigation from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navigation />
        {/* <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/about" element={<About />}  />
            <Route path="/projects" element={<Projects />}  />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </Router> */}
      <Footer/>
    </div>
  );
}

export default App;
