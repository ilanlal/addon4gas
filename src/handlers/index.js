const { EventHandler } = require('./core/EventHandler');
const { NavigationHandler } = require('./core/NavigationHandler');
const { SpreadsheetHandler } = require('./core/SpreadsheetHandler');

// Expose handlers to global scope for Apps Script
global.NavigationHandler = NavigationHandler;
global.EventHandler = EventHandler;
global.SpreadsheetHandler = SpreadsheetHandler;