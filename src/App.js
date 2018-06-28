import React, {Component}from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from '/.Scroll'
class App extends Component{
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''
		}
	}
	 componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({robots:users}));
	}
	//componentDidMount(){
	//	fetch('https://jsonplaceholder.typicode.com/photos')
	//	.then(response=>response.json())
	//	.then(users=>this.setState({robots:users}));
	//}
	  onSearchChange=(event) =>{
  	this.setState({searchfield:event.target.value})
  }

    render(){
     const filtereRobots=this.state.robots.filter(robots=>{
  		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      });  	
         //	render(){
         //  	const filtereRobots=this.state.robots.filter(robots=>{
         //		return robots.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
         //
         //	});
	
	 if(this.state.robots.lenth===0){
		return <h1>Loding</h1>
	 }else{
		return (
		<div className='tc '>
		<h1 className='f1'>RoboFrieand</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		 <CardList robots={filtereRobots}/>
		</Scroll>
		</div>
		);
	 }
	
    }
}
export default App;