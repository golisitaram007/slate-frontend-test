import React                              from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CreateIncident }                 from './pages/CreateIncident'
import Home                               from './pages/Home'
import { Header }                         from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Alert from './components/Alert';

function App () {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="container pt-4">
          <Route exact path="/" component={ Home }/>
          <Route path="/create" component={ CreateIncident }/>
        </div>
        <Alert />
      </div>
    </Router>
  )
}

export default App
