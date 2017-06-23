import React, { Component } from 'react';
import './Header.css';
import prof from './rfsProf.png';


class Header extends Component{


	render(){
		return(
			<div className="header">
				
				<div className="image-container">
					<a href="#/"><img className="profile-image" alt="prof" src={prof}/></a>
				</div>

				<div className="my-name">
					Ryan Sproule
				</div>


				<div className="navigation">
					<ul className="nav-tabs">
						<li className="not-selected"> 
								<a href="#/"> Home    </a> </li>
						<li className="not-selected"> 
								<a href="#/about" > About   </a> </li> 
						<li className="not-selected">
								<a href="#/projects"> Projects</a> </li>
						<li className="not-selected"> 
								<a href="#/contact"> Contact </a> </li>  
					</ul>
				</div>
				<hr className="divider"/>
			</div>
		)
	}
}

export default Header;
