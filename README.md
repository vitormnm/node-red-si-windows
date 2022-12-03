
# node-red-si-windows

node-red executable for windows with the main industrial automation modules.

no need to install node-red and nodejs.
Using only Electron.js

Tested on windows 7 pro x64 ,  windows 7 x86, windows 10 x64 and windows 11 x64

![node-red-si](/resources/node-red-si-demonstration.gif) 


##  Installed modules:
    "node-red": "3.0.2",
    "node-red-contrib-cip-ethernet-ip": "1.1.3",
    "node-red-contrib-modbus": "5.23.3",
    "node-red-contrib-mssql-plus": "0.7.3",
    "node-red-contrib-nvl": "1.1.1",
    "node-red-contrib-opcua": "0.2.292",
    "node-red-contrib-pccc": "1.0.2",
    "node-red-contrib-s7": "3.1.0",
    "node-red-contrib-ui-led": "^0.4.11",
    "node-red-dashboard": "3.2.0",
    "node-red-node-mysql": "1.0.3",
    "node-red-node-ping": "0.3.3",
    "node-red-node-sqlite": "1.0.3",
    "node-red-node-ui-table": "0.4.3"
## Build

clone app, open the project directory

```bash
  npm install
```
Build 32 bits
```bash
  npm run build32
```
Build 64 bits
```bash
  npm run build64
```


## author

- [@vitormnm](https://www.linkedin.com/in/vitor-neves-940638152/)



[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


