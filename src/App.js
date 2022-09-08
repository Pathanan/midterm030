import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import PageA from './components/PageA';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
         <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Portfolio} path="/portfolio" />
        </Switch>
        <Footer />
        </Router>
        
    </div>
  );
}

export default App;
