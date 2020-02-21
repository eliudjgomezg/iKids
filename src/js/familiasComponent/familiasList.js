import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class FamiliasList extends React.Component {
	render() {
		let margin = { marginLeft: "10px" };
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					if (store.familias.length > 0) {
						return store.familias.map((item, i) => {
							return (
								<Fragment key={i}>
									<div className="container">
										<div className=" card card-body py-1 px-2 mb-1">
											<div className="row">
												<div className="col-lg-9 col-sm-12">Flia: {item.familyName}</div>
												<div className="col-lg-3 col-sm-12">
													<button
														type="button"
														className="btn btn-primary float-right"
														data-toggle="modal"
														data-target="#exampleModal2"
														onClick={e => actions.verFamilia(item, i)}>
														Ver
													</button>
													<button
														type="button"
														className="btn btn-secondary float-right mr-2 ml-2"
														onClick={() => actions.indextodeleteClassroon(item, i)}
														data-toggle="modal"
														data-target="#exampleModal">
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
														aria-label="Close"
														onClick={e => actions.deleteAddFamilia(e)}>
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div className="modal-body">
													¿Estas Segur@ que deseas eliminar esta familia?
												</div>
												<div className="modal-footer">
													<button
														type="button"
														className="btn btn-secondary"
														data-dismiss="modal"
														onClick={e => actions.deleteAddFamilia(e)}>
														Cancelar
													</button>
													<button
														type="button"
														className="btn btn-primary"
														onClick={e => actions.deleteFamilia(e, item, i)}
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
