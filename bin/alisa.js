#!/usr/bin/env node

(function() {
    'use strict';
    
    var spawnify    = require('spawnify'),
        argv        = require('minimist')(process.argv.slice(2)),
        platform    = process.platform;
    
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
        var spawn;
        
        if (cmd) {
            spawn = spawnify(cmd);
            
            spawn.on('data', function(data) {
                process.stdout.write(data);
            });
            
            spawn.on('error', function(error) {
                console.error(error.message);
            });
            
            spawn.on('exit', function() {
                spawn = null;
            });
        }
    }
})();
