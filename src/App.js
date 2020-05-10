import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import MemberPage from './components/MemberPage';
import NotFound from './components/NotFound';

class App extends React.Component {
  state = {
    squad: [],
    index: 0,
    member: this.state.squad[this.state.index]
  }

  componentDidMount(){
    fetch("http://localhost:3001/members")
    .then(resp => resp.json())
    .then(members => this.setState({squad: members}))
  }

  handleNavClick = (e) => {
    this.setState({index: e.target.member.id - 1})
  }

  render(){
    return (
      <div className="App">
        <Nav squad={this.state.squad} handleNavClick={this.handleNavClick}/>
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route path = '/:name' render={routerProps => <MemberPage {...routerProps} member={this.state.member}/>} />
          <Route component = {NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
