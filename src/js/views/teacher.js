import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Classroom } from "../teachersComponet/classroom";
import { EditRol } from "../teachersComponet/editRole";
import { Novedades } from "../views/novedades";
import { RolesForm } from "../rolesComponent/rolesForm";

import "jquery";

//create your first component
export class Teacher extends React.Component {
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
										className="list-group-item list-group-item-action bg-light"
										onClick={e => actions.classroom(e)}>
										Aula
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
												<Link className="btn btn-primary float-right" to="/">
													Logout <span className="sr-only">(current)</span>
												</Link>
											</li>
										</ul>
									</div>
								</nav>

								<div className="container-fluid">
									{!!store.classroom && <Classroom />}
									{!!store.novedades && <Novedades />}
									{!!store.configCheckIn && (
										<Fragment>
											<div className="card card-body mt-2 px-2">
												<p className="mb-0">
													<strong>Editar Usuari@</strong>
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
								</div>
							</div>
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
