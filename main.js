
// [run the app]
// $ npm install electron
// $ ./node_modules/.bin/electron .

const { app, nativeImage, Tray, Menu, BrowserWindow, shell } = require("electron");
const net = require('net');

const port = 1880;

const server = net.createServer();
server.once('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    PortBusy();
  } else {
    console.log(err);
  }
});

server.once('listening', () => {
  server.close();
  PortAvailable();
});

server.listen(port);

function PortBusy() {
  // close the application if the port is in use
  console.log("close the application if the port is in use");
  process.exit();
}

function PortAvailable() {
  // Execute a function if the port is available
  console.log("Execute a function if the port is available");
  //server_red Node-red
  const server_red = require("./resources/server");

  let top = {}; // prevent gc to keep windows



  Menu.setApplicationMenu(null);

  app.once("ready", ev => {

    //Start Node-red
    server_red();

    // empty image as transparent icon: it can click
    // see: https://electron.atom.io/docs/api/tray/
    top.tray = new Tray(nativeImage.createEmpty());
    const menu = Menu.buildFromTemplate([
      {
        label: "Actions", submenu: [
          {
            label: "Open admin", click: (item, window, event) => {
              //console.log(item, event);
              shell.openExternal("http://localhost:1880/red/admin")
            }
          },
          {
            label: "Open Dashboard", click: (item, window, event) => {
              //console.log(item, event);
              shell.openExternal("http://localhost:1880/dashboard")
            }
          },

        ]
      },
      { type: "separator" },
      {
        label: "local", submenu: [
          {
            label: "Open admin", click: (item, window, event) => {
              const winde = new BrowserWindow({ width: 800, height: 600 })
              // Load a remote URL
              winde.loadURL("http://localhost:1880/red/admin")
              winde.maximize()
            }
          },
          {
            label: "Open Dashboard", click: (item, window, event) => {
              const wind = new BrowserWindow({ width: 800, height: 600 })
              // Load a remote URL
              wind.loadURL("http://localhost:1880/dashboard")
              wind.maximize()
             
            }
          },

        ]
      },
      { type: "separator" },
      { role: "quit" }, // "role": system prepared action menu
    ]);
    top.tray.setToolTip("server_red Start localhost:1880/red/admin");
    //top.tray.setTitle("Tray Example"); // macOS only
    top.tray.setContextMenu(menu);

    // Option: some animated web site to tray icon image
    // see: https://electron.atom.io/docs/tutorial/offscreen-rendering/
    top.icons = new BrowserWindow({
      show: false, webPreferences: { offscreen: true }
    });
    top.icons.loadFile("./resources/red.png");
    top.icons.webContents.on("paint", (event, dirty, image) => {
      if (top.tray) top.tray.setImage(image.resize({ width: 16, height: 16 }));
    });
  });
  app.on("before-quit", ev => {
    // BrowserWindow "close" event spawn after quit operation,
    // it requires to clean up listeners for "close" event
    top.win.removeAllListeners("close");
    // release windows
    top = null;
  });
}
