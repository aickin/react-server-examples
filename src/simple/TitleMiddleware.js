export default class TitleMiddleware {

	getTitle(next) {
		// add our site name to the page title.
		return "React Examples | " + next();
	}

}
