import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import TeamPage from './components/pages/TeamPage';
import ServicesPage from './components/pages/ServicesPage';
import ContactPage from './components/pages/ContactPage';
import TestimonialPage from './components/pages/TestimonialPage';
import Navbar from '../src/components/navigation/Navbar';
import Footer from '../src/components/footer/Footer';


function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={ HomePage } />
					<Route path='/about' exact component={ AboutPage } />
					<Route path='/team' exact component={ TeamPage } />
					<Route path='/services' exact component={ ServicesPage } />
					<Route path='/contact' exact component={ ContactPage } />
					<Route path='/testimonial' exact component={ TestimonialPage } />
				</Switch>
				<Footer />
			</Router>
		</>
	);
};

export default App;
