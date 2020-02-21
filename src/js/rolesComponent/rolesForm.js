import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class RolesForm extends React.Component {
	render() {
		let textColor = { color: "white" };
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							<div className="container">
								{!!store.showRolParams && (
									<div>
										<div className="row ">
											<div className="col pr-1">
												<label htmlFor="exampleFormControlInput1">Nombre</label>
												<input
													type="text"
													className="form-control"
													id="exampleFormControlInput1"
													value={store.usuario.name}
													name="name"
													onChange={e => actions.handleChangeUsuario(e)}
													required
													maxLength="30"
												/>
											</div>
											<div className="col pl-1">
												<label htmlFor="exampleFormControlInput1">Rut</label>
												<input
													type="number"
													className="form-control"
													id="exampleFormControlInput1"
													value={store.usuario.rut}
													name="rut"
													onChange={e => actions.handleChangeUsuario(e)}
													required
												/>
											</div>
										</div>

										<div className="row">
											<div className="container">
												<div className="container">
													<div className="row">
														<label htmlFor="exampleFormControlInput1">Telefono:</label>
													</div>
												</div>

												<div className="row pr-0 mr-0">
													<div className="col-4 pr-0 mr-0">
														<input
															className="form-control"
															id="exampleFormControlInput1"
															value={store.area}
															readOnly
															required
														/>
													</div>
													<div className="col-8 pl-1 mr-0 pr-0 ">
														<input
															className="form-control container-fluid"
															id="exampleFormControlInput1"
															onChange={e => actions.handleChangeUsuario(e)}
															value={store.usuario.phone}
															name="phone"
															required
															type="number"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								)}
								<div className="container">
									<div className="row">
										<label htmlFor="exampleFormControlInput1">Email</label>
										<input
											type="email"
											className="form-control"
											id="exampleFormControlInput1"
											value={store.usuario.email}
											name="email"
											onChange={e => actions.handleChangeUsuario(e)}
											required
										/>
									</div>
								</div>
								{!!store.showRolParams && (
									<div>
										<label htmlFor="exampleFormControlSelect1">Seleccionar Rol</label>
										<select
											className="form-control"
											id="exampleFormControlSelect1"
											value={store.usuario.rol}
											name="rol"
											onChange={e => actions.handleChangeUsuario4(e)}
											required
											disabled={store.selectRol}>
											<option>Elige una opcion...</option>
											<option>Administrador</option>
											<option>Profesor</option>
											<option>Check In</option>
										</select>
									</div>
								)}
								{!!(store.usuario.rol === "Profesor") && (
									<div className="form-group ">
										<label htmlFor="exampleFormControlSelect1">Seleccionar Aula</label>
										<select
											disabled={store.selectRol}
											className="form-control"
											id="exampleFormControlSelect1"
											name="classrooms"
											onChange={e => actions.handleChangeUsuario2(e)}
											required>
											<option>Elige una opcion...</option>
											<Context.Consumer>
												{({ store, actions }) => {
													if (store.cardArray.length > 0) {
														return store.cardArray.map((item, i) => {
															return (
																<option value={JSON.stringify(item)} key={i}>
																	{item.classroomName}{" "}
																	{!!(
																		store.usuario.classroomName ===
																		item.classroomName
																	) && "Seleccionada"}
																</option>
															);
														});
													}
												}}
											</Context.Consumer>
										</select>
									</div>
								)}

								{!!(store.usuario.rol === "Profesor" || store.usuario.rol === "Check In") && (
									<div className="row">
										<div className="col pr-1">
											<div className="row">
												<div className="col pr-1">
													<label htmlFor="horarioDesde">Horario:</label>
													<input
														className="form-control"
														id="startScheduleRank"
														placeholder="Desde"
														name="startScheduleRank"
														onChange={e => actions.handleChangeUsuario(e)}
														value={store.usuario.startScheduleRank}
														required
														disabled={store.selectRol}
														min="0"
														max="24"
														type="number"
													/>
												</div>
												<div className="col pl-1">
													<label htmlFor="horarioHasta" style={textColor}>
														.
													</label>
													<input
														className="form-control"
														id="finalScheduleRank"
														placeholder="Hasta"
														name="finalScheduleRank"
														onChange={e => actions.handleChangeUsuario(e)}
														value={store.usuario.finalScheduleRank}
														required
														disabled={store.selectRol}
														min="0"
														max="24"
														type="number"
													/>
												</div>
											</div>
										</div>

										<div className="col pl-2">
											<div className="form-group ">
												<label htmlFor="exampleFormControlSelect1">Seleccionar Dia</label>
												<select
													disabled={store.selectRol}
													className="form-control"
													id="exampleFormControlSelect1"
													name="dayUse"
													onChange={e => actions.handleChangeUsuario3(e)}
													required>
													<option value="Elige una opcion...">Elige una opcion...</option>
													<option value="Lunes">
														Lunes {!!(store.usuario.dayUse === "Lunes") && "Seleccionada"}
													</option>
													<option value="Martes">
														Martes {!!(store.usuario.dayUse === "Martes") && "Seleccionada"}
													</option>
													<option value="Miercoles">
														Miercoles{" "}
														{!!(store.usuario.dayUse === "Miercoles") && "Seleccionada"}
													</option>
													<option value="Jueves">
														Jueves {!!(store.usuario.dayUse === "Jueves") && "Seleccionada"}
													</option>
													<option value="Viernes">
														Viernes{" "}
														{!!(store.usuario.dayUse === "Viernes") && "Seleccionada"}
													</option>
													<option value="Sabado">
														Sabado {!!(store.usuario.dayUse === "Sabado") && "Seleccionada"}
													</option>
													<option value="Domingo">
														Domingo{" "}
														{!!(store.usuario.dayUse === "Domingo") && "Seleccionada"}
													</option>
												</select>
											</div>
										</div>
									</div>
								)}

								<div className="row ">
									<div className="col pr-1">
										<label htmlFor="exampleFormControlInput1">Contraseña</label>
										<input
											type="password"
											className="form-control"
											id="exampleFormControlInput1"
											value={store.usuario.password}
											name="password"
											onChange={e => actions.handleChangeUsuario(e)}
											disabled={store.showPasswoord}
											required
										/>
									</div>
									<div className="col pl-1">
										<label htmlFor="exampleFormControlInput1">Repetir Contraseña</label>
										<input
											type="password"
											className="form-control"
											id="exampleFormControlInput1"
											value={store.usuario.rPassword}
											name="rPassword"
											onChange={e => actions.handleChangeUsuario(e)}
											disabled={store.showPasswoord}
											required
										/>
									</div>
								</div>

								{!!store.sDayUse && (
									<div className="alert alert-danger" role="alert">
										Debes elegir un dia de uso y su horario de servicio
									</div>
								)}

								{!!store.rol && (
									<div className="alert alert-danger" role="alert">
										Elige un Rol correcto
									</div>
								)}

								{!!store.contraseña && (
									<div className="alert alert-danger" role="alert">
										Contraseña incorrecta o no coinciden.
									</div>
								)}
							</div>
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
