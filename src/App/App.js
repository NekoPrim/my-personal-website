import React, { 
  useState, 
  useEffect 
} from 'react'
import {
  HashRouter as Router,
  Redirect,
  Route,
  Link
} from 'react-router-dom';

import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import './App.css';

function App() {

  const [width, setWindowWidth] = useState(0)
    useEffect(() => { 

    updateDimensions();

    window.addEventListener('resize', updateDimensions);
      return () => 
        window.removeEventListener('resize',updateDimensions);
    }, []);

    const updateDimensions = () => {
      const width = window.innerWidth
      setWindowWidth(width)
    }

  return (
    <div className="App">
      <Router>

        {/* navigate to about when website is first loaded */}
        <Redirect exact from="/" to="/about" />

        <nav>

          {/* navigate to about me component */}
          <Link 
            to="/about"
            className="link"
            style={{ 'textDecoration': 'none' }}
          >
            About
          </Link>

          {/* navigate to my portfolio */}
          <Link 
            to="/portfolio"
            className="link"
            style={{ 'textDecoration': 'none' }}
          >
            Portfolio
          </Link>

          {/* navigate to my linkedin and github */}
          <Link 
            to="/contact"
            className="link"
            style={{ 'textDecoration': 'none' }}
          >
            Contact
          </Link>

        </nav>

        {/* show summary about me */}
        <Route exact path="/about">
          <About />
        </Route>

        {/* show my best works */}
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>

        {/* show links to github and linkedin */}
        <Route exact path="/contact">
          <Contact />
        </Route>
          
      </Router>

      {/* who made this? Me! */}
      <Footer />
    </div>
  );
}

export default App;
