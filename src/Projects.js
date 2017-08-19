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

				<a href="https://github.com/rsproule/ugrub2">
				<div className="card">
					<div className="image">
						<img className="thumbnail" alt="thumbnail" src=
							"http://52.14.73.202/~rsproule/misc/ugrub_logo_black_back.png"/>
					</div>

					<div className="info">
						<a href="https://github.com/rsproule/UGrub"> <h2> U Grub </h2> </a>
						<p>
						 Mobile app for iOS and Android that can allow users to keep track of all the free Food
						 events on campus. Users can favorite certain events and receive notifications when the
						 events are happening. 
						</p>

						<div className="tags">
							<ul>
								<li>Flutter</li>
								<li>Dart</li>
								<li>Firebase</li>
								<li>Swift + Xcode </li>
								<li> Android Java </li>
							</ul>
						</div>
					</div> 
	
				</div>
				</a>
				<a href="https://github.com/rsproule/WashUBubble">
				<div className="card">
					<div className="image">
						<img className="thumbnail" alt="thumbnail" src=
							"https://pbs.twimg.com/profile_images/760249570085314560/yCrkrbl3.jpg"/>
					</div>

					<div className="info">
						<a href="https://github.com/rsproule/WashUBubble"> <h2> Wash U Bubble </h2> </a>
						<p>
						 Mobile app for Wash U students for class collaboration and networking.
						 Cross platform developed using Google's Flutter SDK.
						</p>

						<div className="tags">
							<ul>
								<li>Flutter</li>
								<li>Dart</li>
								<li>Firebase</li>
							</ul>
						</div>
					</div> 
	
				</div>
				</a>
				<a href="https://github.com/rsproule/react-media-site">
				<div className="card">
					<div className="image">
						<img className="thumbnail" alt="thumbnail" src=
						"https://facebook.github.io/react/img/logo.svg"/>
					</div>

					<div className="info">
						<a href="https://github.com/rsproule/react-media-site"> <h2> React Media Site </h2> </a>
						<p>
						 Media Sharing Site with well crafted UI for ultimate video, music, and picture viewing
						  and sharing.
						</p>

						<div className="tags">
							<ul>
								<li>ReactJS</li>
								<li>JavaScript</li>
								<li>Webpack</li>
								<li>HTML+CSS</li>
								<li>PHP</li>
								<li>MySQL</li>
							</ul>
						</div>
					</div> 
				</div>
				</a>

				<a href="https://github.com/rsproule/JS_Calendar"> 
				<div className="card">
					<div className="image">
						<img className="thumbnail" alt="thumbnail" src=
							"http://www.racedepartment.com/images/rd_calext/calendar.png"/>
					</div>

					<div className="info">
						<a href="https://github.com/rsproule/JS_Calendar"><h2> Javascript Calendar </h2></a>
						
						<p>
						 Calendar application built with mostly vanilla JavaScript and a little JQuery for the front-end with PHP back-end and 
						 a mySQL database served up on an Apache server.
						</p>

						<div className="tags">
							<ul>
								<li>JavaScript</li>
								<li>JQuery</li>
								<li>PHP</li>
								<li>HTML+CSS</li>
								<li>MySQL</li>
							</ul>
						</div>
					</div> 
				</div>
				</a>
				<div className="card">
					<div className="image">
						<img className="thumbnail" alt="thumbnail" src=
							"http://www.freepngimg.com/download/chat/1-2-chat-png-image.png"/>
					</div>

					<div className="info">
						<a href="unhooked"><h2> NodeJs and Socket IO Chat App </h2></a>
						
						<p>
							Chat room application with Socket IO real time updates built on a NodeJs
							server, primarily built in JavaScript.					
						 </p>

						<div className="tags">
							<ul>
								<li>JavaScript</li>
								<li>NodeJs</li>
								<li>Socket.io</li>
								<li>HTML+CSS</li>
							</ul>
						</div>
					</div> 
				</div>


				<div className="card">
					<div className="image">
						<img className="thumbnail" alt="thumbnail" src=
							"http://www.freeiconspng.com/uploads/arduino-icon-2.png"/>
					</div>

					<div className="info">
						<a href="unhooked"><h2> Arduino Fit Bit Clone </h2></a>
						<p>
						 Arduino with accelerometer and temperature sensor that tracks movement and temp data and passes it to a 
						 Java UI that plots accelerometer data and track 'steps'.
						</p>

						<div className="tags">
							<ul>
								<li>Arduino C</li>
								<li>Java</li>
							</ul>
						</div>

					</div> 
				</div>
				<div className="card">
					<div className="image">
						<img className="thumbnail" alt="thumbnail" src=
							"http://projects.gerryscuppatea.org/Icons/GerrysMandelbrotSet.png"/>
					</div>

					<div className="info">
						<a href="unhooked"><h2> Java Mandelbrot Set Visualizer </h2></a>
						<p>
						 Small project that plots the Mandelbrot set with color and allows infinite zoom. 
						</p>

						<div className="tags">
							<ul>
								<li>Java</li>
							</ul>
						</div>
					</div> 
				</div>

			</div>
			</div>
		)
	}
}

export default Projects;
