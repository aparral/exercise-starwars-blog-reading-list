const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favoritos: []
		},

		actions: {
			fetchcharacters: async () => {
				const config = {
					headers: {
						"Content-type": "application/json"
					},
					method: "GET"
				};
				const response = await fetch("https://swapi.dev/api/people/");

				const json = await response.json();
				console.log("--json--", json);
				setStore({ characters: json.results });
			},

			fetchplanets: async () => {
				const config = {
					headers: {
						"Content-type": "application/json"
					},
					method: "GET"
				};
				const response = await fetch("https://swapi.dev/api/planets/");

				const json = await response.json();
				console.log("--json--", json);
				setStore({ planets: json.results });
			},

			fetchvehicles: async () => {
				const config = {
					headers: {
						"Content-type": "application/json"
					},
					method: "GET"
				};
				const response = await fetch("https://swapi.dev/api/vehicles/");

				const json = await response.json();
				console.log("--json--", json);
				setStore({ vehicles: json.results });
			},

			addfavorito: value => {
				//favoritos.push({name:'hola'});
				let store = getStore();
				let { favoritos } = store;
				setStore({ favoritos: [...favoritos, { name: value }] });
				console.log(favoritos);
			},
			delFavoritos: index => {
				const store = getStore();
				let { favoritos } = store;
				favoritos = favoritos.filter((item, i) => i !== index);
				setStore({ favoritos: favoritos });
			}
		}
	};
};

export default getState;
