const fs = require("fs");
const path = require('path');
const { log,exit,ora } = require('../lib/until');
const download = require('download-git-repo')

module.exports = async (type,name) => {
  const spinner = ora(`download templates ${type}`).start();
  let fullPath = path.join(process.cwd(),name)
  if(fs.existsSync(fullPath)){
    log("red",`当前目录已经存在${name}文件`)
    spinner.stop()
    exit()
  }
  return await new Promise((r,e)=>{
    download('direct:https://github.com/17612271145/templates.git', name, { clone: true }, function (err) {
      spinner.stop()
      if(err){
        log('red',err)
        exit(1)
      }
      log('green','⛽️ 项目初始化成功！')
    }) 
  })  
}