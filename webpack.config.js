let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let mc = require("mini-css-extract-plugin");
// let cp = require("clean-webpack-plugin");
module.exports = {
  mode:"production",
  // mode: "development",
  entry: {
    "./js/index": "./src/js/index.js",
    "./js/xiangbao":"./src/js/xiangbao.js",
    "./js/clock":"./src/js/clock.js",
    "./js/concat":"./src/js/concat.js",
    './js/search':"./src/js/search.js",
    './js/present':"./src/js/present.js",
    './js/yuanjiannew':"./src/js/yuanjiannew.js",
    './js/new':"./src/js/new.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name]_bundle_[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(s|c)css$/,
        use: [
          // { loader: mc.loader },
          { loader:"style-loader"},
          { loader: "css-loader" },
          { loader: "sass-loader" },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [
                require("autoprefixer")({
                  overrideBrowserslist: [">0.15% in CN"]
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      },
      {
        test: /\.(htm|html)$/i,
        loader: "html-withimg-loader"
      },
     {
       test: /\.(woff|woff2|eot|ttf|otf)$/,
       use: [
         'file-loader',
       ]
     },
     {test:/\.css$/,use:['style-loader','css-loader']},
     {test:/\.(jpg|png|gif|bmp|jpeg|ico)$/,use: 'url-loader?limit=4000&name=img/[name].[ext]' },
      // {
      //   test: /\.(png|jpg|gif|jpeg)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: 'img/[name].[ext]'
      //       }
      //     },
      //     {
      //    loader:"url-loader"
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ //输出html文件1
      filename: 'index.html',     //生成html文件的文件名，默认是index.html
      template: './src/demo/index.html',     //本地html文件模板的地址
      chunks: ['./js/index']
  }),
  new HtmlWebpackPlugin({ 
      filename: 'xiangbao.html',
      template: './src/demo/xiangbao.html',
      chunks: ['./js/xiangbao']
  }),
  new HtmlWebpackPlugin({ 
    filename: 'concat.html',
    template: './src/demo/concat.html',
    chunks: ['./js/concat']
}),
new HtmlWebpackPlugin({ 
  filename: 'present.html',
  template: './src/demo/present.html',
  chunks: ['./js/present']
}),
new HtmlWebpackPlugin({ 
  filename: 'searchcard.html',
  template: './src/demo/searchcard.html',
  chunks: ['./js/search']
}),
new HtmlWebpackPlugin({ 
  filename: 'clock.html',
  template: './src/demo/clock.html',
  chunks: ['./js/clock']
}),
new HtmlWebpackPlugin({ 
  filename: 'news.html',
  template: './src/demo/yuanjiannew.html',
  chunks: ['./js/yuanjiannew']
}),
new HtmlWebpackPlugin({ 
  filename: 'new.html',
  template: './src/demo/new.html',
  chunks: ['./js/new']
}),

    new mc({
      // filename: "css/main.css"
    }),
    // new cp(["dist"])
  ],
  devServer: {
    progress: true,
    port: 8091,
    inline: true,
    open: true,
    compress: true,
    contentBase: "./dist/",
    historyApiFallback: true,
    proxy:{
      "/":{
        target:"http://localhost:8081"
      }
    }
  }
};
