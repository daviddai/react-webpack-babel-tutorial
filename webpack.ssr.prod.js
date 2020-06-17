const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const clientCommon = require("./webpack.ssr.client.common");
const serverCommon = require("./webpack.ssr.server.common");

module.exports = [merge(serverCommon, {
    target: "node",
    node: {
        __dirname: true
    },
    mode: "production",
    entry: "./src/server/server.tsx",
    output: {
        filename: "server.bundle.js",
        path: path.join(__dirname, "dist/server")
    }
}), merge(clientCommon, {
    mode: "production",
    entry: "./src/server/index.tsx",
    output: {
        filename: "client.[contentHash].bundle.js",
        path: path.join(__dirname, "dist/server")
    },
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/client/index.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css"
        })
    ]
})];