const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const clientCommon = require("./webpack.ssr.client.common");
const serverCommon = require("./webpack.ssr.server.common");

module.exports = [merge(serverCommon, {
    target: "node",
    node: {
        __dirname: true
    },
    mode: "development",
    entry: "./src/server/server.tsx",
    output: {
        filename: "server.bundle.js",
        path: path.join(__dirname, "dist/server")
    }
}), merge(clientCommon, {
    mode: "development",
    entry: "./src/server/index.tsx",
    output: {
        filename: "client.bundle.js",
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