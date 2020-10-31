import React, { useState, useEffect, useContext, Component } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Card = props => {
	const { store, actions } = useContext(Context);
	//console.log("props", props);
	return (
		<div className="card">
			<img
				src="https://www.latercera.com/resizer/q5EAu3hUK5EtCu-r2FdzQSnbzTo=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/MA5V6RXYEZCAXLJQBEZQHDOAXM.jpg"
				className="card-img-top"
				alt="20px"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.data.name}</h5>

				<p className="card-text">Gender : {props.data.gender}</p>
				<p className="card-text">Hair color :{props.data.hair_color}</p>
				<p className="card-text">Eyes color : {props.data.eye_color}</p>
				<Link to={"/detailcharacter/" + props.index} className="btn btn-dark">
					Conocer más
				</Link>

				<svg
					onClick={() => actions.addfavorito(props.data.name)}
					width="1em"
					height="1em"
					viewBox="0 0 16 16"
					className="bi bi-heart"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg">
					<path
						fillRule="evenodd"
						d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
					/>
				</svg>
			</div>
		</div>
	);
};

Card.propTypes = {
	data: PropTypes.object,
	index: PropTypes.number
};
export default Card;
