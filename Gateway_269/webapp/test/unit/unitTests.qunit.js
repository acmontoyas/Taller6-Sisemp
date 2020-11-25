/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/sap/ua/Gateway_269/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});