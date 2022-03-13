import React from 'react';
import Top from './components/top/Top';
import Home from './pages/home/Home';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Introduction from './pages/introduction/Introduction';
import Members from './pages/members/Members';
import Research from './pages/research/Research';
import Publication from './pages/publication/Publication';
import Contact from './pages/contact/Contact';

function App() {
  return (
     <div className="App">
       <Router>
         <Top/>
      
         <Switch>

           <Route exact path="/">
              <Home/>
           </Route>

           <Route path="/introduction"><Introduction/></Route>
           <Route path="/members"><Members/></Route>
           <Route path="/research"><Research/></Route>
           <Route path="/publication"><Publication/></Route>
           <Route path="/contact"><Contact/></Route>


         </Switch>
         <Footer/>
       </Router>

      

    
    </div>
  );
}

export default App;