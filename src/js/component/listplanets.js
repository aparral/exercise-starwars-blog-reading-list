import React, { useState, useEffect, useContext, Component } from "react";
import { Context } from "../store/appContext";
import Cardplanet from "./cardsplanets";

const Listaplanets = () => {
	const { store, actions } = useContext(Context);

	React.useEffect(() => {
		actions.fetchplanets();
		return;
	}, []);

	return (
		<>
			<div className="row">
				{store.planets.map((item, index) => {
					return (
						<div key={index} className="col-3">
							<Cardplanet data={item} index={index} />
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Listaplanets;
