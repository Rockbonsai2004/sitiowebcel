import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Multas from './pages/Multas';
import RegistroMultas from './pages/RegistroMultas';
import RegistroPermisos from './pages/RegistroPermisos';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/multas" component={Multas} />
        <Route exact path="/registro-multas" component={RegistroMultas} />
        <Route exact path="/registro-permisos" component={RegistroPermisos} />
      </Switch>
    </Router>
  );
};

export default App;
