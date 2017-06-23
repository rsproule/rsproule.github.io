import React, { Component } from 'react';
import './mediabuttons.css';




class SocialMediaButtons extends Component{

	render(){
		return(
			<div className="media-buttons">
				<ul>
					<li>
						<a href="https://github.com/rsproule">
							<img alt="github" src={require('./Social_Media_Icons/PNG/Circle_Black_White/Github.png')}/>
						</a>

					</li>

					<li>
						<a href="mailto:rsproule23@gmail.com">
							<img alt="email" src={require('./Social_Media_Icons/PNG/Circle_Black_White/gmail.png')}/>

						</a>

					</li>

					<li>
						<a href="https://www.linkedin.com/in/ryan-sproule-00990381/">
							<img alt="Linkedin" src={require('./Social_Media_Icons/PNG/Circle Color/Linkedin.png')}/>
						</a>

					</li>
	
					

				</ul>
			</div>
		)
	}
}

export default SocialMediaButtons;