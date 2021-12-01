
import './App.css';

import React, {useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

const App=()=> {
  const page=6;
  const apikey=process.env.REACT_APP_NEWS_API;

const [progress, setProgress] = useState(0);



  
    return (
      <div>
        <Router>

        <LoadingBar
        color='#f79'
        progress={progress}
        height={5}
       
        />
        <Navbar/>
       
        
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apikey={apikey}   key="general" pageSize={page} country="in" category="general" /></Route>
          <Route exact path="/general"><News setProgress={setProgress} apikey={apikey}  key="general" pageSize={page} country="in" category="general" /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apikey={apikey}  key="sports" pageSize={page} country="in" category="sports" /></Route>
          <Route exact path="/business"> <News setProgress={setProgress} apikey={apikey}  key="business" pageSize={page} country="in" category="business" /></Route>
          <Route exact path="/entertainment"> <News setProgress={setProgress}  apikey={apikey} key="entertainment" pageSize={page} country="in" category="entertainment" /></Route>
          <Route exact path="/technology"> <News setProgress={setProgress} apikey={apikey}  key="technology" pageSize={page} country="in" category="technology" /></Route>
          <Route exact path="/health"> <News setProgress={setProgress}  apikey={apikey} key="health" pageSize={page} country="in" category="health" /></Route>
          <Route exact path="/science"> <News setProgress={setProgress} apikey={apikey}  key="science" pageSize={page} country="in" category="science" /></Route>
        </Switch>
        </Router>
      </div>
    )
  
}


 export default App;
