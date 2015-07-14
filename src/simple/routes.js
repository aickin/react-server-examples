module.exports = {

	middleware: [],

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
	}

};
