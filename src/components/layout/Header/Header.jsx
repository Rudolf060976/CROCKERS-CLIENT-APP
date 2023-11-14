import React, { useState } from 'react';
import './Header.scss';
import Logo from '../../../assets/images/Logo.png';
import { Link } from 'react-router-dom';

function Header() {

	const [open, setOpen] = useState(false);


	const handleMenuClick = (e) => {

		setOpen(!open);

	};



	return (
		<header className="masthead">
			<div className="masthead-address-line">
				<p>8588 NW 56th ST Doral, FL</p>
			</div>
			<div className="masthead-body">
				<figure className="header-logo-container">
					<Link to="/"><img className="header-logo" src={Logo} alt="logo" /></Link>
				</figure>
				<div className={open ? "main-nav-mobile-btn menu-open" : "main-nav-mobile-btn"} onClick={handleMenuClick} >
					<div className="main-nav-mobile-btn-bar"></div>
				</div>
				<nav className={open ? "main-nav menu-open" : "main-nav"}>
					<ul>
						<li><Link to="/">HOME</Link></li>
						<li><Link to="/location">LOCATION & HOURS</Link></li>
						<li><Link to="/menu">MENU</Link></li>
						<li><Link to="/">CONTACT</Link></li>
						<li><Link to="/delivery">ORDER NOW</Link></li>
						<li><Link to="/">RESERVATIONS</Link></li>
					</ul>
				</nav>
				<div className={open ? "main-nav-mobile-bkg menu-open" : "main-nav-mobile-bkg"}></div>
			</div>
		</header>
	);
}

export default Header;
