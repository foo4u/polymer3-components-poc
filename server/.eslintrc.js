module.exports = {
    extends: [
        "airbnb-base"
    ],
    rules: {
        "comma-dangle": ["error", "never"],
        "no-confusing-arrow": "off",
        "no-path-concat": "off",
        "arrow-params": "off",
        "no-unused-vars": ["error", { ignoreRestSiblings: true }],
        quotes: [2, "double"],
        "quote-props": ["error", "as-needed", { numbers: true }],
        indent: ["error", 4]
    },
    env: {
        browser: false,
        node: true
    }
};
