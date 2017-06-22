import { HashRouter as Router, Route } from 'react-router-dom'; 
import React from 'react';
import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';

class Routes extends React.Component{

	render(){
		return(
			<div>
			<Router>
				<div>
				  	<Route exact path="/"      component={() => (<Home/>    )    }/>
				  	<Route path="/about"       component={() => (<About/>   )    }/>
				  	<Route path="/projects"    component={() => (<Projects/>)    }/>
				  	<Route path="/contact"     component={() => (<Contact/> )    }/>
				</div>
			</Router>
			</div>
		)
	}
}

export default Routes;