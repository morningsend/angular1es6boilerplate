var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const ROOT_DIR = path.resolve(__dirname, "..");

module.exports = {
    context: path.resolve(ROOT_DIR, "src/"),
    entry: {
        app: "./index.js",
        vendor: ["babel-polyfill","angular", "rxjs", "angular-material"]
    },
    output: {
        path:  "./dist",
        filename: "bundle.js"
    },
    resolve: {
        root: ROOT_DIR,
        extensions: ["",".js"]
    },
    module: {
        loaders: [
            { 
                test: /\.js$/, 
                loader: "babel",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.scss$/,
                loader: "style!css!scss"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
        ]
}