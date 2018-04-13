const path = require("path");
const { resolve } = require("path");

module.exports = {
    entry: {
        foo: "./src/foo/foo.js"
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "dist"),
        sourceMapFilename: "[name].map",
        publicPath: "/public/components/foo/",
        libraryTarget: "umd"
    },
    resolve: {
        modules: [
            path.resolve(__dirname, "node_modules")
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                exclude: /node_modules|dist/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "eslint-loader",
                        options: {
                            configFile: resolve(__dirname, "../../.eslintrc.js")
                        }
                    }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            {
                test: /foo\.css$/,
                use: [
                    "postcss-loader"
                ]
            }
        ]
    }
};
