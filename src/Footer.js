import React, { Component } from 'react';
import './footer.css';
import SocialMediaButtons from './SocialMediaButtons.js';


class Footer extends Component{

	render(){
		return(
			<div className="footer-container">
				<hr className="divider"/>

				<h3> Ryan Sproule © 2017 </h3>


				<div>  </div>

				<div className="contact-buttons">
					<SocialMediaButtons/>
				</div>
			</div>
		)
	}
}

export default Footer;