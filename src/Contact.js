import React, { Component } from 'react';
import './animations.css';
import './contact.css';

class Contact extends Component{


	/*
		Needs to have:
			-obvious contact info
			-linked in
			-email
			- 
	*/

	render(){
		return(
			<div className="pullDown">
				<div className="contact-info">
					<ul>

						<li>
						 	<a href="https://www.linkedin.com/in/ryan-sproule-00990381/">
						 	<img className="github" alt="linkedin" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1000px-LinkedIn_Logo.svg.png"/>
							</a>
						</li>


						<li>
							<a href="https://github.com/rsproule">
								<img className="github" alt="github" src="http://www.pragtech.co.in/images/partner_page/githup_partner.png"/>
							</a>
						</li>

						<li>
							<a href="mailto:rsproule23@gmail.com">
							<img alt="email" src={require("./Social_Media_Icons/PNG/Circle_Black_White/gmail.png")}/>
								<h2 className="email">rsproule23@gmail.com</h2>
							</a>
						</li>

						<li>
							<a href="mailto:rsproule@wustl.edu">
								<img alt="email" src="http://upe.wustl.edu/images/wustl.png"/>
								<h2 className="email">rsproule@wustl.edu</h2>
							</a>
						</li>



					</ul>
				</div>
			</div>
		)
	}
}

export default Contact;