import React, { Component } from 'react';
import './App.css';
import CardList from './Components/Card/CardList/CardList';
import 'tachyons';
import SearchBox from './Components/SearchBox/SearchBox';
import Scroll from './Components/Scroll/Scroll';

class App extends Component {
  state = {
    robots: [],
    searchFields: ''
  }

  componentDidMount() {
    // on component mount/load, populate the robots array using a fetch request
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
      // converts the response into json format
      // MAKE SURE TO RETURN THIS
      return response.json();
    })
    .then(users => {
      return this.setState({robots: users})
    })
    
  }

  onSearchChange = (event) =>{
    // this is how we update state
    this.setState({searchFields: event.target.value});
  }

  render() {
    // destructuring. instead of this.state.robots or this.state.searchFields, we can use robots or searchFields
    const {robots, searchFields} = this.state;
    // this is how we filter the robots and render which robots appear in the UI
    const filteredRobots = robots.filter(robot => {
      // return the robots whose name includes what is in the search box
      return robot.name.toLowerCase().includes(searchFields.toLowerCase());
    });

    // if robots.length doesn't exist or length is zero
    if (!robots.length) {
      return <h1 className="tc">Loading</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }


  }
}

export default App;
