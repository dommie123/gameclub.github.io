import logo from './logo.svg';
import './App.css';
import {Route, Router, Redirect, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Header from './components/header';
import Footer from './components/footer';
import AboutMe from './components/about-us';
import Home from './components/home';
import {store} from './store';
import GuideListContainer from './components/guide-list-container';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route path="/">
            
          </Route>
          <Route path="/login">

          </Route>
          <Route path="/home">
            <Header title="Game Club Official Website" />
            <Home />
          </Route>
          <Route path="/guides">
            <Header title="Game Club Archives" />
            <GuideListContainer />
          </Route>
          <Route path="/about-us">
            <Header title="About Us" />
            <AboutMe />
          </Route>
          <Route path="/logout">

          </Route>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
