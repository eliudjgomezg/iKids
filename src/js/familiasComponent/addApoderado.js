import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class AddApoderado extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							<form onSubmit={e => actions.setApoderado1(e)}>
								<p>Agregar Apoderado</p>
								<div className="card card-body  py-2">
									<div className="container">
										<div className="row">
											<label htmlFor="exampleFormControlInput1">Nombre Completo:</label>
											<input
												className="form-control"
												id="exampleFormControlInput1"
												onChange={e => actions.handleChangeApoderado(e)}
												value={store.apoderado.parentName}
												name="parentName"
												required
											/>
										</div>
										<div className="row">
											<label htmlFor="exampleFormControlInput1">Rut:</label>
											<input
												className="form-control"
												id="exampleFormControlInput1"
												onChange={e => actions.handleChangeApoderado(e)}
												value={store.apoderado.rut}
												name="rut"
												required
											/>
										</div>

										<div className="row">
											<div className="container">
												<div className="row">
													<label htmlFor="exampleFormControlInput1">Telefono:</label>
												</div>
											</div>
											<div className="row">
												<div className="col-3 pr-0">
													<input
														className="form-control "
														id="exampleFormControlInput1"
														value={store.area}
														readOnly
														required
													/>
												</div>
												<div className="col pl-1 ">
													<input
														className="form-control"
														id="exampleFormControlInput1"
														onChange={e => actions.handleChangeApoderado(e)}
														value={store.apoderado.phone}
														name="phone"
														required
													/>
												</div>
											</div>
										</div>

										<div className="row">
											<label htmlFor="exampleFormControlInput1">Email:</label>
											<input
												className="form-control"
												id="exampleFormControlInput1"
												onChange={e => actions.handleChangeApoderado(e)}
												name="email"
												value={store.apoderado.email}
												required
											/>
										</div>

										<div className="row float-right mt-2 ">
											<button
												type="button"
												className="btn btn-secondary "
												data-toggle="collapse"
												data-target="#collapseExample"
												aria-expanded="false"
												aria-controls="collapseExample"
												onClick={e => actions.deleteAddApoderado(e)}>
												Cancelar
											</button>
											<button
												className="btn btn-primary ml-1 mr-3"
												type="button"
												onClick={() => actions.verifyParent()}
												disabled={store.disabledSaveParent}>
												Guardar
											</button>
										</div>
									</div>
									{!!store.maxParents && (
										<div className="alert alert-danger mt-3">
											<p className="text-center">
												<strong>Solo puedes agregar un maximo de 10 Apoderados </strong>
											</p>
										</div>
									)}
									{!!store.existingRut && (
										<div className="alert alert-danger mt-3">
											<p className="text-center">
												<strong>Rut asignando a otra familia. </strong>
												¡¡¡IMPORTANTE!!!: Un apoderad@ solo puede pertenecer a una familia. Si
												deseas ser Apoderad@ del hij@ de otra persona, debes agregarlo a tu
												lista de hij@s y ser tu quien l@ registre en el checkIn
											</p>
										</div>
									)}
									{!!store.verifyParent && (
										<div className="alert alert-danger mt-3">
											<p>
												ESTIMADO USUARIO: AL AGREGAR UN APODERA@, USTED LE OTORGA LA POTESTAD DE
												RETIRAR A CUALQUIER HIJ@ ASOCIADO A ESTA FAMILIA
											</p>
											<p>Por favor verificar nuevamente los datos del nuev@ Apoderad@</p>
											<p>Nombre: {store.apoderado.parentName}</p>
											<p>Rut: {store.apoderado.rut}</p>
											<p>email: {store.apoderado.email}</p>

											<div className="modal-footer">
												<button
													type="button"
													className="btn btn-secondary"
													onClick={e => actions.deleteAddApoderado(e)}
													data-dismiss="modal">
													Cancelar
												</button>
												<button className="btn btn-primary" type="submit">
													Guardar
												</button>
											</div>
										</div>
									)}
								</div>
							</form>
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
