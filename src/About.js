import React, { Component } from 'react';
import './about.css';
import './animations.css';


class About extends Component{

	/*
		Needs to contain:
			-quick info about me
			-interests hobbies(soccer/sports)
			-basically the info from the previous site
	*/

	render(){

		return(
			<div className="pullDown">
			<div className="about-container"> 
				<h2> Who am I? </h2>
				<p> 
						I am a computer science student who has a passion for building and learning about cool software. 
					I formally got into software development when I was a Freshman at Washington University in St. Louis but 
					my enthusiasm for working with computers goes all the way back to when I was a kid. Around my house,
					I have become a de facto computer repair/assitance man for any and all tech problems that arise
					with my parents or siblings. As the result of this and my general curiosity towards technology I have been
					able to teach myself a good bit about computer hardware and software.
				</p>
				<br/>
				<p>
						In addition to developing software, I have grown up playing sports and have remained very active.
					Throughout high school I played baseball, basketball, and soccer while juggling a demanding academic curriculum.
					This taught me early on how to prioritize my activities and manage my time wisely. This has carried on to my 
					college experience where I play on the varsity soccer team and remain a Dean's List student.



				</p>
				<br/>

				<h2> Education </h2>
				<ul>
					<li> BS Computer Science, Washington University in St. Louis (2019) </li>
					<li> Pittsburgh Central Catholic High School (2015) </li>
				</ul>

				<br/>

				<h2> Skills </h2>

				<h3> General Development </h3>

				<ul>
					<li> Java </li>
					<li> Python </li>
					<li> Dart </li>
					<li> C </li>
					<li> Arduino </li>
					<li> Swift/Xcode </li>
					<li> Flutter </li>
					<li> Amazon Web Services </li>
					<li> Linux </li>
				</ul>

				<h3> Front-End Development </h3>

				<ul>
					<li> HTML </li>
					<li> CSS + Frameworks (Bootstrap) </li>
					<li> JavaScript </li>
					<li> ReactJS </li>
					<li> AngularJS </li>
					
				</ul>

				<h3> Back-End Development </h3>

				<ul>

					<li> PHP </li>
					<li> MySQL </li>
					<li> JavaScript </li>
					<li> Firebase </li>
					<li> Socket.io </li>
					<li> Node.js </li>
					<li> Webpack </li>
					
				</ul>


			</div>	
			</div>
		)
	}
}

export default About;