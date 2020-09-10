#!/usr/bin/env node

const program = require('commander');
const path = require('path');
const { exec } = require('child_process');
const { log,exit,figlet } = require('../lib/until');

const pak = require(path.join(process.cwd(),'/package.json'));


program.version(pak.version)
  .usage(`初始化项目模版`);

program
  .command('vue2 <name>')
  .description('初始化vue2.0模版')
  .action(function(name,cmd){
    // log('green',figlet.textSync('welcome'))
    require('../lib/download')('vue2',name)
  });

program
  .command('vue3 <name>')
  .description('初始化vue3.0项目模版')
  .action(function(name,cmd){
    log('red','😊 vue3.0模版文件正在建设中...') 
    exit()
  });

program
  .command('react <name>')
  .description('初始化react模版')
  .action(function(name,cmd){
    log('red','😊 react模版文件正在建设中...')
    exit()  
  });

program
  .command('angular <name>')
  .description('初始化angular模版')
  .action(function(name,cmd){
    log('red','😊 angular模版文件正在建设中...')
    exit() 
  });

program
  .command('*')
  .action(async function(){
    let child = await exec('node ./bin/start -h');
    child.stdout.pipe(process.stdout);
  });

program.parse(process.argv);