module.exports = {
    plugins: {
        "postcss-import": {},
        "postcss-mixins": {},
        "postcss-cssnext": {
            browsers: [
                "last 10 Chrome version",
                "last 10 Firefox version",
                "last 2 Edge version",
                "safari >= 10"
            ]
        }
    }
};
