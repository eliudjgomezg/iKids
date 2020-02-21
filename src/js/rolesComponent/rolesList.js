import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import { RolesForm } from "../rolesComponent/rolesForm";

export class RolesList extends React.Component {
	render() {
		let verticalPosition = {
			margin: "0",
			position: "absolute",
			top: "87%",
			left: "90%"
		};
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					if (store.usuarios.length > 0) {
						return store.usuarios.map((item, i) => {
							return (
								<Fragment key={i}>
									<div className=" card card-body container py-1 px-2 mb-1">
										<div className="row">
											<div className="col-9">
												{item.rol}: {item.name}
											</div>
											<div className="col-3   ">
												<button
													type="button"
													className="btn btn-primary float-right"
													data-toggle="modal"
													data-target="#exampleModalScrollablexx"
													onClick={() => actions.editRol(item, i)}>
													Ver
												</button>
												<button
													type="button"
													className="btn btn-secondary float-right mr-2 ml-2"
													onClick={() => actions.indextodeleteClassroon2(item, i)}
													data-toggle="modal"
													data-target="#exampleModal">
													Eliminar
												</button>
											</div>
										</div>
									</div>

									<div
										className="modal fade"
										id="exampleModal"
										tabIndex="-1"
										role="dialog"
										aria-labelledby="exampleModalLabel"
										aria-hidden="true">
										<div className="modal-dialog" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="exampleModalLabel">
														ALERTA!!!
													</h5>
													<button
														type="button"
														className="close"
														data-dismiss="modal"
														aria-label="Close"
														onClick={e => actions.deleteAddUsuarios(e)}>
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div className="modal-body">
													¿Estas Segur@ que deseas eliminar este usuari@?
												</div>
												<div className="modal-footer">
													<button
														type="button"
														className="btn btn-secondary"
														data-dismiss="modal"
														onClick={e => actions.deleteAddUsuarios(e)}>
														Cancelar
													</button>
													<button
														type="button"
														className="btn btn-primary"
														onClick={e => actions.deleteUsuarios(item)}
														data-dismiss="modal">
														Eliminar
													</button>
												</div>
											</div>
										</div>
									</div>
								</Fragment>
							);
						});
					}
				}}
			</Context.Consumer>
		);
	}
}
