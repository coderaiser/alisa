#!/usr/bin/env node

'use strict';

const spawnify = require('spawnify/legacy');
const argv = require('minimist')(process.argv.slice(2));
const platform = process.platform;

switch(platform) {
case 'win32':
    exec(argv.win);
    break;

case 'linux':
    exec(argv.linux);
    break;

case 'darwin':
    exec(argv.darwin);
    break;

case 'sunos':
    exec(argv.sunos);
    break;
}

function exec(cmd) {
    if (!cmd)
        return;
    
    const spawn = spawnify(cmd);
    
    spawn.on('data', (data) => {
        process.stdout.write(data);
    });
    
    spawn.on('error', (error) => {
        console.error(error.message);
    });
    
    spawn.on('exit', () => {
        spawn = null;
    });
}

