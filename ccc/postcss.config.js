const pxtorem = require("postcss-plugin-px2rem");

module.exports = ({ file }) => {
  let rootValue = 37.5
  return {
    plugins: [
      pxtorem({
        rootValue: rootValue,
        minPixelValue: 3
      })
    ]
  };
};
