import React from "react";
import App from "./components/App";
import * as base from "./css/base.css";
import * as css from "./css/index.css";

const URL_TO_FILTER = {
	"/completed" : "completed",
	"/active": "active",
}
export default class TodoPage {
	getTitle() { return "TodoMVC"; }

	getElements() { 
		const request = this.getRequest();
		return <App filter={URL_TO_FILTER[request.url]}/>; 
	}
}