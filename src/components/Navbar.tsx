import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiRocket } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import classes from './Navbar.module.scss';

function Navbar() {
	const [ visibleNavbar, setVisibleNavbar ] = useState(false);

	const showNavbarUsingState = () => {
		setVisibleNavbar(!visibleNavbar);
	};

	const realNavbar = visibleNavbar ? classes.responsive_nav : '';

	return (
		<header className={classes.header}>
			<GiRocket />
			<nav className={realNavbar}>
				<Link to="/">Main</Link>

				<Link to="/about" className={classes.about_link}>
					About
				</Link>
				<button className={classes.close_btn} onClick={showNavbarUsingState}>
					<FaTimes />
				</button>
			</nav>
			<button className={classes.open_btn} onClick={showNavbarUsingState}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
