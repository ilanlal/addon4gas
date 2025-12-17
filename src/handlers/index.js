const { EventHandler } = require('./core/EventHandler');
const { NavigationHandler } = require('./core/NavigationHandler');

// Expose handlers globally for testing and local Apps Script runtime
global.NavigationHandler = NavigationHandler;
global.EventHandler = EventHandler;