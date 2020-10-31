import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detailvehicle = props => {
	const { store, actions } = useContext(Context);
	const { theid } = props.match.params;
	return (
		<div className="jumbotron">
			<img
				src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480x272/public/media/image/2017/11/halcon-milenario.jpg?itok=HtQ2p4m-"
				className="rounded float-left"
				alt="30px"
			/>

			<h1 className="display-4">{store.vehicles[props.match.params.theid].name}</h1>
			<hr className="my-4" />

			<p className="text">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
				industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book.
			</p>

			<div className="container">
				<div className="row">
					<div className="col-sm">Model</div>
					<div className="col-sm">Passengers</div>
					<div className="col-sm">Manufactured</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-sm">{store.vehicles[props.match.params.theid].model}</div>
					<div className="col-sm">{store.vehicles[props.match.params.theid].passengers}</div>
					<div className="col-sm">{store.vehicles[props.match.params.theid].manufactured}</div>
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

Detailvehicle.propTypes = {
	match: PropTypes.object
};
