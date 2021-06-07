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
import LoginForm from './components/login-form';
import RegisterForm from './components/register-form';
import MemeGallery from './components/meme-gallery';
import Logout from './components/logout'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/login">
            <Header title="Log in with us here!" navIsHidden={true} />
            <LoginForm />
          </Route>
          <Route path="/register">
            <Header title="Register with us here!" navIsHidden={true} />
            <RegisterForm />
          </Route>
          <Route path="/home">
            <Header title="Game Club Official Website" />
            <Home />
          </Route>
          <Route path="/guides">
            <Header title="Game Club Archives" />
            <GuideListContainer />
          </Route>
          <Route path="/memes">
            <Header title="Meme Gallery" />
            <MemeGallery />
          </Route>
          <Route path="/about-us">
            <Header title="About Us" />
            <AboutMe />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
