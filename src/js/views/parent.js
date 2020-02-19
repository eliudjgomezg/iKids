import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AddApoderado } from "../familiasComponent/addApoderado";
import { ListApoderados } from "../familiasComponent/listApoderados";
import { ListHijos } from "../familiasComponent/listHijos";
import { AddHijos } from "../familiasComponent/addHijos";
import { RolesForm } from "../rolesComponent/rolesForm";

import "jquery";

//create your first component
export class Parent extends React.Component {
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
										onClick={e => actions.parentFamily(e)}
										className="list-group-item list-group-item-action bg-light">
										Editar Familia
									</button>
									<button
										onClick={e => actions.configCheckIn(e)}
										className="list-group-item list-group-item-action bg-light">
										Editar Usuari@
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
									{!!store.parentFamily && (
										<div className="container">
											<div className="input-group mb-3 mt-2">
												<input
													type="text"
													className="form-control"
													placeholder="Ej: Gomez Gonzalez"
													aria-label="Recipient's username"
													aria-describedby="button-addon2"
													value={store.familyName}
													name="familyName"
													onChange={e => actions.getData(e)}
												/>
												<div className="input-group-append">
													<button
														className="btn btn-primary"
														type="button"
														id="button-addon2"
														onClick={e => actions.editFamilyName(e)}>
														Editar
													</button>
												</div>
											</div>

											<div className="card card-body py-2 px-0">
												<div className="row px-0 mx-0">
													<div className="col-6 ml-0 pl-0">
														<button
															className="btn btn-primary ml-2 "
															onClick={e => actions.editNewApoderados(e)}>
															Editar Apoderados
														</button>
													</div>
													<div className="col-6 mr-0">
														<button
															className="btn btn-primary  ml-2"
															onClick={e => actions.editNewHijo(e)}>
															Editar Hijos
														</button>
													</div>
												</div>
											</div>
											{!!store.alertt && (
												<div className="alert alert-danger" role="alert">
													<p className="text-center m-0 p-0">
														¡¡¡Upsss. Solo puedes agregar Hij@s con edades comprendidas
														entre {store.startAgeRank} y {store.finaltAgeRank} años!!!
													</p>
												</div>
											)}
										</div>
									)}
									{!!store.addApoderado && (
										<Fragment>
											<div className="container">
												<div className="row my-0">
													<div className="col-lg-6 col-sm-12">
														<AddApoderado />
													</div>
													<div className="col-lg-6 col-sm-12">
														<ListApoderados />
													</div>
												</div>
											</div>
										</Fragment>
									)}
									{!!store.addHijo && (
										<Fragment>
											<div className="container">
												<div className="row">
													<div className="col-lg-6 col-sm-12">
														<AddHijos />
													</div>
													<div className="col-lg-6 col-sm-12">
														<ListHijos />
													</div>
												</div>
											</div>
										</Fragment>
									)}

									{!!store.configCheckIn && (
										<Fragment>
											{!!store.userEdited && (
												<div className="alert alert-success mt-3">
													<p className="text-center">Usuario editado correctamente</p>
												</div>
											)}
											{!!store.existingRol && (
												<div className="alert alert-danger mt-3">
													<p className="text-center">
														<strong>Email asignando a otr@ usuari@.</strong>
														¡¡¡IMPORTANTE!!!: Tu Email es unicos. No se puede registrar dos
														usuari@s con el mismo Email.
													</p>
												</div>
											)}
											<div className="card card-body mt-2 px-1">
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
													onClick={e => actions.logedEditParent(e)}>
													Aceptar
												</button>
											</div>
										</Fragment>
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
Parent.propTypes = {
	history: PropTypes.object
};
