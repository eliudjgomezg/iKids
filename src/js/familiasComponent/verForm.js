import React, { Fragment } from "react";
import { AddApoderado } from "./addApoderado";
import { AddHijos } from "./addHijos";
import { ListApoderados } from "./listApoderados";
import { ListHijos } from "./listHijos";

import { Context } from "../store/appContext";

export class VerForm extends React.Component {
	render() {
		return (
			<Fragment>
				<div className="card card-body">
					<p>Apoderados agregados:</p>
					<ul className="list-group">
						<Context.Consumer>
							{({ store, actions }) => {
								return (
									<Fragment>
										<div className="form-group container">
											<div className="row">
												<div className="col-3">
													<label htmlFor="exampleFormControlInput1">
														Apellidos de la familia:
													</label>
												</div>
												<div className="col-9">
													<input
														className="form-control ml-0"
														id="exampleFormControlInput1"
														placeholder="Ejemplo: Perez Gonzalez"
														onChange={e => actions.setFamilialastName(e)}
														value={store.familia.familyName}
														name="familyName"
														required
													/>
												</div>
											</div>
										</div>
										<div className="container">
											<div className="row">
												<div className="col-6">
													<AddApoderado />
													<ListApoderados />
												</div>
												<div className="col-6">
													<AddHijos />
													<ListHijos />
												</div>
											</div>
										</div>
										{!!store.alert && (
											<div className="alert alert-danger" role="alert">
												Llenar todos los campos.
											</div>
										)}
									</Fragment>
								);
							}}
						</Context.Consumer>
					</ul>
				</div>
			</Fragment>
		);
	}
}
