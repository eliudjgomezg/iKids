import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class Carddashboard extends React.Component {
	render() {
		return (
			<Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<Fragment>
								<div className="row mt-2">
									<div className="col">
										<h1 className="m-0 p-0">Aulas</h1>
									</div>
									<div className="col">
										<button
											className="btn btn-primary float-right mr-1 mt-2 "
											onClick={e => actions.formModal(e)}>
											Agregar Sala
										</button>
									</div>
								</div>

								<div className="input-group mb-1 mt-2">
									<input
										type="text"
										className="form-control"
										aria-label="Text input with dropdown button"
										placeholder="Filtrar por palabra clave"
										name="filterByWord"
										value={store.filterByWord}
										onChange={e => actions.filterByWord(e)}
									/>
									<div className="input-group-append">
										<button
											className="btn btn-outline-secondary dropdown-toggle"
											type="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false">
											Filtrar
										</button>
										<div className="dropdown-menu">
											<a className="dropdown-item" href="#" onClick={e => actions.dashboard(e)}>
												Todas las Aulas
											</a>
											<a className="dropdown-item" href="#" onClick={e => actions.filterByDay(e)}>
												Por dia de uso
											</a>
										</div>
									</div>
								</div>

								{!!store.alert && (
									<div className="alert alert-danger" role="alert">
										<p className="text-center">¡¡¡No hay Aulas asignadas para el dia de hoy!!!</p>
									</div>
								)}
							</Fragment>
						);
					}}
				</Context.Consumer>

				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							if (store.cardArray.length > 0) {
								return store.cardArray.map((item, i) => {
									return (
										<Fragment key={i}>
											<div className="container">
												<div className="row">
													<div className="col pl-3  d-inline">
														<div className="list-group-item py-1 mb-1 px-2">
															<div className="btn btn-primary">{item.classroomName}</div>{" "}
															/ CAPACIDAD: {item.sonsInClassroom} DE {item.capacity}
															<a
																href="#"
																className="btn btn-primary float-right mr-2"
																data-toggle="modal"
																data-target="#exampleModalScrollable"
																onClick={() => actions.setEditCard(item, i)}>
																Editar
															</a>
															<button
																type="button"
																className="btn btn-secondary float-right mr-2"
																data-toggle="modal"
																data-target="#exampleModal"
																onClick={e => actions.indextodeleteClassroon(item)}>
																Eliminar
															</button>
														</div>
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
																aria-label="Close">
																<span aria-hidden="true">&times;</span>
															</button>
														</div>
														<div className="modal-body">
															¿Estas Segur@ que deseas eliminar el aula?
														</div>
														<div className="modal-footer">
															<button
																type="button"
																className="btn btn-secondary"
																data-dismiss="modal">
																Cancelar
															</button>
															<button
																type="button"
																className="btn btn-primary"
																onClick={e => actions.deleteCard()}
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
				</div>
			</Fragment>
		);
	}
}
