"use strict";

// [run the app]
// $ npm install electron
// $ ./node_modules/.bin/electron .

const {app, nativeImage, Tray, Menu, BrowserWindow , shell } = require("electron");

//Server Node-red
const server = require("./resources/server");

let top = {}; // prevent gc to keep windows

app.once("ready", ev => {

    //Start Node-red
    server();

    // empty image as transparent icon: it can click
    // see: https://electron.atom.io/docs/api/tray/
    top.tray = new Tray(nativeImage.createEmpty());
    const menu = Menu.buildFromTemplate([
        {label: "Actions", submenu: [
            {label: "Open admin", click: (item, window, event) => {
                //console.log(item, event);
                shell.openExternal("http://localhost:1881/red/admin")
            }},
            {label: "Open Dashboard", click: (item, window, event) => {
                //console.log(item, event);
                shell.openExternal("http://localhost:1881/")
            }},
        ]},
        {type: "separator"},
        {role: "quit"}, // "role": system prepared action menu
    ]);
    top.tray.setToolTip("Server Start localhost:1881/red/admin");
    //top.tray.setTitle("Tray Example"); // macOS only
    top.tray.setContextMenu(menu);

    // Option: some animated web site to tray icon image
    // see: https://electron.atom.io/docs/tutorial/offscreen-rendering/
    top.icons = new BrowserWindow({
        show: false, webPreferences: {offscreen: true}});
    top.icons.loadFile("./resources/red.png");
    top.icons.webContents.on("paint", (event, dirty, image) => {
        if (top.tray) top.tray.setImage(image.resize({width: 16, height: 16}));
    });
});
app.on("before-quit", ev => {
    // BrowserWindow "close" event spawn after quit operation,
    // it requires to clean up listeners for "close" event
    top.win.removeAllListeners("close");
    // release windows
    top = null;
});