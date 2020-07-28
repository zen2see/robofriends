import React, { Component } from 'react';  
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from '../components/ErrorBoundry'; 
import Header from '../components/Header';
import '../containers/MainPage.css';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = robots => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase()); 
    })
  }
  render() {
    const { onSearchChange, robots, isPending } = this.props; 
    return isPending ? <h1>Loading...</h1> :
    (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry> 
            <CardList robots={this.filterRobots()}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

 export default MainPage;    