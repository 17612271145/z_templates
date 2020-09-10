const chalk = require('chalk');
const figlet = require('figlet');
const ora = require('ora');

module.exports = {
  figlet,
  ora,
  log:(type,content)=>{
    console.log(chalk[type](content))
  },
  clear:()=>{
    console.clear()
  },
  exit:(code)=>{
    process.exit(code)
  }
}