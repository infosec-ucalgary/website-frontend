import router from './routing/index.js';
import Route from './routing/Route.js';

import homeView from './templates/home.js';
import aboutView from './templates/about.js';
import contactView from './templates/contact-us.js';
import resourcesView from './templates/resources.js';

// Add other view imports here

var homeRoute = new Route('home', '/', homeView);
var aboutRoute = new Route('about', '/about', aboutView);
var homeRoute = new Route('contact', '/resources', contactView);
var homeRoute = new Route('resources', '/resources', resourcesView);

// Add other routes here

const routes = [ homeRoute, aboutRoute, contactRoute, resourcesRoute ];

router(routes);
