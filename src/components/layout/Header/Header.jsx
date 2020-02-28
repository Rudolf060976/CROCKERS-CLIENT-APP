import React from 'react';
import './Header.scss';
import Logo from '../../../assets/images/Logo.png';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className="masthead">
			<div className="masthead-address-line">
				<p>8588 NW 56th ST Doral, FL</p>
			</div>
			<div className="masthead-body">
				<figure className="header-logo-container">
					<img className="header-logo" src={Logo} alt="logo" />
				</figure>
				<nav className="main-nav">
					<ul>
						<li><Link to="/">LOCATION & HOURS</Link></li>
						<li><Link to="/menu">MENU</Link></li>
						<li><Link to="/">CONTACT</Link></li>
						<li><Link to="/">ORDER NOW</Link></li>
						<li><Link to="/">RESERVATIONS</Link></li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
