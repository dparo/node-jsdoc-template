module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: "standard-with-typescript",
    overrides: [
        {
            env: {
                node: true,
            },
            files: ["src/**/*.js", "test/**/*.js"],
            parserOptions: {
                sourceType: "script",
                project: "./jsconfig.json",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {},
};
