module.exports = {

	middleware: ["./TitleMiddleware", "./BootstrapMiddleware","./NavBarMiddleware"],

	routes: {
		Simple: {
			path: ['/simple'],
			method: 'get',
			page: "./SimplePage"
		},
		Ajax: {
			path: ['/ajax'],
			method: 'get',
			page: "./AjaxPage"
		},
		Index: {
			path: ['/'],
			method: 'get',
			page: "./IndexPage"
		},
		LargeStatic: {
			path: ['/largestatic'],
			method: 'get',
			page: "./LargeStaticPage"
		},
	}

};
