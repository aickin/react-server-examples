export default class BootstrapMiddleware {
	getHeadStylesheets(next) {
		return [
			"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css", 
			...next()
		];
	}
}