module.exports = {
  open: true,
  host: "0.0.0.0",
  port: 8088,
  https: false,
  hotOnly: false,
  proxy: {
    "/server": {
      target: "http:wwww.baidu.com/",
      ws: true,
      changOrigin: true
    }
  },
};