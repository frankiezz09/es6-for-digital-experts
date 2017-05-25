// Module features are made available by babel-loaders on Webpack
// pre-installed in this workshop for convenience, but to note,
// imports and exports won't work without babel-loader until Javascript
// and browsers are able to support them.

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
} 

export { sum, subtract };