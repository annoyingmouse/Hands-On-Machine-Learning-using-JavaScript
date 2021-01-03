const SLR = require('ml-regression').SLR
const inputs = [80, 60, 10, 20, 30]
const outputs = [20, 40, 30, 50, 60]

let regression = new SLR(inputs, outputs)

console.log(regression.predict(80))