import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detailplanet = props => {
	const { store, actions } = useContext(Context);
	const { theid } = props.match.params;
	return (
		<div className="jumbotron">
			<img
				src="https://live.mrf.io/statics/i/ps/lasillarotarm.blob.core.windows.net/images/2017/12/20/tierra-focus-0-0-983-557.jpg"
				className="rounded float-left"
				alt="30px"
			/>

			<h1 className="display-4">{store.planets[props.match.params.theid].name}</h1>
			<hr className="my-4" />

			<p className="text">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
				industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book.
			</p>

			<div className="container">
				<div className="row">
					<div className="col-sm">Population</div>
					<div className="col-sm">Terrain</div>
					<div className="col-sm">Climate</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-sm">{store.planets[props.match.params.theid].population}</div>
					<div className="col-sm">{store.planets[props.match.params.theid].terrain}</div>
					<div className="col-sm">{store.planets[props.match.params.theid].climate}</div>
				</div>
			</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Detailplanet.propTypes = {
	match: PropTypes.object
};
