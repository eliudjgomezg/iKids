import React, { Fragment } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export class CreateFamily extends React.Component {
	render() {
		let style1 = { backgroundColor: "#C408BC" };
		let style2 = { color: "white" };
		let style3 = { color: "#C408BC", width: "100%" };
		let style4 = { backgroundColor: "#23D5F0" };
		let style5 = { height: "480px" };
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="page-content " style={style4}>
							<div className="form-v4-content createParent mt-3 heightPage">
								<div className="form-left heightPage " style={style1}>
									<h2>Estimad@ Apoderad@</h2>
									<p className="text-1" style={style2}>
										En el siguiente apartado, usted podra crear el perfil de su familia y de esta
										manera tener acceso a la escuela dominical
									</p>
									<p className="text-2" style={style2}>
										<span>iKids:</span> Te permitira agregar tus hij@s y amiguit@s que van contigo a
										la iglesia. A su vez podras registrar o eliminar cuando gustes, las personas que
										pueden entregar o retirar a los niñ@s en sus aulas de clase.
									</p>
								</div>
								<form
									className="form-detail heightPage"
									onSubmit={e => actions.createParentSession1(e, this.props.history)}>
									<div className="container pl-0">
										<div className="float-left">
											<h2 style={style3}>REGISTRO</h2>
										</div>
										<div className="float-right">
											<h2
												style={style3}
												onClick={e => actions.goBackLogin(e, this.props.history)}>
												<i
													className="fa fa-arrow-left float-right d-inline"
													aria-hidden="true"
												/>
											</h2>
										</div>
									</div>

									<div className="form-row">
										<label htmlFor="">Apellidos de la familia</label>
										<input
											type="text"
											name="name"
											value={store.usuario.name}
											onChange={e => actions.handleChangeUsuario(e)}
											className="input-text"
											required
											maxLength="40"
										/>
									</div>
									<div className="form-row">
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

									<div className="form-group">
										<div className="form-row form-row-1 ">
											<label htmlFor="password">Contraseña</label>
											<input
												type="password"
												name="password"
												id="password"
												value={store.usuario.password}
												onChange={e => actions.handleChangeUsuario(e)}
												className="input-text"
												placeholder="Contraseña debe ser superior a 8 caracteres"
												required
											/>
										</div>
										<div className="form-row form-row-1">
											<label htmlFor="rPassword"> Repetir Contraseña</label>
											<input
												type="password"
												name="rPassword"
												id="comfirm_password"
												className="input-text"
												value={store.usuario.rPassword}
												onChange={e => actions.handleChangeUsuario(e)}
												placeholder="Contraseña debe ser superior a 8 caracteres"
												required
											/>
										</div>
									</div>
									<div className="container-login100-form-btn">
										<div className="wrap-login100-form-btn">
											<div className="login100-form-bgbtn" />
											<button className="login100-form-btn" type="submit">
												Registrar
											</button>
										</div>
									</div>
									{!!store.alert && (
										<div className="form-left rounded-pill mt-3" style={style1}>
											<p className="text-1 text-center" style={style2}>
												Contraseña debe ser superior a 8 caracteres o no coinciden
											</p>
										</div>
									)}
									{!!store.status && (
										<div className="form-left rounded-pill  mt-3 py-0 px-1" style={style1}>
											<p className="text-1 text-center" style={style2}>
												¡¡¡Upsss Ya existe una familia creada con este correo electronico!!!
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
CreateFamily.propTypes = {
	history: PropTypes.object
};
