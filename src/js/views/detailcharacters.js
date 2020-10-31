import React, { useState, useEffect, useContext, Component } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Detailcharacter = props => {
	const { store, actions } = useContext(Context);
	const { theid } = props.match.params;
	return (
		<div className="jumbotron">
			<img
				src="https://i.blogs.es/69fdcc/star-wars-saga/450_1000.jpg"
				className="rounded float-left"
				alt="30px"
			/>

			<h1 className="display-4">{store.characters[props.match.params.theid].name}</h1>
			<hr className="my-4" />

			<p className="text">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
				industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book.
			</p>

			<div className="container">
				<div className="row">
					<div className="col-sm">Gender</div>
					<div className="col-sm">Hair color</div>
					<div className="col-sm">Eyes color</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-sm">{store.characters[props.match.params.theid].gender}</div>
					<div className="col-sm">{store.characters[props.match.params.theid].hair_color}</div>
					<div className="col-sm">{store.characters[props.match.params.theid].eye_color}</div>
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

Detailcharacter.propTypes = {
	match: PropTypes.object
};
