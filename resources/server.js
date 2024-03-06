const path = require("path");

// ELECTRON-EXPRESS-QUICK-START: allows server.js to load when electron is ready
module.exports = () => {
  var http = require('http');
  var express = require("express");
  var RED = require("node-red");

  // Create an Express app
  var app = express();

  // Add a simple route for static content served from 'public'
  app.use("/", express.static("./static"));

  // Create a server
  var server = http.createServer(app);

  // Create the settings object - see default settings.js file for other options
  var settings = {
    flowFile: "flows_si.json",
    httpAdminRoot: "/red/admin",
    httpNodeRoot: "/",
    ui: { path: "/" },
    editorTheme: {
      page: {
        title: "Node-RED-SI"
      },
      projects: {
        enabled: true
    },
    },
    userDir: "./node-red",
    functionGlobalContext: {}    // enables global context
  };

  // Initialise the runtime with a server and settings
  RED.init(server, settings);

  // Serve the editor UI from /red
  app.use(settings.httpAdminRoot, RED.httpAdmin);

  // Serve the http nodes UI from /api
  app.use(settings.httpNodeRoot, RED.httpNode);

  server.listen(1880);

  // Start the runtime
  RED.start();
};
