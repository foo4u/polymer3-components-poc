module.exports = {
    extends: [
        "airbnb-base"
    ],
    plugins: ["import", "fp"],
    rules: {
        "comma-dangle": ["error", "never"],
        "no-confusing-arrow": "off",
        "arrow-params": "off",
        "no-unused-vars": ["error", { ignoreRestSiblings: true }],
        quotes: [2, "double"],
        "quote-props": ["error", "as-needed", { numbers: true }],
        indent: ["error", 4],
        "fp/no-arguments": "error",
        "fp/no-delete": "error",
        "import/no-extraneous-dependencies": [
            "error",
            { devDependencies: true }
        ]
    },
    env: {
        browser: true,
        node: false,
        commonjs: false,
        mocha: false
    }
};

if (process.env.NODE_ENV === "test") {
    module.exports.rules["react/no-find-dom-node"] = "off";
}
