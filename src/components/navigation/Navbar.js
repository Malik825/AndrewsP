import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../navigation/Navbar.css';


function Navbar() {
	const [isNavExpanded, setIsNavExpanded] = useState(false)

	const closeMobileMenu = () => setIsNavExpanded(false);

	return (
		<>
			<nav className="navigation">
				<a href="/" className="nav-logo">
					Andy & Harri PLLC
				</a>

				<button
					className="icon-button"
					onClick={() => {
						setIsNavExpanded(!isNavExpanded)
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="white"
					>
						<path
							fillRule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
							clipRule="evenodd"
						/>
					</svg>
				</button>

				<div
					className={
						isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
					}
				>
					<ul>
						<li>
							<Link to="/about" onClick={closeMobileMenu} >About</Link>
						</li>

						<li>
							<Link to="/team" onClick={closeMobileMenu} >Team</Link>
						</li>

						<li>
							<Link to="/services" onClick={closeMobileMenu} >Services</Link>
						</li>

						<li>
							<Link to="/testimonial" onClick={closeMobileMenu} >Testimonial</Link>
						</li>

						<li>
							<Link to="/contact" onClick={closeMobileMenu} >Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}


export default Navbar;