var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

const ROOT_DIR = path.resolve(__dirname, "..");

module.exports = {
    context: path.resolve(ROOT_DIR, "src/"),
    entry: {
        app: "./index.js",
        vendor: ["babel-polyfill","angular", "angular-route","rxjs", "angular-material", "angular-aria", "angular-animate", "angular-messages"]
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
                loader: ExtractTextPlugin.extract("style", ["css"])
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", ["css!sass"])
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Todo Angular 1",
            template: ROOT_DIR + "/src/index.ejs"
        }),

        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),

        new ExtractTextPlugin("style.css"),

        new CopyWebpackPlugin([
            {
                from: {
                    glob: "pages/**/*",
                    dot: true
                },
                to: "."
            }
        ])
    ],
    devServer: {
        contntBase: "./dist",
    }
}