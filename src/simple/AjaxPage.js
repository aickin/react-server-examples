const React = require("react");
const loader = require("react-server").TritonAgent;

module.exports = class AjaxPage {
	getTitle(next) { return "Ajax"; }
	
	handleRoute (next) {
		this.dataPromise = loader.get("http://echo.jsontest.com/name/Lara").asPromise() ;
		return next();
	}
	
	getElements (next) {
		return [
			this.dataPromise.then((response) => {
				return <div>Hello {response.body.name}!</div>
			})
		];
	}
}
