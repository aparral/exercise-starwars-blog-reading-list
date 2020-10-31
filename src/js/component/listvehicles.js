import React, { useState, useEffect, useContext, Component } from "react";
import { Context } from "../store/appContext";
import Card from "./cards";
import Cardvehicle from "./cardsvehicles";

const Listavehicles = () => {
	const { store, actions } = useContext(Context);

	React.useEffect(() => {
		actions.fetchvehicles();
		return;
	}, []);

	return (
		<>
			<div className="row">
				{store.vehicles.map((item, index) => {
					return (
						<div key={index} className="col-3">
							<Cardvehicle data={item} index={index} />
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Listavehicles;
