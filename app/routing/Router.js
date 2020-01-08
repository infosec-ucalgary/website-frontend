export default class Router {
	constructor(routes = [], renderNode) {
		this.routes = routes;
		this.renderNode = renderNode;
		this.navigate(location.pathname + location.hash);
	}

	match(route, requestPath) {
		let paramNames = [];

		// Regex for route
		let regexPath = route.path.replace(/([:*])(\w+)/g, (full, colon, name) => {
			paramNames.push(name);
			return '([^\/]+)';
		}) + '(?:\/|+)';

		let params = {};

		// Match path w/ regex
		let routeMatch = requestPath.match(new RegExp(regexPath));
		if (routeMatch !== null) {
			params = routeMatch
				.slice(1)
				.reduce((params, value, index) => {
					if (params === null) params = {};
					params[paramNames[index]] = value;
					return params;
				}, null);
		}
		route.setProps(params);
		return routeMatch;
	}

	navigate(path) {
		const route = this.routes.filter(route => this.match(route, path))[0];
		if (!route) this.renderNode.innerHTML = "404 - Page not found";
		else {
			window.location.href = path.search('/#') === -1 ? '#' + path : path;

			// WORK ON THIS TO AVOID XSS
			this.renderNode.innerHTML = route.renderView();
			// WORK ON THIS TO AVOID XSS
		}
	}

	addRoutes(routes) {
		this.routes = [...this.routes, ...routes];
	}
}
