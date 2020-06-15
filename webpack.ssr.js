const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    target: "node",
    node: {
        __dirname: true
    },
    mode: "development",
    entry: {
        main: "./src/server/index.tsx",
        server: "./src/server/server.tsx"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "dist/server")
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/server/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ts|js)x$/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    "ignore-loader", //
                    "css-loader",   // 2.turn css into commonjs
                    "sass-loader"   // 1. turn scss into css
                ]
            }
        ]
    }
};