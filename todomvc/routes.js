module.exports = {

	middleware: [],

	routes: {
		TodoMvc: {
			path: ["/"],
			method: "get",
			page: "./TodoMvcPage"
		},
		TodoMvc2: {
			path: ["/active"],
			method: "get",
			page: "./TodoMvcPage"
		},
		TodoMvc3: {
			path: ["/completed"],
			method: "get",
			page: "./TodoMvcPage"
		},
	}

};
