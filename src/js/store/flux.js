import { ENGINE_METHOD_STORE } from "constants";

const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Variables para creacion de aula
			id: "",
			classroomName: "",
			startAgeRank: "",
			finaltAgeRank: "",
			teachers: [],
			capacity: "",
			dayUse: "",
			startScheduleRank: "",
			finalScheduleRank: "",
			filterByWord: "",
			cardArray: [],
			editstartAgeRank: "",
			editfinaltAgeRank: "",

			//Variables para creacion de novedades
			news: "",
			date: "",
			timeStamp: "",
			novedadesArray: [],
			//Variables para creacion de familias
			familyName: "",
			apoderado: {
				id: "",
				parentName: "",
				rut: "",
				email: "",
				phone: ""
			},
			area: "+56",
			apoderados: [],
			hijo: {
				id: "",
				sonName: "",
				birthDate: "",
				notes: "",
				age: ""
			},
			sonName: "",
			hijos: [],
			familia: {
				apoderados: [],
				hijos: []
			},
			familias: [],
			familyId: "",
			//Variables para creacion de Roles
			usuario: {
				id: "",
				name: "",
				rut: "",
				email: "",
				rol: "Elige una opcion...",
				phone: "",
				password: "",
				rPassword: "",
				logedIn: false,
				classrooms: {},
				startScheduleRank: "",
				finalScheduleRank: "",
				editstartAgeRank: "",
				editfinaltAgeRank: "",
				dayUse: "",
				classroomName: "",
				family: "",
				familyLastName: "",
				token: ""
			},
			usuarioLoged: {
				id: "",
				name: "",
				rut: "",
				email: "",
				rol: "",
				phone: "",
				password: "",
				rPassword: "",
				logedIn: false,
				classrooms: {},
				logedIn: true,
				area: "",
				startScheduleRank: "",
				finalScheduleRank: "",
				dayUse: "",
				classroomName: "",
				family: "",
				familyLastName: "",
				token: ""
			},

			usuarios: [],
			selectUSuarios: [],
			selectedUsuarios: [],
			//Variables para hacer Loing
			login: {
				rut: "",
				password: ""
			},
			//Variables generales
			alert: false,
			alertt: false,
			index: "",
			cardEdited: true,
			contraseña: false,
			rol: false,
			dashboard: true,
			novedades: false,
			familiass: false,
			familiasss: true,
			roles: false,
			estadistica: false,
			hiddeModal: "",
			familyLastName: false,
			familiasss: true,
			addApoderado: false,
			familyOptions: false,
			addHijo: false,
			menu: true,
			editNewFamilia: true,
			goBackNewFamily: false,
			goBackEditFamily: false,
			disabledOut: true,
			disabledin: false,
			actualRol: "",
			actualId: "",
			view: "",
			rut: "",
			classroom: true,
			checkIn: true,
			configCheckIn: false,
			selectRol: false,
			carddashboard: true,
			formModalDashboard: false,
			noClassroom: false,
			showPasswoord: false,
			test: "",
			sonToClassroom: [],
			attendance: 0,
			checkOutHijos: [],
			status: false,
			noSon: false,
			set: false,
			sDayUse: false,
			noTeacherDayWork: false,
			parentFamily: false,
			checked: "",
			registedFamily: false,
			showRolParams: true,
			userEdited: false,
			existingRut: false,
			existingRol: false,
			reportar: false,
			noClassroomAge: false,
			betaTest: false,
			disabledSaveParent: false,
			maxParents: false,
			verifyParent: false
		},

		actions: {
			//Funciones para renderizado condicional
			dashboard: e => {
				const store = getStore();
				const actions = getActions();
				console.log(store.usuarioLoged.token);
				fetch("http://localhost:3000/api/v1/classrooms", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data);
						setStore({
							dashboard: true,
							novedades: false,
							familiass: false,
							roles: false,
							estadistica: false,
							cardArray: data,
							familiasss: false,
							addApoderado: false,
							familyOptions: false,
							addHijo: false,
							menu: false,
							editNewFamilia: false,
							goBackNewFamily: false,
							goBackEditFamily: false,
							formModalDashboard: false,
							carddashboard: true,
							alert: false,
							classroomName: "",
							startAgeRank: "",
							finaltAgeRank: "",
							selectedUsuarios: [],
							capacity: "",
							dayUse: "",
							startScheduleRank: "",
							finalScheduleRank: "",
							id: "",
							cardEdited: true,
							hijos: [],
							apoderados: [],
							alertt: false,
							sDayUse: false,
							editstartAgeRank: "",
							editfinaltAgeRank: "",
							reportar: false,
							disabledSaveParent: false,
							maxParents: false,
							verifyParent: false
						});
						actions.deleteAddHijo();
						actions.deleteAddApoderado();
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			formModal: e => {
				setStore({ formModalDashboard: true, carddashboard: false });
			},
			formModalDashboard: e => {
				const store = getStore();
				fetch("http://localhost:3000/api/v1/roles", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data);
						let selectUSuarios = data.filter(s => s.rol === "Profesor" && s.selected === false);
						setStore({ selectUSuarios });
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			novedades: e => {
				const store = getStore();
				const actions = getActions();
				fetch("http://localhost:3000/api/v1/news", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data);
						setStore({
							dashboard: false,
							novedades: true,
							familiass: false,
							roles: false,
							estadistica: false,
							novedadesArray: data,
							familiasss: false,
							addApoderado: false,
							familyOptions: false,
							addHijo: false,
							menu: false,
							editNewFamilia: false,
							goBackNewFamily: false,
							goBackEditFamily: false,
							checkIn: false,
							configCheckIn: false,
							hijos: [],
							rut: "",
							formModalDashboard: false,
							carddashboard: false,
							classroom: false,
							hijos: [],
							apoderados: [],
							alertt: false,
							sDayUse: false,
							alert: false,
							editstartAgeRank: "",
							editfinaltAgeRank: "",
							reportar: false,
							existingRol: false,
							disabledSaveParent: false,
							maxParents: false,
							verifyParent: false
						});
						actions.deleteAddHijo();
						actions.deleteAddApoderado();
						actions.deleteConfigCheckin();
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			familias: e => {
				const store = getStore();
				const actions = getActions();
				fetch("http://localhost:3000/api/v1/families", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data);
						setStore({
							dashboard: false,
							novedades: false,
							familiass: true,
							roles: false,
							estadistica: false,
							familias: data,
							familiasss: true,
							familyLastName: false,
							addApoderado: false,
							familyOptions: false,
							addHijo: false,
							menu: true,
							editNewFamilia: false,
							familyName: "",
							goBackNewFamily: false,
							goBackEditFamily: false,
							carddashboard: false,
							formModalDashboard: false,
							alert: false,
							hijos: [],
							apoderados: [],
							alertt: false,
							sDayUse: false,
							editstartAgeRank: "",
							editfinaltAgeRank: "",
							reportar: false,
							disabledSaveParent: false,
							maxParents: false,
							verifyParent: false
						});
						actions.deleteAddHijo();
						actions.deleteAddApoderado();
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			roles: e => {
				const store = getStore();
				const actions = getActions();
				fetch("http://localhost:3000/api/v1/roles", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data);

						setStore({
							dashboard: false,
							novedades: false,
							familiass: false,
							roles: true,
							estadistica: false,
							familiasss: false,
							addApoderado: false,
							familyOptions: false,
							addHijo: false,
							menu: false,
							editNewFamilia: false,
							goBackNewFamily: false,
							goBackEditFamily: false,
							usuarios: data,
							hijos: [],
							apoderados: [],
							selectRol: false,
							carddashboard: false,
							formModalDashboard: false,
							alertt: false,
							sDayUse: false,
							alert: false,
							editstartAgeRank: "",
							editfinaltAgeRank: "",
							reportar: false,
							disabledSaveParent: false,
							maxParents: false,
							verifyParent: false
						});
						actions.deleteAddHijo();
						actions.deleteAddApoderado();
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			estadistica: e => {
				const store = getStore();
				setStore({
					dashboard: false,
					novedades: false,
					familiass: false,
					roles: false,
					estadistica: true,
					familiasss: false,
					addApoderado: false,
					familyOptions: false,
					addHijo: false,
					menu: false,
					editNewFamilia: false,
					goBackNewFamily: false,
					goBackEditFamily: false,
					carddashboard: false,
					formModalDashboard: false
				});
			},
			checkIn: e => {
				const store = getStore();
				const actions = getActions();
				fetch("http://localhost:3000/api/v1/classrooms", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data);
						if (data.length > 0) {
							setStore({
								noClassroom: false,
								cardArray: data,
								checkIn: true,
								novedades: false,
								configCheckIn: false,
								reportar: false,
								existingRol: false
							});
						} else {
							setStore({
								checkIn: true,
								novedades: false,
								configCheckIn: false,
								noClassroom: true,
								existingRol: false
							});
						}
						actions.deleteConfigCheckin();
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			configCheckIn: e => {
				const store = getStore();
				setStore({
					configCheckIn: true,
					novedades: false,
					checkIn: false,
					hijos: [],
					rut: "",
					selectRol: true,
					classroom: false,
					parentFamily: false,
					addApoderado: false,
					addHijo: false,
					reportar: false,
					disabledSaveParent: false,
					maxParents: false,
					verifyParent: false,
					usuario: {
						id: store.usuarioLoged.id,
						name: store.usuarioLoged.name,
						rut: store.usuarioLoged.rut,
						email: store.usuarioLoged.email,
						rol: store.usuarioLoged.rol,
						phone: store.usuarioLoged.phone,
						password: store.usuarioLoged.password,
						rPassword: store.usuarioLoged.password,
						classrooms: store.usuarioLoged.classrooms,
						area: store.usuarioLoged.area,
						startScheduleRank: store.usuarioLoged.startScheduleRank,
						finalScheduleRank: store.usuarioLoged.finalScheduleRank,
						dayUse: store.usuarioLoged.dayUse,
						classroomName: store.usuarioLoged.classroomName
					}
				});
			},
			//Funciones para la creacion de aulas
			getData: e => {
				//Toma la data del Input y la coloca en las variables del store
				const store = getStore();
				const { name, value } = e.target;
				setStore({
					[name]: value,
					alertt: false,
					alert: false,
					hijos: [],
					sonToClassroom: [],
					noSon: false,
					editstartAgeRank: "",
					editfinaltAgeRank: ""
				});
			},
			getData2: e => {
				//Toma la data del Input y la coloca en las variables del store
				const store = getStore();
				const { name, value } = e.target;
				setStore({ [name]: value, status: false });
			},

			setEditCard: (item, itemPosition) => {
				// Boton de editar: Toma el valos del Item correspondiente
				// del map en el form para ser editado.
				const store = getStore();
				setStore({
					id: item._id,
					cardEdited: false,
					classroomName: item.classroomName,
					startAgeRank: item.startAgeRank,
					finaltAgeRank: item.finaltAgeRank,
					capacity: item.capacity,
					dayUse: item.dayUse,
					startScheduleRank: item.startScheduleRank,
					finalScheduleRank: item.finalScheduleRank,
					selectedUsuarios: item.teachers,
					carddashboard: false,
					formModalDashboard: true
				});
			},
			setCard: e => {
				e.preventDefault();
				const store = getStore();
				const actions = getActions();

				//Boton de guardar: Guarda una nueva aula en un card. Puede diferenciar entre editar
				// un aula y guardar una nueva. Tamnien, verifica que los campos estes escritos
				if (store.cardEdited) {
					fetch("http://localhost:3000/api/v1/classrooms", {
						method: "POST",
						body: JSON.stringify({
							classroomName: store.classroomName,
							startAgeRank: store.startAgeRank,
							finaltAgeRank: store.finaltAgeRank,
							capacity: store.capacity
						}),
						headers: {
							"Content-Type": "application/json",
							"access-token": store.usuarioLoged.token
						}
					})
						.then(resp => {
							//console.log(resp.ok); // will be true if the response is successfull
							//console.log("estatus=", resp.status); // the status code = 200 or code = 400 etc.
							//console.log(resp.text()); // will try return the exact result as string
							return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
						})
						.then(data => {
							//here is were your code should start after the fetch finishes
							console.log(data);
							if (data.status === false) {
								setStore({
									alert: true,
									editstartAgeRank: data.startAgeRank,
									editfinaltAgeRank: data.finaltAgeRank
								});
							} else {
								setStore({
									classroomName: "",
									startAgeRank: "",
									finaltAgeRank: "",
									selectedUsuarios: [],
									capacity: "",
									dayUse: "",
									startScheduleRank: "",
									finalScheduleRank: "",
									alert: false,
									selectedUsuarios: [],
									selectUSuarios: [],
									startAgeRank: "",
									finaltAgeRank: "",
									editstartAgeRank: "",
									editfinaltAgeRank: ""
								});
								actions.dashboard();
							}
							//this will print on the console the exact object received from the server
						})
						.catch(error => {
							//error handling
							console.log(error);
						});
				} else {
					fetch("http://localhost:3000/api/v1/classroom/" + store.id, {
						method: "PUT",
						body: JSON.stringify({
							classroomName: store.classroomName,
							startAgeRank: store.startAgeRank,
							finaltAgeRank: store.finaltAgeRank,
							capacity: store.capacity
						}),
						headers: {
							"Content-Type": "application/json",
							"access-token": store.usuarioLoged.token
						}
					})
						.then(resp => {
							return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
						})
						.then(data => {
							//here is were your code should start after the fetch finishes
							console.log(data); //this will print on the console the exact object received from the server
							if (data.status === false) {
								setStore({
									alert: true,
									editstartAgeRank: data.startAgeRank,
									editfinaltAgeRank: data.finaltAgeRank
								});
							} else {
								setStore({
									classroomName: "",
									startAgeRank: "",
									finaltAgeRank: "",
									selectedUsuarios: [],
									capacity: "",
									dayUse: "",
									startScheduleRank: "",
									finalScheduleRank: "",
									id: "",
									cardEdited: true,
									selectUSuarios: [],
									startAgeRank: "",
									finaltAgeRank: "",
									editstartAgeRank: "",
									editfinaltAgeRank: ""
								});
								actions.dashboard();
							}
						})
						.catch(error => {
							//error handling
							console.log(error);
						});
				}
			},
			deleteForm: e => {
				const store = getStore();
				setStore({
					//Boton cerrar: Limpia los input del form
					classroomName: "",
					startAgeRank: "",
					finaltAgeRank: "",
					selectedUsuarios: [],
					capacity: "",
					dayUse: "",
					startScheduleRank: "",
					finalScheduleRank: "",
					id: "",
					cardEdited: true,
					selectUSuarios: [],
					carddashboard: true,
					formModalDashboard: false,
					alert: false
				});
			},
			selectedTeachersOut: e => {
				setStore({
					carddashboard: false,
					formModalDashboard: true
				});
			},
			indextodeleteClassroon: (item, i) => {
				setStore({
					id: item._id,
					index: i,
					existingRut: false
				});
			},
			indextodeleteClassroon2: (item, i) => {
				setStore({
					id: item._id,
					index: i,
					test: item.classrooms
				});
			},
			filterByDay: e => {
				const store = getStore();
				let moment = require("moment");
				let day = moment().format("dddd");
				let sDay = "";
				if (day === "Monday") {
					sDay = "lunes";
				} else if (day === "Tuesday") {
					sDay = "martes";
				} else if (day === "Wednesday") {
					sDay = "miercoles";
				} else if (day === "Thursday") {
					sDay = "jueves";
				} else if (day === "Friday") {
					sDay = "viernes";
				} else if (day === "Saturday") {
					sDay = "sabado";
				} else if (day === "Sunday") {
					sDay = "domingo";
				}

				console.log(sDay);
				let cardArray = store.cardArray.filter(d => d.dayUse.toLowerCase() == sDay);
				if (cardArray.length > 0) {
					setStore({ cardArray });
				} else setStore({ cardArray, alert: true });
			},
			filterByDay2: e => {},

			deleteCard: () => {
				//Boton eliminar: Borra el aula seleccionada
				const store = getStore();
				const actions = getActions();

				fetch("http://localhost:3000/api/v1/classroom/" + store.id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						//console.log(resp.ok); // will be true if the response is successfull
						//console.log(resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data); //this will print on the console the exact object received from the server
						setStore({ id: "" });
						actions.dashboard();
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			//Funciones para agregar novedad...............................................................................
			setNovedad: e => {
				e.preventDefault();
				const store = getStore();
				const actions = getActions();
				let date = new Date();
				let timeStamp = new Date().getTime();

				let day = date.getDate();
				let month = date.getMonth() + 1;
				let year = date.getFullYear();

				if (month < 10 || day < 10) {
					let date = `${day}-0${month}-${year}`;
					setStore({ date, timeStamp });
				} else {
					let date = `${day}-${month}-${year}`;
					setStore({ date, timeStamp });
				}

				//Agrega la novedad al arreglo addNovedades
				fetch("http://localhost:3000/api/v1/news", {
					method: "POST",
					body: JSON.stringify({
						name: store.usuarioLoged.name,
						news: store.news,
						date: store.date,
						rol: store.usuarioLoged.rol,
						timeStamp: store.timeStamp
					}),
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						//console.log(resp.ok); // will be true if the response is successfull
						//console.log("estatus=", resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data);

						setStore({
							news: ""
						});
						actions.novedades();

						//this will print on the console the exact object received from the server
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			news: (e, item) => {
				const store = getStore();
				setStore({
					news: item.news
				});
			},
			deleteNovedad: e => {
				const store = getStore();
				setStore({
					news: ""
				});
			},

			//Funciones para llenar formulario de familia......................................................
			handleChangeApoderado: e => {
				const store = getStore();
				const { name, value } = e.target;
				let apoderado = store.apoderado;
				apoderado[name] = value;
				setStore({
					apoderado,
					existingRut: false,
					disabledSaveParent: false,
					verifyParent: false,
					maxParents: false
				});
			},
			handleChangeHijo: e => {
				const store = getStore();
				const { name, value } = e.target;
				let hijo = store.hijo;
				hijo[name] = value;
				setStore({
					hijo,
					alertt: false,
					disabledSaveParent: false,
					verifyParent: false,
					maxParents: false
				});
			},
			//Funciones para crear, editar y eliminar apoderado
			setApoderado1: e => {
				e.preventDefault();
				const store = getStore();
				const actions = getActions();
				fetch("http://localhost:3000/api/v1/findExistingRut/" + store.apoderado.rut, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data);
						if (data.length > 0) {
							setStore({
								existingRut: true,
								disabledSaveParent: false,
								verifyParent: false
							});
						} else {
							actions.setApoderado();
						}
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},

			setApoderado: e => {
				const store = getStore();
				const actions = getActions();
				if (store.cardEdited) {
					fetch("http://localhost:3000/api/v1/parents", {
						method: "POST",
						body: JSON.stringify({
							parentName: store.apoderado.parentName,
							rut: store.apoderado.rut,
							email: store.apoderado.email,
							phone: store.apoderado.phone,
							families: store.familyId,
							area: store.area
						}),
						headers: {
							"Content-Type": "application/json",
							"access-token": store.usuarioLoged.token
						}
					})
						.then(resp => {
							//console.log(resp.ok); // will be true if the response is successfull
							//console.log("estatus=", resp.status); // the status code = 200 or code = 400 etc.
							//console.log(resp.text()); // will try return the exact result as string
							return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
						})
						.then(data => {
							//here is were your code should start after the fetch finishes
							console.log(data);
							let apoderados = store.apoderados;
							apoderados.push(data);
							setStore({
								apoderado: {
									parentName: "",
									rut: "",
									email: "",
									phone: "",
									id: ""
								},
								apoderados,
								disabledSaveParent: false,
								verifyParent: false
							});

							//this will print on the console the exact object received from the server
						})
						.catch(error => {
							//error handling
							console.log(error);
						});
				} else {
					fetch("http://localhost:3000/api/v1/parent/" + store.id, {
						method: "PUT",
						body: JSON.stringify({
							parentName: store.apoderado.parentName,
							rut: store.apoderado.rut,
							email: store.apoderado.email,
							phone: store.apoderado.phone
						}),
						headers: {
							"Content-Type": "application/json",
							"access-token": store.usuarioLoged.token
						}
					})
						.then(resp => {
							return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
						})
						.then(data => {
							//here is were your code should start after the fetch finishes
							console.log(data); //this will print on the console the exact object received from the server
							let apoderados = store.apoderados;
							apoderados[store.index] = data;
							setStore({
								apoderado: {
									parentName: "",
									rut: "",
									email: "",
									phone: ""
								},
								cardEdited: true,
								id: "",
								index: "",
								apoderados,
								disabledSaveParent: false,
								verifyParent: false
							});
						});
				}
			},
			verifyParent: () => {
				const store = getStore();
				fetch("http://localhost:3000/api/v1/verifyParent/" + store.familyId, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data);
						data
							? setStore({ disabledSaveParent: true, verifyParent: true })
							: setStore({ maxParents: true });
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			editApoderado: (item, i) => {
				// Boton de editar: Toma el valos del Item correspondiente
				// del map en el form para ser editado.
				setStore({
					id: item._id,
					index: i,
					cardEdited: false,
					apoderado: {
						parentName: item.parentName,
						rut: item.rut,
						email: item.email,
						phone: item.phone
					},
					area: item.area,
					existingRut: false
				});
			},
			deleteAddApoderado: e => {
				setStore({
					apoderado: {
						parentName: "",

						rut: "",
						email: "",
						phone: ""
					},
					cardEdited: true,
					id: "",
					index: "",
					area: "+56",
					existingRut: false,
					disabledSaveParent: false,
					verifyParent: false,
					disabledSaveParent: false,
					maxParents: false,
					verifyParent: false
				});
			},
			deleteApoderado: index => {
				const store = getStore();
				fetch("http://localhost:3000/api/v1/parent/" + store.id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						//console.log(resp.ok); // will be true if the response is successfull
						//console.log(resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data); //this will print on the console the exact object received from the server
						let apoderados = store.apoderados;
						apoderados.splice(store.index, 1);
						setStore({ id: "", apoderados, index: "" });
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},

			setHijo: e => {
				const store = getStore();
				if (store.cardEdited) {
					fetch("http://localhost:3000/api/v1/sons", {
						method: "POST",
						body: JSON.stringify({
							sonName: store.hijo.sonName,
							birthDate: store.hijo.birthDate,
							notes: store.hijo.notes,
							families: store.familyId
						}),
						headers: {
							"Content-Type": "application/json",
							"access-token": store.usuarioLoged.token
						}
					})
						.then(resp => {
							//console.log(resp.ok); // will be true if the response is successfull
							//console.log("estatus=", resp.status); // the status code = 200 or code = 400 etc.
							//console.log(resp.text()); // will try return the exact result as string
							return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
						})
						.then(data => {
							//here is were your code should start after the fetch finishes
							console.log(data);
							if (data.status) {
								setStore({
									alertt: true,
									startAgeRank: data.startAgeRank,
									finaltAgeRank: data.finaltAgeRank
								});
							} else {
								let hijos = store.hijos;
								hijos.push(data);
								setStore({
									hijo: {
										sonName: "",
										birthDate: "",
										notes: "",
										families: ""
									},
									hijos
								});
							}

							//this will print on the console the exact object received from the server
						})
						.catch(error => {
							//error handling
							console.log(error);
						});
				} else {
					fetch("http://localhost:3000/api/v1/son/" + store.id, {
						method: "PUT",
						body: JSON.stringify({
							sonName: store.hijo.sonName,
							birthDate: store.hijo.birthDate,
							notes: store.hijo.notes
						}),
						headers: {
							"Content-Type": "application/json",
							"access-token": store.usuarioLoged.token
						}
					})
						.then(resp => {
							return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
						})
						.then(data => {
							//here is were your code should start after the fetch finishes
							console.log(data);
							if (data.status) {
								setStore({
									alertt: true,
									startAgeRank: data.startAgeRank,
									finaltAgeRank: data.finaltAgeRank
								});
							} else {
								let hijos = store.hijos;
								hijos[store.index] = data;
								setStore({
									hijo: {
										sonName: "",
										birthDate: "",
										notes: ""
									},
									cardEdited: true,
									id: "",
									index: "",
									hijos
								});
							}
						});
				}
			},
			verifySon: e => {
				e.preventDefault();
				const store = getStore();
				const actions = getActions();
				fetch("http://localhost:3000/api/v1/verifySon/" + store.familyId, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data);
						data ? actions.setHijo() : setStore({ maxParents: true });
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			editHijo: (item, i) => {
				setStore({
					id: item._id,
					index: i,
					cardEdited: false,
					hijo: {
						sonName: item.sonName,
						birthDate: item.birthDate,
						notes: item.notes
					}
				});
			},
			//Funciones para crear, editar y eliminar hijo
			deleteAddHijo: e => {
				setStore({
					hijo: {
						sonName: "",

						birthDate: "",
						notes: ""
					},
					cardEdited: true,
					id: "",
					index: "",
					alertt: false,
					existingRut: false,
					disabledSaveParent: false,
					verifyParent: false,
					maxParents: false
				});
			},
			deleteHijo: index => {
				//Boton eliminar: Borra el aula seleccionada
				const store = getStore();
				fetch("http://localhost:3000/api/v1/son/" + store.id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						//console.log(resp.ok); // will be true if the response is successfull
						//console.log(resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data); //this will print on the console the exact object received from the server
						let hijos = store.hijos;
						hijos.splice(store.index, 1);
						setStore({ id: "", hijos, index: "" });
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			//Funciones para crear, editar y eliminar Familia
			deleteAddFamilia: e => {
				const store = getStore();
				setStore({
					id: ""
				});
			},

			setFamilialastName: e => {
				const store = getStore();
				let data = e.target.value;
				let familia = store.familia;
				familia["familyName"] = data;
				setStore({
					familia
				});
			},

			setFamilia: e => {
				const store = getStore();
				e.preventDefault();
				if (
					store.familia.apoderados.length > 0 &&
					store.familia.hijos.length > 0 &&
					store.familia.familyName != ""
				) {
					fetch("http://localhost:3000/api/v1/families", {
						method: "POST",
						body: JSON.stringify({
							familyName: store.familia.familyName,
							parents: store.familia.apoderados,
							sons: store.familia.hijos
						}),
						headers: {
							"Content-Type": "application/json",
							"access-token": store.usuarioLoged.token
						}
					})
						.then(resp => {
							//console.log(resp.ok); // will be true if the response is successfull
							//console.log("estatus=", resp.status); // the status code = 200 or code = 400 etc.
							//console.log(resp.text()); // will try return the exact result as string
							return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
						})
						.then(data => {
							//here is were your code should start after the fetch finishes
							console.log(data);
							setStore({
								alert: false,
								familia: {
									lastName: "",
									apoderados: [],
									hijos: []
								}
							});

							//this will print on the console the exact object received from the server
						})
						.catch(error => {
							//error handling
							console.log(error);
						});
				} else {
					setStore({
						alert: true
					});
				}
			},

			verFamilia: item => {
				const store = getStore();
				setStore({ familyId: item._id });
				fetch("http://localhost:3000/api/v1/parentEdit/" + store.familyId, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data);
						setStore({
							apoderados: data,

							familyOptions: false,
							familyLastName: false,
							addApoderado: true,
							addHijo: false,
							menu: false,
							editNewFamilia: true,
							familiasss: false,
							familyName: item.familyName,
							goBackNewFamily: false,
							goBackEditFamily: true
						});
						fetch("http://localhost:3000/api/v1/sonEdit/" + store.familyId, {
							method: "GET",
							headers: {
								"Content-Type": "application/json",
								"access-token": store.usuarioLoged.token
							}
						})
							.then(resp => {
								return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
							})
							.then(data => {
								console.log(data);
								setStore({
									hijos: data
								});
							})
							.catch(error => {
								//error handling
								console.log(error);
							});
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			alert: e => {
				//fetch put for edit family
				const store = getStore();
				if (
					store.familia.apoderados.length > 0 &&
					store.familia.hijos.length > 0 &&
					store.familia.familyName != ""
				) {
					let familias = store.familias;
					familias[store.index] = store.familia;
					setStore({
						hiddeModal: "modal",
						familias,
						familia: {
							familyName: "",
							apoderados: "",
							hijos: ""
						},
						index: ""
					});
				} else setStore({ alert: true });
			},
			deleteNewFamilia: (e, item, i) => {
				const store = getStore();
				fetch("http://localhost:3000/api/v1/family/" + store.familyId, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						//console.log(resp.ok); // will be true if the response is successfull
						//console.log(resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data); //this will print on the console the exact object received from the server

						setStore({
							familyLastName: false,
							addApoderado: false,
							familyOptions: false,
							addHijo: false,
							menu: true,
							familiasss: true,
							editNewFamilia: false,
							apoderado: {
								parentName: "",
								rut: "",
								email: "",
								phone: ""
							},
							hijo: {
								sonName: "",
								birthDate: "",
								notes: "",
								families: ""
							},
							apoderados: [],
							hijos: [],
							familyId: "",
							familyName: "",
							apoderados: [],
							hijos: [],
							goBackNewFamily: false,
							goBackEditFamily: false
						});
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			deleteFamilia: (e, item, i) => {
				const store = getStore();
				fetch("http://localhost:3000/api/v1/family/" + store.id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						//console.log(resp.ok); // will be true if the response is successfull
						//console.log(resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data); //this will print on the console the exact object received from the server
						let familias = store.familias;
						familias.splice(store.index, 1);
						setStore({
							id: "",
							index: "",
							familias
						});
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			//Funciones para creacion de profesores
			setClassRoomInRole: () => {
				const store = getStore();
				fetch("http://localhost:3000/api/v1/classrooms", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data);
						setStore({
							cardArray: data
						});
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			setUsuarios1: e => {
				e.preventDefault();
				const store = getStore();
				const actions = getActions();

				if (store.id === null) {
					fetch(
						"http://localhost:3000/api/v1/existingRutEmail/" +
							store.usuario.email +
							"/" +
							store.usuario.rut,
						{
							method: "GET",
							headers: {
								"Content-Type": "application/json",
								"access-token": store.usuarioLoged.token
							}
						}
					)
						.then(resp => {
							return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
						})
						.then(data => {
							console.log(data);
							if (data.length > 0) {
								setStore({ existingRol: true });
							} else {
								actions.setUsuarios();
							}
						})
						.catch(error => {
							//error handling
							console.log(error);
						});
				} else {
					fetch(
						"http://localhost:3000/api/v1/existingRutEmailId/" +
							store.usuario.email +
							"/" +
							store.usuario.rut +
							"/" +
							store.id,
						{
							method: "GET",
							headers: {
								"Content-Type": "application/json",
								"access-token": store.usuarioLoged.token
							}
						}
					)
						.then(resp => {
							return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
						})
						.then(data => {
							console.log(data);
							if (data.length > 0) {
								setStore({ existingRol: true });
							} else {
								actions.setUsuarios();
							}
						})
						.catch(error => {
							//error handling
							console.log(error);
						});
				}
			},
			setUsuarios: e => {
				const store = getStore();
				const actions = getActions();
				let foo = "";
				if (store.cardEdited) {
					if (store.usuario.password === store.usuario.rPassword && store.usuario.password.length >= 4) {
						if (store.usuario.rol != "Elige una opcion...") {
							if (store.usuario.classrooms === "" || store.usuario.classrooms === "Elige una opcion...") {
								foo = null;
							} else foo = store.usuario.classrooms;
							fetch("http://localhost:3000/api/v1/roles", {
								method: "POST",
								body: JSON.stringify({
									name: store.usuario.name,
									rut: store.usuario.rut,
									email: store.usuario.email,
									phone: store.usuario.phone,
									rol: store.usuario.rol,
									password: store.usuario.password,
									area: store.area,
									classrooms: foo,
									classroomName: store.usuario.classroomName,
									startScheduleRank: store.usuario.startScheduleRank,
									finalScheduleRank: store.usuario.finalScheduleRank,
									dayUse: store.usuario.dayUse
								}),
								headers: {
									"Content-Type": "application/json",
									"access-token": store.usuarioLoged.token
								}
							})
								.then(resp => {
									//console.log(resp.ok); // will be true if the response is successfull
									//console.log("estatus=", resp.status); // the status code = 200 or code = 400 etc.
									//console.log(resp.text()); // will try return the exact result as string
									return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
								})
								.then(data => {
									//here is were your code should start after the fetch finishes
									console.log(data);
									let usuarios = store.usuarios;
									usuarios.push(data);
									setStore({
										usuario: {
											name: "",
											rut: "",
											email: "",
											rol: "",
											phone: "",
											password: "",
											rPassword: "",
											classrooms: "",
											startScheduleRank: "",
											finalScheduleRank: "",
											dayUse: "",
											classroomName: ""
										},
										usuarios,
										sDayUse: false
									});
									actions.roles();
									//this will print on the console the exact object received from the server
								})
								.catch(error => {
									//error handling
									console.log(error);
								});
						} else {
							setStore({
								rol: true
							});
						}
					} else {
						setStore({
							contraseña: true
						});
					}
				} else {
					if (store.usuario.password === store.usuario.rPassword) {
						if (store.usuario.rol != "Elige una opcion...") {
							if (store.usuario.classrooms === "" || store.usuario.classrooms === "Elige una opcion...") {
								foo = null;
							} else foo = store.usuario.classrooms;
							fetch("http://localhost:3000/api/v1/rol/" + store.id, {
								method: "PUT",
								body: JSON.stringify({
									name: store.usuario.name,
									rut: store.usuario.rut,
									email: store.usuario.email,
									rol: store.usuario.rol,
									phone: store.usuario.phone,
									password: store.usuario.password,
									classrooms: foo,
									startScheduleRank: store.usuario.startScheduleRank,
									classroomName: store.usuario.classroomName,
									finalScheduleRank: store.usuario.finalScheduleRank,
									startScheduleRank: store.usuario.startScheduleRank,
									dayUse: store.usuario.dayUse
								}),
								headers: {
									"Content-Type": "application/json",
									"access-token": store.usuarioLoged.token
								}
							})
								.then(resp => {
									return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
								})
								.then(data => {
									//here is were your code should start after the fetch finishes
									console.log(data); //this will print on the console the exact object received from the server
									let usuarios = store.usuarios;
									usuarios[store.index] = data;
									setStore({
										usuario: {
											name: "",
											rut: "",
											email: "",
											rol: "",
											phone: "",
											password: "",
											rPassword: "",
											classrooms: "",
											startScheduleRank: "",
											finalScheduleRank: "",
											dayUse: "",
											classroomName: ""
										},
										cardEdited: true,
										id: "",
										index: "",
										usuarios,
										showPasswoord: false,
										sDayUse: false
									});
									actions.roles();
								});
						} else {
							setStore({
								rol: true
							});
						}
					} else {
						setStore({
							contraseña: true
						});
					}
				}
			},
			handleChangeUsuario: e => {
				const store = getStore();
				const { name, value } = e.target;
				let usuario = store.usuario;
				usuario[name] = value;
				setStore({
					usuario,
					contraseña: false,
					rol: false,
					sClassroom: false,
					sDayUse: false,
					alert: false,
					status: false,
					existingRol: false
				});
			},
			handleChangeUsuario2: e => {
				const store = getStore();
				console.log(JSON.parse(e.target.value));
				let usuario = store.usuario;
				let foo = JSON.parse(e.target.value);
				usuario["classrooms"] = foo._id;
				usuario["classroomName"] = foo.classroomName;
				setStore({
					usuario,
					contraseña: false,
					rol: false,
					sClassroom: false,
					rol: false,
					sDayUse: false,
					existingRol: false
				});
			},
			handleChangeUsuario3: e => {
				const store = getStore();
				let usuario = store.usuario;
				usuario["dayUse"] = e.target.value;
				setStore({
					usuario,
					contraseña: false,
					rol: false,
					sClassroom: false,
					sDayUse: false,
					existingRol: false
				});
			},
			handleChangeUsuario4: e => {
				const store = getStore();
				let usuario = store.usuario;

				usuario["rol"] = e.target.value;
				usuario["dayUse"] = "";
				usuario["startScheduleRank"] = "";
				usuario["finalScheduleRank"] = "";
				usuario["classrooms"] = "";
				usuario["classroomName"] = "";

				setStore({
					usuario,
					contraseña: false,
					rol: false,
					sClassroom: false,
					sDayUse: false,
					existingRol: false
				});
			},
			deleteAddUsuarios: e => {
				setStore({
					usuario: {
						name: "",
						rut: "",
						phone: "",
						rol: "",
						email: "",
						password: "",
						rPassword: "",
						classrooms: "",
						startScheduleRank: "",
						finalScheduleRank: "",
						dayUse: ""
					},
					cardEdited: true,
					id: "",
					index: "",
					showPasswoord: false,
					classrooms: "",
					startScheduleRank: "",
					finalScheduleRank: "",
					dayUse: "",
					cardArray: [],
					existingRol: false
				});
			},
			deleteUsuarios: item => {
				const store = getStore();
				const actions = getActions();

				fetch("http://localhost:3000/api/v1/rol/" + store.id, {
					method: "DELETE",

					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						//console.log(resp.ok); // will be true if the response is successfull
						//console.log(resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data); //this will print on the console the exact object received from the server
						let usuarios = store.usuarios;
						usuarios.splice(store.index, 1);
						setStore({
							id: "",
							index: "",
							usuarios
						});
						actions.roles();
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			editRol: (item, i) => {
				const store = getStore();
				const actions = getActions();
				actions.setClassRoomInRole();
				setStore({
					usuario: {
						name: item.name,
						rut: item.rut,
						email: item.email,
						phone: item.phone,
						rol: item.rol,
						password: item.password,
						rPassword: item.password,
						classrooms: item.classrooms,
						classroomName: item.classroomName,
						startScheduleRank: item.startScheduleRank,
						finalScheduleRank: item.finalScheduleRank,
						dayUse: item.dayUse
					},
					area: item.area,
					index: i,
					cardEdited: false,
					id: item._id,
					showPasswoord: true
				});
			},
			filterByRole: e => {
				const store = getStore();
				let foo = e.target.name;
				fetch("http://localhost:3000/api/v1/roles", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data);
						const usuarios = data.filter(u => u.rol === foo);
						setStore({ usuarios });
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			familyLastName: e => {
				const store = getStore();
				fetch("http://localhost:3000/api/v1/classrooms", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						if (data.length <= 0) {
							setStore({
								alert: true,
								familyLastName: true,
								familiasss: false,
								addApoderado: false,
								familyOptions: false,
								addHijo: false,
								menu: false
							});
						} else {
							console.log(data);
							setStore({
								familyLastName: true,
								familiasss: false,
								addApoderado: false,
								familyOptions: false,
								addHijo: false,
								menu: false,
								alert: false
							});
						}

						console.log(data);
						setStore({
							familyLastName: true,
							familiasss: false,
							addApoderado: false,
							familyOptions: false,
							addHijo: false,
							menu: false
						});
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			addFamily: e => {
				const store = getStore();
				e.preventDefault();
				fetch("http://localhost:3000/api/v1/families", {
					method: "POST",
					body: JSON.stringify({
						familyName: store.familyName
					}),
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						//console.log(resp.ok); // will be true if the response is successfull
						//console.log("estatus=", resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data);
						setStore({
							familyLastName: false,
							addApoderado: true,
							familyOptions: true,
							addHijo: false,
							menu: false,
							familyName: "",
							familyId: data._id,
							goBackNewFamily: true,
							goBackEditFamily: false
						});

						//this will print on the console the exact object received from the server
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			editFamilyName: e => {
				const store = getStore();
				fetch("http://localhost:3000/api/v1/family/" + store.familyId, {
					method: "PUT",
					body: JSON.stringify({
						familyName: store.familyName
					}),
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data); //this will print on the console the exact object received from the server
						setStore({});
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			addHijo: e => {
				setStore({
					familyLastName: false,
					addApoderado: false,
					familyOptions: true,
					addHijo: true,
					menu: false,
					apoderado: {
						parentName: "",
						rut: "",
						email: "",
						phone: ""
					},
					hijos: [],
					apoderdos: [],
					disabledSaveParent: false,
					maxParents: false,
					verifyParent: false
				});
			},
			addApoderado: e => {
				setStore({
					familyLastName: false,

					familyOptions: true,
					addHijo: false,
					menu: false,
					addApoderado: true,
					hijo: {
						sonName: "",
						birthDate: "",
						notes: "",
						families: ""
					},
					hijos: [],
					apoderdos: [],
					alertt: false
				});
			},
			goBack: e => {
				const store = getStore();
				fetch("http://localhost:3000/api/v1/families", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data);
						setStore({
							familyLastName: false,
							addApoderado: false,
							familyOptions: false,
							addHijo: false,
							menu: true,
							familiasss: true,
							editNewFamilia: false,
							apoderado: {
								parentName: "",
								rut: "",
								email: "",
								phone: "",
								id: ""
							},
							hijo: {
								sonName: "",
								birthDate: "",
								notes: "",
								families: ""
							},
							apoderados: [],
							hijos: [],
							id: "",
							familyId: "",
							familyName: "",
							apoderados: [],
							hijos: [],
							goBackNewFamily: false,
							goBackEditFamily: false,
							familyName: "",
							familias: data
						});
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			editNewApoderados: e => {
				setStore({
					familyOptions: false,
					familyLastName: false,
					addApoderado: true,
					addHijo: false,
					menu: false,
					editNewFamilia: true,
					hijo: {
						id: "",
						sonName: "",
						birthDate: "",
						notes: ""
					},
					alertt: false,
					disabledSaveParent: false,
					verifyParent: false,
					maxParents: false
				});
			},
			editNewHijo: e => {
				setStore({
					familyOptions: false,
					familyLastName: false,
					addApoderado: false,
					addHijo: true,
					menu: false,
					editNewFamilia: true,
					apoderado: {
						id: "",
						parentName: "",
						rut: "",
						email: "",
						phone: "",
						disabledSaveParent: false,
						verifyParent: false,
						maxParents: false
					}
				});
			},
			//Funciones pra hacer login
			login: (e, history) => {
				e.preventDefault();
				const store = getStore();
				const actions = getActions();
				setStore({ betaTest: false });
				if (store.checked) {
					actions.loginApoderados(e, history);
				} else actions.loginUsuarios(e, history);
			},
			loginApoderados: (e, history) => {
				const store = getStore();
				const actions = getActions();
				fetch("http://localhost:3000/api/v1/rolesLoginParent", {
					method: "POST",
					body: JSON.stringify({
						rut: store.login.rut,
						password: store.login.password
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						//console.log(resp.ok); // will be true if the response is successfull
						//console.log("estatus=", resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data);
						if (data != true) {
							if (data != false) {
								setStore({
									usuarioLoged: {
										id: data.rol._id,
										name: data.rol.name,
										rut: data.rol.rut,
										email: data.rol.email,
										rol: data.rol.rol,
										phone: data.rol.phone,
										password: data.rol.password,
										rPassword: data.rol.password,
										classrooms: data.rol.classrooms,
										logedIn: true,
										area: data.rol.area,
										startScheduleRank: data.rol.startScheduleRank,
										finalScheduleRank: data.rol.finalScheduleRank,
										dayUse: data.rol.dayUse,
										classroomName: data.rol.classroomName,
										family: data.rol.family,
										token: data.token
									},
									login: {
										rut: "",
										password: ""
									},
									registedFamily: false,
									showRolParams: false,
									noTeacherDayWork: false,
									sDayUse: false,
									alert: false
								});
								history.push("/parent");
								actions.parentFamily();
							} else setStore({ alert: true, registedFamily: false });
						} else setStore({ sDayUse: true, registedFamily: false });

						//this will print on the console the exact object received from the server
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},

			loginUsuarios: (e, history) => {
				const store = getStore();
				const actions = getActions();
				fetch("http://localhost:3000/api/v1/rolesLogin", {
					method: "POST",
					body: JSON.stringify({
						rut: store.login.rut,
						password: store.login.password
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						//console.log(resp.ok); // will be true if the response is successfull
						//console.log("estatus=", resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data);
						if (data != false) {
							setStore({
								usuarioLoged: {
									id: data.rol._id,
									name: data.rol.name,
									rut: data.rol.rut,
									email: data.rol.email,
									rol: data.rol.rol,
									phone: data.rol.phone,
									password: data.rol.password,
									rPassword: data.rol.password,
									classrooms: data.rol.classrooms,
									logedIn: true,
									area: data.rol.area,
									startScheduleRank: data.rol.startScheduleRank,
									finalScheduleRank: data.rol.finalScheduleRank,
									dayUse: data.rol.dayUse,
									classroomName: data.rol.classroomName,
									token: data.token
								},
								login: {
									rut: "",
									password: ""
								},
								noTeacherDayWork: false,
								sDayUse: false,
								alert: false,
								registedFamily: false
							});

							if (data.rol.rol === "Administrador") {
								history.push("/admin");
								actions.dashboard();
							} else if (data.rol.rol === "Profesor") {
								//
								let moment = require("moment");
								let day = moment().format("dddd");
								let sDay = "";
								if (day === "Monday") {
									sDay = "lunes";
								} else if (day === "Tuesday") {
									sDay = "martes";
								} else if (day === "Wednesday") {
									sDay = "miercoles";
								} else if (day === "Thursday") {
									sDay = "jueves";
								} else if (day === "Friday") {
									sDay = "viernes";
								} else if (day === "Saturday") {
									sDay = "sabado";
								} else if (day === "Sunday") {
									sDay = "domingo";
								}

								if (data.rol.dayUse.toLowerCase() === sDay && data.rol.classrooms != null) {
									history.push("/teachers");
									actions.classroom();
								} else setStore({ noTeacherDayWork: true });
							} else if (data.rol.rol === "Check In") {
								//
								let moment = require("moment");
								let day = moment().format("dddd");
								let sDay = "";
								if (day === "Monday") {
									sDay = "lunes";
								} else if (day === "Tuesday") {
									sDay = "martes";
								} else if (day === "Wednesday") {
									sDay = "miercoles";
								} else if (day === "Thursday") {
									sDay = "jueves";
								} else if (day === "Friday") {
									sDay = "viernes";
								} else if (day === "Saturday") {
									sDay = "sabado";
								} else if (day === "Sunday") {
									sDay = "domingo";
								}

								if (data.rol.dayUse.toLowerCase() === sDay) {
									history.push("/checkIn");
									actions.checkIn();
								} else setStore({ noTeacherDayWork: true });
							}
						} else setStore({ alert: true });

						//this will print on the console the exact object received from the server
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			deleteConfigCheckin: () => {
				setStore({
					usuario: {
						name: "",
						rut: "",
						email: "",
						rol: "",
						phone: "",
						password: "",
						rPassword: ""
					}
				});
			},
			handleLoging: e => {
				const store = getStore();
				const { name, value } = e.target;
				let login = store.login;
				login[name] = value;
				setStore({
					login,
					alert: false,
					noTeacherDayWork: false,
					sDayUse: false,
					registedFamily: false,
					betaTest: false
				});
			},
			//Funciones pra modulo CheckIn
			serchRut: e => {
				const store = getStore();
				const actions = getActions();
				if (store.rut != "") {
					fetch("http://localhost:3000/api/v1/serchRut/" + store.rut, {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							"access-token": store.usuarioLoged.token
						}
					})
						.then(resp => {
							return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
						})
						.then(data => {
							console.log(data);
							if (data) {
								if (data.length === 0) {
									setStore({ noSon: true });
								} else {
									setStore({
										hijos: data
									});
									actions.checkIn();
								}
							} else setStore({ alert: true });
						})
						.catch(error => {
							//error handling
							console.log(error);
						});
				} else setStore({ alert: true });
			},
			checkInSon: (e, item, i) => {
				setStore({ status: true });
				const actions = getActions();
				const store = getStore();
				let newClassroom = store.cardArray.find(c => c.startAgeRank <= item.age && c.finaltAgeRank >= item.age);
				console.log(newClassroom);
				if (e.target.checked) {
					if (newClassroom.capacity != newClassroom.sonsInClassroom) {
						let sonToClassroom = store.sonToClassroom;
						let son = {
							id: item.id,
							sonName: item.sonName,
							birthDate: item.birthDate,
							notes: item.notes,
							families: item.families,
							age: item.age,
							classroomName: item.classroomName,
							hBirthDate: item.hBirthDate,
							parentPhone: item.parentPhone,
							classroomId: item.classroomId,
							parentName: item.parentName,
							parentsList: item.parentsList,
							parentRut: item.parentRut,
							fullClassroom: item.fullClassroom,
							noClassroomAge: item.noClassroomAge,
							fullClassroom2: item.fullClassroom2
						};
						sonToClassroom.push(son);
						setStore({ sonToClassroom });
						fetch("http://localhost:3000/api/v1/classroomPutAssintance/" + item.classroomId, {
							method: "PUT",
							body: JSON.stringify({
								sonsInClassroom: newClassroom.sonsInClassroom + 1
							}),
							headers: {
								"Content-Type": "application/json",
								"access-token": store.usuarioLoged.token
							}
						})
							.then(resp => {
								return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
							})
							.then(data => {
								//here is were your code should start after the fetch finishes
								console.log(data);
								actions.checkIn();
								setStore({ status: false });
							})
							.catch(error => {
								//error handling
								console.log(error);
							});
					} else {
						console.log(" aula ful");
						let hijos = store.hijos;
						hijos[i].fullClassroom = true;
						setStore({ hijos, status: false });
					}
				} else {
					console.log("checked falseeeeeeeeeeeeeee");
					let sonToClassroom = store.sonToClassroom;
					let foo = sonToClassroom.filter(f => f.id != item.id);
					let hijos = store.hijos;
					hijos.map(h => (h["fullClassroom"] = false));
					console.log("retira al niño del array");
					fetch("http://localhost:3000/api/v1/classroomPutAssintance/" + item.classroomId, {
						method: "PUT",
						body: JSON.stringify({
							sonsInClassroom: newClassroom.sonsInClassroom - 1
						}),
						headers: {
							"Content-Type": "application/json",
							"access-token": store.usuarioLoged.token
						}
					})
						.then(resp => {
							return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
						})
						.then(data => {
							//here is were your code should start after the fetch finishes
							console.log(data);
							setStore({ status: false, sonToClassroom: foo, hijos });
							console.log("pasa status a false");
							actions.checkIn();
							console.log("hace checkin");
						})
						.catch(error => {
							//error handling
							console.log(error);
						});
				}
			},
			outCheckin: (e, item) => {
				const store = getStore();
				const actions = getActions();
				fetch("http://localhost:3000/api/v1/currentClassroom", {
					method: "POST",
					body: JSON.stringify({
						newClass: store.sonToClassroom
					}),
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						//console.log(resp.ok); // will be true if the response is successfull
						//console.log("estatus=", resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data);
						setStore({ hijos: [], rut: "", sonToClassroom: [] });
						actions.checkIn();
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			logedEditRol: e => {
				const store = getStore();
				fetch(
					"http://localhost:3000/api/v1/rolView/" +
						store.usuario.id +
						"/" +
						store.usuario.rut +
						"/" +
						store.usuario.email,
					{
						method: "PUT",
						body: JSON.stringify({
							name: store.usuario.name,
							rut: store.usuario.rut,
							email: store.usuario.email,
							rol: store.usuario.rol,
							phone: store.usuario.phone,
							password: store.usuario.password,
							classrooms: store.usuario.classrooms,
							startScheduleRank: store.usuario.startScheduleRank,
							classroomName: store.usuario.classroomName,
							finalScheduleRank: store.usuario.finalScheduleRank,
							startScheduleRank: store.usuario.startScheduleRank,
							dayUse: store.usuario.dayUse
						}),
						headers: {
							"Content-Type": "application/json",
							"access-token": store.usuarioLoged.token
						}
					}
				)
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data);
						if (data != false) {
							setStore({
								usuario: {
									id: data._id,
									name: data.name,
									rut: data.rut,
									email: data.email,
									rol: data.rol,
									phone: data.phone,
									password: data.password,
									rPassword: data.password,
									classrooms: data.classrooms,
									startScheduleRank: data.startScheduleRank,
									classroomName: data.classroomName,
									finalScheduleRank: data.finalScheduleRank,
									startScheduleRank: data.startScheduleRank,
									dayUse: data.dayUse,
									classroomName: data.classroomName,
									family: data.family,
									token: store.usuarioLoged
								},
								usuarioLoged: {
									id: data._id,
									name: data.name,
									rut: data.rut,
									email: data.email,
									rol: data.rol,
									phone: data.phone,
									password: data.password,
									rPassword: data.password,
									classrooms: data.classrooms,
									startScheduleRank: data.startScheduleRank,
									classroomName: data.classroomName,
									finalScheduleRank: data.finalScheduleRank,
									startScheduleRank: data.startScheduleRank,
									dayUse: data.dayUse,
									classroomName: data.classroomName,
									family: data.family,
									token: store.usuarioLoged.token
								},
								userEdited: true,
								existingRol: false
							});
							setTimeout(() => setStore({ userEdited: false }), 2000);
						} else {
							setStore({ existingRol: true });
						}
					});
			},
			logedEditParent: e => {
				const store = getStore();
				fetch("http://localhost:3000/api/v1/parentView/" + store.usuario.id + "/" + store.usuario.email, {
					method: "PUT",
					body: JSON.stringify({
						name: store.usuario.name,
						rut: store.usuario.rut,
						email: store.usuario.email,
						rol: store.usuario.rol,
						phone: store.usuario.phone,
						password: store.usuario.password,
						classrooms: store.usuario.classrooms,
						startScheduleRank: store.usuario.startScheduleRank,
						classroomName: store.usuario.classroomName,
						finalScheduleRank: store.usuario.finalScheduleRank,
						startScheduleRank: store.usuario.startScheduleRank,
						dayUse: store.usuario.dayUse
					}),
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data);
						if (data != false) {
							setStore({
								usuario: {
									id: data._id,
									name: data.name,
									rut: data.rut,
									email: data.email,
									rol: data.rol,
									phone: data.phone,
									password: data.password,
									rPassword: data.password,
									classrooms: data.classrooms,
									startScheduleRank: data.startScheduleRank,
									classroomName: data.classroomName,
									finalScheduleRank: data.finalScheduleRank,
									startScheduleRank: data.startScheduleRank,
									dayUse: data.dayUse,
									classroomName: data.classroomName,
									family: data.family,
									token: store.usuarioLoged
								},
								usuarioLoged: {
									id: data._id,
									name: data.name,
									rut: data.rut,
									email: data.email,
									rol: data.rol,
									phone: data.phone,
									password: data.password,
									rPassword: data.password,
									classrooms: data.classrooms,
									startScheduleRank: data.startScheduleRank,
									classroomName: data.classroomName,
									finalScheduleRank: data.finalScheduleRank,
									startScheduleRank: data.startScheduleRank,
									dayUse: data.dayUse,
									classroomName: data.classroomName,
									family: data.family,
									token: store.usuarioLoged.token
								},
								userEdited: true,
								existingRol: false
							});
							setTimeout(() => setStore({ userEdited: false }), 2000);
						} else {
							setStore({ existingRol: true });
						}
					});
			},
			capacityClassroon: () => {
				const store = getStore();
				let foo = store.hijos.length;
				console.log(foo);
				fetch("http://localhost:3000/api/v1/classroomPutAssintance/" + store.usuarioLoged.classrooms._id, {
					method: "PUT",
					body: JSON.stringify({
						sonsInClassroom: foo
					}),
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data); //this will print on the console the exact object received from the server
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},

			classroom: e => {
				const store = getStore();
				const actions = getActions();
				fetch("http://localhost:3000/api/v1/currentClassroom/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data);

						let hijos = data.filter(
							c =>
								store.usuarioLoged.classrooms.startAgeRank <= c.age &&
								store.usuarioLoged.classrooms.finaltAgeRank >= c.age
						);
						console.log(hijos);
						setStore({
							hijos,
							classroom: true,
							novedades: false,
							configCheckIn: false,
							reportar: false,
							existingRol: false
						});
						actions.capacityClassroon();
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			addTeacher: (item, i) => {
				const store = getStore();
				let selectedUsuarios = store.selectedUsuarios;
				let selectUSuarios = store.selectUSuarios;
				item["selected"] = true;
				selectedUsuarios.push(item);
				selectUSuarios.splice(i, 1);
				setStore({ selectedUsuarios, selectUSuarios });
			},
			removeTeacher: (item, i) => {
				const store = getStore();
				let selectedUsuarios = store.selectedUsuarios;
				let selectUSuarios = store.selectUSuarios;
				item["selected"] = false;
				selectUSuarios.push(item);
				selectedUsuarios.splice(i, 1);
				setStore({ selectedUsuarios, selectUSuarios });
			},
			button: (item, i) => {
				const actions = getActions();
				const store = getStore();
				fetch("http://localhost:3000/api/v1/currentClassroom/" + item._id, {
					method: "PUT",
					body: JSON.stringify({
						button: true
					}),
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data); //this will print on the console the exact object received from the server
						actions.classroom();
						console.log(item.parentsList);
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			showBorder: (item, i) => {
				const store = getStore();
				const actions = getActions();
				fetch("http://localhost:3000/api/v1/currentClassroom/" + item._id, {
					method: "PUT",
					body: JSON.stringify({
						borderColor: "border-success",
						status: true
					}),
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data); //this will print on the console the exact object received from the server
						let attendance = store.attendance;
						attendance = attendance + 1;
						setStore({
							attendance
						});
						actions.classroom();
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			deleteCurrentClassroom: item => {
				const actions = getActions();
				const store = getStore();
				fetch("http://localhost:3000/api/v1/currentClassroom/" + store.id, {
					method: "DELETE",

					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						//console.log(resp.ok); // will be true if the response is successfull
						//console.log(resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data); //this will print on the console the exact object received from the server
						setStore({ sonName: "", id: "" });
						actions.classroom();
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			myData: item => {
				const store = getStore();
				setStore({
					apoderados: item.parentsList,
					hijo: {
						sonName: item.sonName,
						notes: item.notes,
						age: item.age
					},
					apoderado: { parentName: item.parentName }
				});
			},
			byeSon: item => {
				setStore({ sonName: item.sonName, id: item._id });
			},
			checkOutHijos: () => {
				const store = getStore();
				let checkOutHijos = store.hijos.filter(h => {
					const parentWithRut = h.parentsList.find(p => p.rut === store.rut);
					if (parentWithRut != undefined) {
						return true;
					} else return false;
				});
				setStore({ checkOutHijos });
			},
			exitCheckOut: () => {
				setStore({ checkOutHijos: [], rut: "", status: false });
			},
			checkOut: () => {
				const store = getStore();
				const actions = getActions();
				if (store.checkOutHijos.length > 0) {
					store.checkOutHijos.map(c => {
						fetch("http://localhost:3000/api/v1/currentClassroom/" + c._id, {
							method: "DELETE",

							headers: {
								"Content-Type": "application/json",
								"access-token": store.usuarioLoged.token
							}
						})
							.then(resp => {
								//console.log(resp.ok); // will be true if the response is successfull
								//console.log(resp.status); // the status code = 200 or code = 400 etc.
								//console.log(resp.text()); // will try return the exact result as string
								return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
							})
							.then(data => {
								//here is were your code should start after the fetch finishes
								console.log(data);
								actions.classroom(); //this will print on the console the exact object received from the server
							})
							.catch(error => {
								//error handling
								console.log(error);
							});
					});
					setStore({ checkOutHijos: [], rut: "" });
				} else actions.exitCheckOut();
			},
			wrapper: () => {
				const classes = document.querySelector("#wrapper");
				classes.className.indexOf("toggled") > -1
					? (classes.className = classes.className.replace("toggled", ""))
					: (classes.className += " toggled");
			},
			logout: (e, history) => {
				localStorage.removeItem("ikids-store");
				history.push("/");
				setStore({
					id: "",
					classroomName: "",
					startAgeRank: "",
					finaltAgeRank: "",
					teachers: [],
					capacity: "",
					dayUse: "",
					startScheduleRank: "",
					finalScheduleRank: "",
					filterByWord: "",
					cardArray: [],
					editstartAgeRank: "",
					editfinaltAgeRank: "",

					//Variables para creacion de novedades
					news: "",
					date: "",
					timeStamp: "",
					novedadesArray: [],
					//Variables para creacion de familias
					familyName: "",
					apoderado: {
						id: "",
						parentName: "",
						rut: "",
						email: "",
						phone: ""
					},
					area: "+56",
					apoderados: [],
					hijo: {
						id: "",
						sonName: "",
						birthDate: "",
						notes: "",
						age: ""
					},
					sonName: "",
					hijos: [],
					familia: {
						apoderados: [],
						hijos: []
					},
					familias: [],
					familyId: "",
					//Variables para creacion de Roles
					usuario: {
						id: "",
						name: "",
						rut: "",
						email: "",
						rol: "Elige una opcion...",
						phone: "",
						password: "",
						rPassword: "",
						logedIn: false,
						classrooms: {},
						startScheduleRank: "",
						finalScheduleRank: "",
						editstartAgeRank: "",
						editfinaltAgeRank: "",
						dayUse: "",
						classroomName: "",
						family: "",
						familyLastName: "",
						token: ""
					},
					usuarioLoged: {
						id: "",
						name: "",
						rut: "",
						email: "",
						rol: "",
						phone: "",
						password: "",
						rPassword: "",
						logedIn: false,
						classrooms: {},
						logedIn: true,
						area: "",
						startScheduleRank: "",
						finalScheduleRank: "",
						dayUse: "",
						classroomName: "",
						family: "",
						familyLastName: "",
						token: ""
					},

					usuarios: [],
					selectUSuarios: [],
					selectedUsuarios: [],
					//Variables para hacer Loing
					login: {
						rut: "",
						password: ""
					},
					//Variables generales
					alert: false,
					alertt: false,
					index: "",
					cardEdited: true,
					contraseña: false,
					rol: false,
					dashboard: true,
					novedades: false,
					familiass: false,
					familiasss: true,
					roles: false,
					estadistica: false,
					hiddeModal: "",
					familyLastName: false,
					familiasss: true,
					addApoderado: false,
					familyOptions: false,
					addHijo: false,
					menu: true,
					editNewFamilia: true,
					goBackNewFamily: false,
					goBackEditFamily: false,
					disabledOut: true,
					disabledin: false,
					actualRol: "",
					actualId: "",
					view: "",
					rut: "",
					classroom: true,
					checkIn: true,
					configCheckIn: false,
					selectRol: false,
					carddashboard: true,
					formModalDashboard: false,
					noClassroom: false,
					showPasswoord: false,
					test: "",
					sonToClassroom: [],
					attendance: 0,
					checkOutHijos: [],
					status: false,
					noSon: false,
					set: false,
					sDayUse: false,
					noTeacherDayWork: false,
					parentFamily: false,
					checked: "",
					registedFamily: false,
					showRolParams: true
				});
			},
			parentFamily: e => {
				const store = getStore();
				const actions = getActions();
				fetch("http://localhost:3000/api/v1/parentEdit/" + store.usuarioLoged.family._id, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"access-token": store.usuarioLoged.token
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data);
						setStore({
							parentFamily: true,
							configCheckIn: false,
							addApoderado: true,
							apoderados: data,
							familyName: store.usuarioLoged.family.familyName,
							familyId: store.usuarioLoged.family._id
						});

						fetch("http://localhost:3000/api/v1/sonEdit/" + store.usuarioLoged.family._id, {
							method: "GET",
							headers: {
								"Content-Type": "application/json",
								"access-token": store.usuarioLoged.token
							}
						})
							.then(resp => {
								return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
							})
							.then(data => {
								console.log(data);
								setStore({ hijos: data });
							})
							.catch(error => {
								//error handling
								console.log(error);
							});
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			createParentSession1: (e, history) => {
				const store = getStore();
				const actions = getActions();
				e.preventDefault();
				if (store.usuario.password === store.usuario.rPassword && store.usuario.password.length >= 8) {
					const store = getStore();
					fetch("http://localhost:3000/api/v1/rolEmail/" + store.usuario.email, {
						method: "GET",
						headers: {
							"Content-Type": "application/json"
						}
					})
						.then(resp => {
							return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
						})
						.then(data => {
							console.log(data);
							if (data.length > 0) {
								setStore({ status: true });
							} else {
								actions.createParentSession();
								history.push("/");
								setStore({ registedFamily: true });
							}
						})
						.catch(error => {
							//error handling
							console.log(error);
						});
				} else {
					setStore({ alert: true });
				}
			},
			createParentSession: e => {
				const store = getStore();

				fetch("http://localhost:3000/api/v1/parentSession", {
					method: "POST",
					body: JSON.stringify({
						email: store.usuario.email,
						password: store.usuario.password,
						rol: "Familia",
						familyName: store.usuario.name
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						//console.log(resp.ok); // will be true if the response is successfull
						//console.log("estatus=", resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data);
						setStore({
							usuario: {
								email: "",
								password: "",
								name: "",
								rPassword: ""
							}
						});

						//this will print on the console the exact object received from the server
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			check: e => {
				setStore({
					checked: e.target.checked,
					noTeacherDayWork: false,
					registedFamily: false,
					sDayUse: false,
					alert: false
				});
			},
			goBackLogin: (e, history) => {
				history.push("/");
				setStore({
					alert: false,
					sDayUse: false,
					registedFamily: false,
					noTeacherDayWork: false,
					status: false,
					betaTest: false
				});
			},
			goRegister: (e, history) => {
				fetch("http://localhost:3000/api/v1/limitedSesions/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data);
						if (data) {
							history.push("/createFamily");
							setStore({
								alert: false,
								sDayUse: false,
								registedFamily: false,
								noTeacherDayWork: false,
								status: false,
								betaTest: false
							});
						} else {
							setStore({ betaTest: true });
						}
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			reportError: e => {
				setStore({
					reportar: true,
					dashboard: false,
					novedades: false,
					familiass: false,
					roles: false,
					estadistica: false,
					checkIn: false,
					classroom: false,
					configCheckIn: false
				});
			}
		}
	};
};
export default getState;
