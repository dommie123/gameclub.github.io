import logo from './logo.svg';
import './App.css';
import {Route, Router, Redirect, BrowserRouter} from 'react-router-dom';
import Header from './components/header';
import AboutMe from './components/about-us';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/">
          <Header title="Everything works great so far!" />
          <Footer />
        </Route>
        <Route path="/login">

        </Route>
        <Route path="/home">

        </Route>
        <Route path="/about-us">
          <Header title="About Us" />
          <AboutMe />
        </Route>
        <Route path="/logout">

        </Route>
      </div>
    </BrowserRouter>

  );
}

export default App;
