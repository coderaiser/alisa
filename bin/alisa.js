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
        exec(argv.macos);
        break;
    
    case 'sunos':
        exec(argv.sunos);
        break;
    }
    
    function exec(cmd) {
        if (cmd)
            spawnify(cmd, function(error, json) {
                var stdout  = json.stdout,
                    stderr  = json.stderr;
                
                if (error || stderr)
                    console.error(error || stderr);
                else
                    console.log(stdout);
            });
    }
})();
