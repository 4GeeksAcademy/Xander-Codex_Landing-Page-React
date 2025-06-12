import React from "react";
import Card from './Card.jsx';
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container mb-4">
				<div className="row">
					<div className="col">
						<Jumbotron />
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-lg-3">
						<Card />
					</div>
					<div className="col-md-4 col-lg-3">
						<Card />
					</div>
					<div className="col-md-4 col-lg-3">
						<Card />
					</div>
					<div className="col-md-4 col-lg-3">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;