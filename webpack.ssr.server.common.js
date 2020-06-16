module.exports = {
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x$/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: "ignore-loader"
            }
        ]
    }
};