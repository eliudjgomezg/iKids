import React, { Fragment } from "react";
import { Context } from "../store/appContext";

import { FamiliasList } from "../familiasComponent/familiasList";
import { AddApoderado } from "../familiasComponent/addApoderado";
import { ListApoderados } from "../familiasComponent/listApoderados";
import { ListHijos } from "../familiasComponent/listHijos";
import { AddHijos } from "../familiasComponent/addHijos";

export class Familias extends React.Component {
	render() {
		let margin = { marginBotton: "20px" };
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							{!!store.menu && (
								<Fragment>
									<div className="container my-2">
										<div className="row">
											<div className="col">
												<h1 className="m-0 p-0">Familias</h1>
											</div>
											<div className="col">
												<button
													className="btn btn-primary mt-2  float-right"
													onClick={e => actions.familyLastName(e)}>
													Agregar Familias
												</button>
											</div>
										</div>
									</div>
									<div className="container">
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
													<a
														className="dropdown-item"
														href="#"
														onClick={e => actions.familias(e)}>
														Todas las Familias
													</a>
												</div>
											</div>
										</div>
									</div>
								</Fragment>
							)}

							{!!store.alert && (
								<div className="alert alert-danger" role="alert">
									<h1 className="text-center m-0 p-0">
										¡¡¡Upsss. Es necesario crear Aulas antes de registrar familias!!!
									</h1>
								</div>
							)}
							{!!store.familyLastName && (
								<div className="container my-2">
									<div className="row">
										<div className="col float-right">
											<button
												className="btn btn-primary float-right"
												onClick={e => actions.familias(e)}>
												Volver
											</button>
										</div>
									</div>

									<form onSubmit={e => actions.addFamily(e)}>
										<div className="row my-5">
											<div className="col float-right">
												<label
													htmlFor="exampleFormControlInput1"
													className="float-right"
													onClick={e => actions.addFamily(e)}>
													Ingrese apellidos de la familia:
												</label>
											</div>
											<div className="col">
												<input
													className="form-control"
													placeholder="Ej: Gomez Gonzalez"
													value={store.familyName}
													name="familyName"
													onChange={e => actions.getData(e)}
													required
												/>
											</div>
											<div className="col">
												<button
													className="btn btn-primary"
													disabled={store.alert}
													type="submit">
													Crear Familia
												</button>
											</div>
										</div>
									</form>
								</div>
							)}
							{!!store.familyOptions && (
								<div className="card card-body py-2 mt-2 px-0">
									<div className="row px-0 mx-0">
										<div className="col-6 ml-0 pl-0">
											<button
												className="btn btn-primary ml-2"
												onClick={e => actions.addApoderado(e)}>
												Agregar Apoderados
											</button>
										</div>
										<div className="col-6 mr-0">
											<button className="btn btn-primary ml-2" onClick={e => actions.addHijo(e)}>
												Agregar Hijos
											</button>
										</div>
									</div>
									{!!store.alertt && (
										<div className="alert alert-danger" role="alert">
											<p className="text-center m-0 p-0">
												¡¡¡Upsss. Solo puedes agregar Hij@s con edades comprendidas entre{" "}
												{store.startAgeRank} y {store.finaltAgeRank} años!!!
											</p>
										</div>
									)}
								</div>
							)}
							{!!store.familiasss && <FamiliasList />}
							{!!store.editNewFamilia && (
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
													className="btn btn-primary ml-2"
													onClick={e => actions.editNewApoderados(e)}>
													Editar Apoderados
												</button>
											</div>
											<div className="col-6 ">
												<button
													className="btn btn-primary ml-2"
													onClick={e => actions.editNewHijo(e)}>
													Editar Hijos
												</button>
											</div>
										</div>
									</div>
									{!!store.alertt && (
										<div className="alert alert-danger" role="alert">
											<p className="text-center m-0 p-0">
												¡¡¡Upsss. Solo puedes agregar Hij@s con edades comprendidas entre{" "}
												{store.startAgeRank} y {store.finaltAgeRank} años!!!
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
							{!!store.goBackNewFamily && (
								<div className=" float-right mt-2 ">
									<button
										type="button"
										className="btn btn-secondary "
										data-toggle="collapse"
										data-target="#collapseExample"
										aria-expanded="false"
										aria-controls="collapseExample"
										onClick={e => actions.deleteNewFamilia(e)}>
										Cancelar
									</button>
									<button
										type="submit"
										className="btn btn-primary ml-1 mr-3"
										onClick={e => actions.goBack(e)}>
										Aceptar
									</button>
								</div>
							)}
							{!!store.goBackEditFamily && (
								<div className=" float-right mt-2 ">
									<button
										type="button"
										className="btn btn-secondary "
										data-toggle="collapse"
										data-target="#collapseExample"
										aria-expanded="false"
										aria-controls="collapseExample"
										onClick={e => actions.goBack(e)}>
										Cancelar
									</button>
									<button
										type="submit"
										className="btn btn-primary ml-1 mr-3"
										onClick={e => actions.goBack(e)}>
										Aceptar
									</button>
								</div>
							)}
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
