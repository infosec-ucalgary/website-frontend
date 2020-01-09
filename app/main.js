import router from './routing/index.js';
import Route from './routing/Route.js';

import homeView from './templates/home.js';
import aboutView from './templates/about.js';
import contactView from './templates/contact-us.js';
import resourcesView from './templates/resources.js';

var homeRoute = new Route('home', '/', homeView);
var aboutRoute = new Route('about', '/about', aboutView);
var contactRoute = new Route('contact', '/contact', contactView);
var resourcesRoute = new Route('resources', '/resources', resourcesView);

const routes = [ homeRoute, aboutRoute, contactRoute, resourcesRoute ];

router(routes);
