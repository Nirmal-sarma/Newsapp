
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

export default class App extends Component {
  page=6;
state={
  progress:10
}
  setProgress=(progress)=>{
this.setState({progress:progress})
  }

  render() {
    return (
      <div>
        <Router>

        <LoadingBar
        color='#f79'
        progress={this.state.progress}
        height={3}
       
      />
        <Navbar/>
       
        
        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress}   key="general" pageSize={this.page} country="in" category="general" /></Route>
          <Route exact path="/general"><News setProgress={this.setProgress}   key="general" pageSize={this.page} country="in" category="general" /></Route>
          <Route exact path="/sports"> <News setProgress={this.setProgress}   key="sports" pageSize={this.page} country="in" category="sports" /></Route>
          <Route exact path="/business"> <News setProgress={this.setProgress}   key="business" pageSize={this.page} country="in" category="business" /></Route>
          <Route exact path="/entertainment"> <News setProgress={this.setProgress}   key="entertainment" pageSize={this.page} country="in" category="entertainment" /></Route>
          <Route exact path="/technology"> <News setProgress={this.setProgress}   key="technology" pageSize={this.page} country="in" category="technology" /></Route>
          <Route exact path="/health"> <News setProgress={this.setProgress}   key="health" pageSize={this.page} country="in" category="health" /></Route>
          <Route exact path="/science"> <News setProgress={this.setProgress}   key="science" pageSize={this.page} country="in" category="science" /></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}


// export default App;
