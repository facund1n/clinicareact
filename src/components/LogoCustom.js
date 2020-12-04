import React from "react";
import logo from "../img/logo.png";

const LogoCustom = () => {
	return (
		<>
			<div className="mx-auto d-none d-sm-block d-md-block d-lg-block">
				<div className="d-flex justify-content-center my-5">
					<img src={logo} alt="logo" width="350px" />
				</div>
			</div>
			<div className="mx-auto d-block d-sm-none">
				<div className="d-flex justify-content-center my-2">
					<img src={logo} alt="logo" width="250px" />
				</div>
			</div>
		</>
	);
};

export default LogoCustom;
