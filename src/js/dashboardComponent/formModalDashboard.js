import React, { Fragment, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Select } from "../dashboardComponent/select";

export class FormModalDashboard extends React.Component {
	render() {
		let textColor = { color: "white" };
		return (
			<Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<Fragment>
								<form onSubmit={e => actions.setCard(e)}>
									{!!store.alert && (
										<div className="alert alert-danger" role="alert">
											<p className="text-center m-0 p-0">
												¡¡¡Verifica que el rango de edad que estas creando no se encuentre entre{" "}
												{store.editstartAgeRank} y {store.editfinaltAgeRank} !!!
											</p>
										</div>
									)}
									<div>
										<h1 className="text-center">Crear Nueva Aula</h1>
									</div>
									<div className="card card-body mt-2">
										<div className="form-group">
											<label htmlFor="exampleFormControlInput1">Nombre de la sala:</label>
											<input
												className="form-control"
												id="classroomName"
												onChange={e => actions.getData(e)}
												name="classroomName"
												value={store.classroomName}
												required
												maxLength="30"
											/>
										</div>
										<div className="form-group">
											<div className="row">
												<div className="col mr-1 pr-0">
													<div className="container">
														<div className="row">
															<label htmlFor="exampleFormControlInput2">
																Rango de edades:
															</label>
														</div>
													</div>
													<div className="row">
														<div className="col mr-1 pr-0">
															<input
																className="form-control"
																id="startAgeRank"
																placeholder="Desde 3 Años"
																name="startAgeRank"
																onChange={e => actions.getData(e)}
																value={store.startAgeRank}
																required
																min="0"
																max="20"
																type="number"
															/>
														</div>

														<div className="col ml-1 pl-0">
															<input
																className="form-control"
																id="finaltAgeRank"
																placeholder="Hasta 5 Años"
																name="finaltAgeRank"
																onChange={e => actions.getData(e)}
																value={store.finaltAgeRank}
																required
																min="0"
																max="20"
																type="number"
															/>
														</div>
													</div>
												</div>
												<div className="col ml-1 pl-0">
													<label htmlFor="capacidad">Capacidad:</label>
													<input
														className="form-control"
														id="capacity"
														name="capacity"
														onChange={e => actions.getData(e)}
														value={store.capacity}
														required
														min="0"
														max="90"
														type="number"
													/>
												</div>
											</div>
										</div>
									</div>

									<div className="modal-footer">
										<button
											type="button"
											className="btn btn-secondary"
											data-dismiss="modal"
											onClick={e => actions.deleteForm(e)}>
											Cerrar
										</button>
										<button type="submit" disabled={store.alert} className="btn btn-primary">
											Guardar
										</button>
									</div>
								</form>
							</Fragment>
						);
					}}
				</Context.Consumer>
			</Fragment>
		);
	}
}
