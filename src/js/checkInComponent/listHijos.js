import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import { SelectClassroom } from "../checkInComponent/selectClassroom";

export class ListHijos extends React.Component {
	render() {
		return (
			<Fragment>
				<h5 className="text-center">Seleccionar Niñ@:</h5>
				<Context.Consumer>
					{({ store, actions }) => {
						if (store.hijos.length > 0) {
							return store.hijos.map((item, i) => {
								return (
									<Fragment key={i}>
										<div className="container">
											<div className=" card card-body py-1 px-2 mb-2">
												<div className="row">
													<div className="col-9">
														<div className="row">
															<div className="col-lg-3 align-items-endcol-sm-12">
																{item.sonName}
															</div>
															<div className="col-lg-9 col-sm-12">
																{item.age} Años, {item.classroomName}
															</div>
														</div>
													</div>
													<div className="col-3 mx-0 px-0">
														{item.fullClassroom || item.fullClassroom2 ? (
															<div />
														) : (
															<input
																className="toggle float-right mr-3"
																type="checkbox"
																onChange={e => actions.checkInSon(e, item, i)}
																disabled={store.status}
															/>
														)}
													</div>
												</div>
												{!!item.hBirthDate && (
													<div className="alert alert-success" role="alert">
														<p className="text-center my-auto">
															<strong>¡¡¡ESTOY DE CUMPLEAÑOSSSSSSS!!!</strong>
														</p>
													</div>
												)}
												{!!item.noClassroomAge && (
													<div className="alert alert-danger" role="alert">
														<p className="text-center my-auto">
															<strong>
																¡¡¡ Upss. Ho hay aulas habilidadas para la edad de este
																niñ@!!!
															</strong>
														</p>
													</div>
												)}

												{!!item.fullClassroom && (
													<div className="alert alert-danger" role="alert">
														<p className="text-center my-auto">
															<strong>
																¡¡¡
																{item.classroomName} esta llena !!!
															</strong>
														</p>
													</div>
												)}
											</div>
										</div>
									</Fragment>
								);
							});
						}
					}}
				</Context.Consumer>
			</Fragment>
		);
	}
}
