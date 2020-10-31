import React, { useState, useEffect, useContext, Component } from "react";
import { Context } from "../store/appContext";
import Card from "./cards";

const Listacharacters = () => {
	const { store, actions } = useContext(Context);

	React.useEffect(() => {
		actions.fetchcharacters();
		return;
	}, []);

	return (
		<>
			{/* <button onClick={()=>actions.fetchstarwars()}>cargar</button> */}
			<div onLoadStart={() => actions.fetchcharacters()} />
			<div className="row">
				{store.characters.map((item, index) => {
					return (
						<div key={index} className="col-3">
							<Card data={item} index={index} />
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Listacharacters;
