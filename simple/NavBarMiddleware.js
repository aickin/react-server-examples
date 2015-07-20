import React from "react";
import Navbar from "react-bootstrap/lib/Navbar";

export default class NavBarMiddleware {
	getElements(next) {
		return [
			<Navbar brand='react-server Examples'/>,
			...next()
		];
	}
}