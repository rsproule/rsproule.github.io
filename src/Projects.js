import React, { Component } from 'react';
import './projects.css';
import './animations.css';

class Projects extends Component{

	/*
		Needs to contain:
			- all my projects obv
			- maybe a blog like info blurb about each if them
	*/

	render(){
		return(

			<div className="pullDown">
			<div className="projects-container">
				<div className="card">
					<div className="image">
						<img className="thumbnail" alt="thumbnail" src=
							"https://pbs.twimg.com/profile_images/760249570085314560/yCrkrbl3.jpg"/>
					</div>

					<div className="info">
						<a href="https://github.com/rsproule/WashUBubble"> Wash U Bubble </a>
						<br/><br/>
						<p>
						 Mobile app for Wash U students for class collaboration and networking.
						 Cross platform developed using Google's Flutter SDK.
						</p>
					</div> 
	
				</div>

				<div className="card">
					<div className="image">
						<img className="thumbnail" alt="thumbnail" src=
						"https://facebook.github.io/react/img/logo.svg"/>
					</div>

					<div className="info">
						<a href="https://github.com/rsproule/react-media-site"> React Media Site </a>
						<br/><br/>
						<p>
						 Media Sharing Site with well crafted UI for ultimate video, music, and picture viewing and sharing.
						</p>
					</div> 
				</div>

				<div className="card">
					<div className="image">
						<img className="thumbnail" alt="thumbnail" src=
							"http://www.racedepartment.com/images/rd_calext/calendar.png"/>
					</div>

					<div className="info">
						<a href="https://github.com/rsproule/JS_Calendar"> Javascript Calendar </a>
						<br/><br/>
						<p>
						 Calendar application built with mostly vanilla javascript and a little jquery for the frontend with PHP backend and 
						 a mySQL database.
						</p>
					</div> 
				</div>

				<div className="card">
					<div className="image">
						<img className="thumbnail" alt="thumbnail" src=
							"http://www.freepngimg.com/download/chat/1-2-chat-png-image.png"/>
					</div>

					<div className="info">
						<a href="unhooked"> NodeJs and Socket IO Chat App </a>
						<br/><br/>
						<p>
						 Chat room app with Socket IO real time updates built on a NodeJs server, primarily built in Javascript.
						</p>
					</div> 
				</div>


				<div className="card">
					<div className="image">
						<img className="thumbnail" alt="thumbnail" src=
							"http://www.freeiconspng.com/uploads/arduino-icon-2.png"/>
					</div>

					<div className="info">
						<a href="unhooked"> Arduino Fit Bit Clone </a>
						<br/><br/>
						<p>
						 Arduino with accelerometer and temperature sensor that tracks movement and temp data and passes it to a 
						 Java UI that plots accelerometer data and track 'steps'.
						</p>
					</div> 
				</div>

			</div>
			</div>
		)
	}
}

export default Projects;