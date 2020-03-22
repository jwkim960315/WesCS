import React from 'react';
import { Link } from 'react-router-dom';

import FooterContainer from './FooterContainer.component.jsx';
import ContactUs from './ContactUs.component.jsx';


const Footer = () => (
	<FooterContainer>
		<div style={{ color: 'white' }}>LOGO</div>
		<ContactUs>
			<Link to="/" style={{ color: "white" }}>
				<i className="fab fa-facebook-square fa-3x"></i>
			</Link>
			<Link to="/" style={{ color: "white", marginLeft: '35px' }}>
				<i className="fas fa-envelope fa-3x"></i>
			</Link>
			
		</ContactUs>
	</FooterContainer>
);

export default Footer;