import React, { Fragment } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export class ForgotPasswoord extends React.Component {
	render() {
		let style1 = { backgroundColor: "#C408BC" };
		let style2 = { color: "white" };
		let style3 = { color: "#C408BC", width: "100%" };
		let style4 = { backgroundColor: "#23D5F0", height: "100vh" };
		let style5 = { width: "100px" };
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="page-content pt-3" style={style4}>
							<div className="form-v4-content mt-3 heightPage">
								<form
									className="form-detail heightPage"
									onSubmit={e => actions.forgotPassword(e, this.props.history)}>
									<div className="container pl-0">
										<div className="row">
											<div className=" col-6">
												<h2 className="float-left" style={style3}>
													Recuperar Contraseña
												</h2>
											</div>
											<div className="col-6">
												<h2
													className="float-right"
													style={style3}
													onClick={e => actions.goBackLogin(e, this.props.history)}>
													<i
														className="fa fa-arrow-left float-right d-inline"
														aria-hidden="true"
													/>
												</h2>
											</div>
										</div>
									</div>
									<div className="form-row mt-5">
										<label htmlFor="exampleFormControlSelect1">Seleccionar Rol</label>
										<select
											name="rol"
											className="form-control"
											id="exampleFormControlSelect1"
											onChange={e => actions.handleChangeUsuario(e)}>
											<option value="Elige una opcion...">Elige una opcion...</option>
											<option value="Servidor">Servidor</option>
											<option value="Apoderado">Apoderado</option>
										</select>
									</div>

									<div className="form-row mt-1">
										<label htmlFor="your_email">Email</label>
										<input
											type="text"
											name="email"
											value={store.usuario.email}
											onChange={e => actions.handleChangeUsuario(e)}
											id="your_email"
											className="input-text"
											required
											pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
										/>
									</div>

									<div className="container-login100-form-btn">
										<div className="wrap-login100-form-btn">
											<div className="login100-form-bgbtn" />
											<button className="login100-form-btn" type="submit">
												Recuperar
											</button>
										</div>
									</div>
									{!!store.noEmail && (
										<div className="form-left rounded-pill mt-3" style={style1}>
											<p className="text-1 text-center" style={style2}>
												Este email no esta registrado en nuestra base de datos
											</p>
										</div>
									)}
									{!!store.chooseRol && (
										<div className="form-left rounded-pill mt-3" style={style1}>
											<p className="text-1 text-center" style={style2}>
												Selecciona un rol correcto
											</p>
										</div>
									)}
								</form>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
ForgotPasswoord.propTypes = {
	history: PropTypes.object
};
