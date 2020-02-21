import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class AddHijos extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							<form onSubmit={e => actions.verifySon(e)}>
								<p>Agregar Hijos</p>
								<div className="card card-body  py-2">
									<div className="container">
										<div className="row">
											<label htmlFor="exampleFormControlInput1">Nombre Completo:</label>
											<input
												className="form-control"
												id="exampleFormControlInput1"
												onChange={e => actions.handleChangeHijo(e)}
												value={store.hijo.sonName}
												name="sonName"
												required
												type="text"
												maxLength="30"
											/>
										</div>
										<div className="row">
											<label htmlFor="exampleFormControlInput1">F. Nacimiento:</label>
											<input
												className="form-control"
												type="date"
												id="exampleFormControlInput1"
												onChange={e => actions.handleChangeHijo(e)}
												value={store.hijo.birthDate}
												name="birthDate"
												required
											/>
										</div>

										<div className="row">
											<label htmlFor="exampleFormControlInput1">Observaciones:</label>
											<textarea
												className="form-control"
												id="exampleFormControlTextarea1"
												rows="4"
												onChange={e => actions.handleChangeHijo(e)}
												value={store.hijo.notes}
												name="notes"
												maxLength="500"
												placeholder="Describa alguna condicion especial, enfermedad o lesion a considerar"
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
												onClick={e => actions.deleteAddHijo(e)}>
												Cancelar
											</button>
											<button type="submit" className="btn btn-primary ml-1 mr-3">
												Guardar
											</button>
										</div>
									</div>
									{!!store.maxParents && (
										<div className="alert alert-danger mt-3">
											<p className="text-center">
												<strong>Solo puedes agregar un maximo de 10 Hij@s </strong>
											</p>
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
