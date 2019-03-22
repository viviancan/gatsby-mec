import React from "react";
import {
	FaSass,
	FaHtml5,
	FaReact,
	FaMobileAlt,
	FaRocket,
	FaOsi
} from "react-icons/fa";

import "./style.scss";
import Emoji from "./emoji";
import wall from "../images/wall.jpg";

const Midsection = () => (
	<div>
		<section className="section" id="midsection">
			<div className="container">
				<div className="columns is-multiline">
                    <div className="column is-one-third has-text-centered">
                        <figure className="image is-inline-block">
                            <img src={wall} />
                        </figure> 
					</div>

                    <div className="column is-one-third has-text-centered">
                        <figure className="image is-inline-block">
                            <img src={wall} />
                        </figure> 
					</div>

					<div className="column is-one-third has-text-centered">
                        <figure className="image is-inline-block">
                            <img src={wall} />
                        </figure> 
					</div>
				</div>
			</div>
		</section>
	</div>
);

export default Midsection;
