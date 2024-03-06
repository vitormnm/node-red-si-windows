
# node-red-si-windows

node-red executable for windows with the main industrial automation modules.

no need to install node-red and nodejs.
Using only Electron.js

Tested on windows 7 pro x64 ,  windows 7 x86, windows 10 x64 and windows 11 x64

![node-red-si](/resources/node-red-si-demonstration.gif) 


##  Installed modules:
- node-red
- node-red-contrib-cip-ethernet-ip
- node-red-contrib-modbus
- node-red-contrib-mssql-plus
- node-red-contrib-nvl
- node-red-contrib-opcua
- node-red-contrib-pccc
- node-red-contrib-s7
- @flowfuse/node-red-dashboard
- node-red-contrib-influxdb
- node-red-node-mongodb
- node-red-node-mysql
- node-red-node-ping
- node-red-node-sqlite
- node-red-contrib-aedes
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


