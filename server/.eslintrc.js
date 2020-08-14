module.exports = {
    extends: ['airbnb-base'],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    ignorePatterns: ['node_modules/'],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-use-before-define': ['error', { functions: false }],
        'max-len': ['error', { code: 120 }],
        'no-confusing-arrow': ['error', { allowParens: true }],
        'import/prefer-default-export': 'off',
        'no-plusplus': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js'],
            },
        },
    },
};
