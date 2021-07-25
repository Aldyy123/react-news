import React from 'react';
import './styles/App.css';
import ListApp  from './views/ListApp'
import Detail  from './views/Detail'
import ReactNav from './Components/ReactNav';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component{
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <ReactNav/>
      </header>
      <div className="content">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ListApp}/>
            <Route exact path="/:id" component={Detail}/>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
    )
  }
}

export default App;
