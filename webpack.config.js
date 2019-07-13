let path = require("path")
let html = require("html-webpack-plugin");
let mc = require("mini-css-extract-plugin")
module.exports = {
  mode: "development",
  entry: {
    index: "./entry.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(s|c)css$/, use: [
          { loader: mc.loader },
          { loader: "css-loader" },
          { loader: "sass-loader" },
          {
            loader: "postcss-loader",
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({
                  overrideBrowserslist: ['>0.15% in CN']
                })
              ]
            }
          },
        ]
      }
      ,{test:/\.js$/,use:[
        {loader:"babel-loader",options:{
          presets:["@babel/preset-env"]
        }}
      ]}
    ]
  },
  plugins: [
    new html({
      template: "./src/demo/index.html",
      filename: "index.html"
    }),
    new mc({
      filename: "canvas.css"
    })
  ],
  devServer:{
    progress:true,
    port:8090,
    inline:true,
    open:true,
    compress:true,
    contentBase:"./dist/",
  }
}