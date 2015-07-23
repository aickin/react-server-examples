import React from "react";
import {TritonAgent as loader} from "@aickin/react-server";
import FullWidthGrid from "./components/FullWidthGrid";

export default class AjaxPage {
	handleRoute (next) {
		this.dataPromise = loader.get("http://echo.jsontest.com/name/Lara").asPromise() ;
		return next();
	}
	
	getTitle(next) { return "Ajax"; }

	getElements (next) {
		return [
			this.dataPromise.then((response) => {
				return (
					<FullWidthGrid>
						<h3>Hello <strong>{response.body.name}</strong>!</h3>
					</FullWidthGrid> 
				);
			})
		];
	}
}
