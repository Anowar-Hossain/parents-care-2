import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Header from './Component/Header/Header';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import SignUp from './Pages/SignUp/SignUp';
import Details from './Pages/Details/Details';
import Authprovider from './contexts/Authprovider';
import PrivetRoute from './Pages/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <Authprovider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/contact us">
            <Contact></Contact>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/signup">
          <SignUp></SignUp>
          </Route>
          <PrivetRoute path="/details/:detailsId">
            <Details></Details>
          </PrivetRoute>
          <Route path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </Authprovider>
    </div>
  );
}

export default App;
