import React, { Component } from 'react';
import './home.css';

class Home extends Component{
/*
	This needs to have:
		-Name, school, major
		-Resume link
		-GutHub link
		-Software engineer
		-current project
*/


	render(){
		return(
			<div className="pullDown">
				<div className="home-container"> 
					 <div className="personal-statement">
					 	<p>
					 		My name is Ryan Sproule and I am a Computer Science Major at Washington University
					 		in St. Louis. I have a passion for learning about new, cutting edge technologies and
					 		I love the challenge of diving into new projects and figuring things out on my own. I am
					 		currently seeking an internship in software engineering for the summer of 2018. I am driven 
					 		by the opportunity as a software engineer to, in some way, make a difference in 
					 		people's lives while doing stuff I find really cool.
					 	</p>
					 </div>
					 	
					 <div className="resume">
					 	<a href="https://rsproule.github.io/RyanSprouleResume-2017.pdf">
					 		My Resume 
					 		<img alt="Linkedin" src={require('./Social_Media_Icons/PNG/Square Black White/resume-icon.png')}/>
					 	</a>
					 </div>

				</div>	
			</div>
		)
	}
}

export default Home;