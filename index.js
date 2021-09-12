const bluetooth = require('node-bluetooth')

const device = new bluetooth.DeviceINQ();

device.listPairedDevices(console.log)

// device.on('finished', console.log(console, 'finished'))
device.on('found', (address, name) => {
    console.log({address, name})
}).scan()