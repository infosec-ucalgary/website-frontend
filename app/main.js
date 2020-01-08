// Import routing
import router from './routing/index.js';
import Route from './routing/Route.js';

// Import templates/views
import homeView from './templates/home.js';
import aboutView from './templates/about.js';
//import loginView from './templates/login.js'; // Not for now
//import registerView from './templates/register.js'; // Not for now
import contactView from './templates/contact-us.js';
import resourcesView from './templates/resources.js';

// Create routes for each page
var homeRoute = new Route('home', '/', homeView);
var aboutRoute = new Route('about', '/about', aboutView);
var homeRoute = new Route('contact', '/resources', contactView);
var homeRoute = new Route('resources', '/resources', resourcesView);

const routes = [ homeRoute, aboutRoute, contactRoute, resourcesRoute ];

router(routes);
