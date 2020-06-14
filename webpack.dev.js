const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = [merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // 3. inject style  into DOM
                    "css-loader",   // 2.turn css into commonjs
                    "sass-loader"   // 1. turn scss into css
                ]
            }
        ]
    }
}), {
    target: "node",
    mode: "development",
    entry: "./src/server.tsx",
    module: {
        rules: [
            {
                test: /\.(ts|js)x?/,
                exclude: /node_modules/,
                use: {
                    // use babel-loader to load jsx or tsx
                    loader: "babel-loader"
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    }
}];