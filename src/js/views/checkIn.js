import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { CheckInComp } from "../checkInComponent/checkInComp";
import PropTypes from "prop-types";
import { Novedades } from "../views/novedades";
import { RolesForm } from "../rolesComponent/rolesForm";

import "jquery";

//create your first component
export class CheckIn extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							<div className="bg-light border-right" id="sidebar-wrapper">
								<div className="sidebar-heading">iKids </div>
								<div className="list-group list-group-flush">
									<button
										onClick={e => actions.checkIn(e)}
										className="list-group-item list-group-item-action bg-light">
										CheckIn
									</button>
									<button
										onClick={e => actions.novedades(e)}
										className="list-group-item list-group-item-action bg-light">
										Novedades
									</button>
									<button
										onClick={e => actions.configCheckIn(e)}
										className="list-group-item list-group-item-action bg-light">
										Editar Usuari@
									</button>
									<button
										className="list-group-item list-group-item-action bg-light"
										onClick={e => actions.reportError()}>
										<strong>¡¡¡REPORTA ERRORES!!!</strong>
									</button>
								</div>
							</div>

							<div id="page-content-wrapper">
								<nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
									<button
										className="btn btn-primary"
										id="menu-toggle"
										data-toggle="toggled"
										data-target="#sidebar-wrapper"
										onClick={() => actions.wrapper()}>
										Menu
									</button>

									<button
										className="navbar-toggler"
										type="button"
										data-toggle="collapse"
										data-target="#navbarSupportedContent"
										aria-controls="navbarSupportedContent"
										aria-expanded="false"
										aria-label="Toggle navigation">
										<span className="navbar-toggler-icon" />
									</button>

									<div className="collapse navbar-collapse" id="navbarSupportedContent">
										<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
											<li className="nav-item active">
												<button
													className="btn btn-primary float-right"
													onClick={e => actions.logout(e, this.props.history)}>
													Logout <span className="sr-only">(current)</span>
												</button>
											</li>
										</ul>
									</div>
								</nav>

								<div className="container">
									{!!store.checkIn && <CheckInComp />}
									{!!store.novedades && <Novedades />}
									{!!store.configCheckIn && (
										<Fragment>
											<div className="card card-body mt-2 px-1">
												{!!store.userEdited && (
													<div className="alert alert-success mt-3">
														<p className="text-center">Usuario editado correctamente</p>
													</div>
												)}
												{!!store.existingRol && (
													<div className="alert alert-danger mt-3">
														<p className="text-center">
															<strong>Rut o Email asignando a otr@ usuari@.</strong>
															¡¡¡IMPORTANTE!!!: El Rut y Email son unicos. No se puede
															registrar dos usuari@s con el mismo rut o Email.
														</p>
													</div>
												)}
												<p className="ml-3 mb-0">
													<strong>Editar Perfil</strong>
												</p>
												<RolesForm />
											</div>
											<div>
												<button
													type="button"
													className="btn btn-primary float-right mt-2 mr-5 "
													data-toggle="modal"
													data-target="#exampleModal2"
													onClick={e => actions.logedEditRol(e)}>
													Aceptar
												</button>
											</div>
										</Fragment>
									)}
									{!!store.reportar && (
										<div className="card card-body container mt-3">
											<p className="text-center">
												Hola, iKids se presenta temporalmente como una version de prueba y por
												esta razon te insto a que si detectas algun error, describe cuando y
												como ocurrio. De ser posible envia capturas de pantalla para ayudarnos a
												corregirlo a la brevedad posible. Atentmente, Equipo de desarrollo iKids
											</p>
											<p className="text-center">iKids Version 1.0Beta</p>
											<a className="btn btn-primary container" href="mailto:eliud@autobots.cl">
												Reportar error
											</a>
										</div>
									)}
								</div>
							</div>
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
CheckIn.propTypes = {
	history: PropTypes.object
};
