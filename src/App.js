import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import $ from 'jquery';
import Customers from './Customers'



function App () {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
        
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/welcome" component={WelcomeParent} />
        <Route path="/customers" component={Customers} />
      </div>
    </Router>
  );
}


function Home() {
  return (<h1>Home!</h1>)
}


class WelcomeParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Foodstorm', counter:1};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(s => ({
      counter: s.counter+1
    }));
  }

  componentDidMount() {
    console.log('component did mount', document.getElementById('datepicker'));
    }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Welcome name="Foodstorm"/>
          <WelcomeFunctional name={'foodstorm '+this.state.counter} />
          <button onClick={this.handleClick}>Add</button>
          <input type="text" id="datepicker"/>

        </header>
      </div>
    );
  }

  
}


class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

function WelcomeFunctional (props)
{
  return (<h2>Welcome, {props.name} from a functional component</h2>)
}




export default App;
