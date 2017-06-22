import React, { Component } from 'react';
import './Header.css';
import prof from './rfsProf.png';

class Header extends Component{

	constructor(){
		super();
		this.state = {
			// currentPage : "Home"
		};
	}
	changePage(newPage) {
		this.setState({
			//currentPage : newPage
			}
		)

	}

	render(){
		return(
			<div className="header">
				<div className="my-name">
					Ryan Sproule
				</div>
				<div className="image-container">
					<img className="profile-image" alt="prof" src={prof}/>
				</div>



				<div className="navigation">
					<ul className="nav-tabs">
						<li className={this.state.currentPage === "Home" ? "selected":"not-selected"}> 
								<a href="#/" onClick={() => this.changePage('Home')}> Home    </a> </li>
						<li className={this.state.currentPage === "About" ? "selected":"not-selected"}> 
								<a href="#/about"  onClick={() => this.changePage('About')} > About   </a> </li> 
						<li className={this.state.currentPage === "Projects" ? "selected":"not-selected"}>
								<a href="#/projects" onClick={() => this.changePage('Projects')}> Projects</a> </li>
						<li className={this.state.currentPage === "Contact" ? "selected":"not-selected"}> 
								<a href="#/contact" onClick={() => this.changePage('Contact')}> Contact </a> </li>  
					</ul>
				</div>
				<hr className="divider"/>
			</div>
		)
	}
}

export default Header;
