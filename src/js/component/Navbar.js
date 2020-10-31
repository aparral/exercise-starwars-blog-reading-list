import React, { useState, useEffect, useContext, Component } from "react";
import { Context } from "../store/appContext";

function Navbar() {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<img src="https://androidspain.es/wp-content/uploads/2015/12/Star-wars..png" style={{ width: "100px" }} />
			<form>
				<div className="btn-group" role="group">
					<button
						id="btnGroupDrop1"
						type="button"
						className="btn btn-secondary dropdown-toggle"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favoritos
					</button>
					<div className="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
						{store.favoritos.map((item, index) => {
							console.log(item.name);
							return (
								<a
									onClick={e => {
										e.preventDefault();
										actions.delFavoritos(index);
									}}
									key={index}
									className="dropdown-item"
									href="#">
									{item.name}
									<svg
										width="1em"
										height="1em"
										viewBox="0 0 16 16"
										className="bi bi-trash-fill float-right"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
										/>
									</svg>
								</a>
							);
						})}
					</div>
				</div>
			</form>
		</nav>
	);
}
export default Navbar;
