const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.ssr.common");

module.exports = [merge(common, {
    target: "node",
    node: {
        __dirname: true
    },
    mode: "development",
    entry: "./src/server/server.tsx",
    output: {
        filename: "server.bundle.js",
        path: path.join(__dirname, "dist/server")
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
    ]
}), merge(common, {
    mode: "development",
    entry: "./src/server/index.tsx",
    output: {
        filename: "main.bundle.js",
        path: path.join(__dirname, "dist/server")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/server/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
    ]
})];