module.exports = {
    entry: {
        main: "./src/index.tsx",
        vendor: "./src/vendor.tsx"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?/,
                exclude: /node_modules/,
                use: {
                    // use babel-loader to load jsx or tsx
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: "html-loader"
            }
        ]
    }
};