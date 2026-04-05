const { Worker } = require("worker_threads");

new Worker("./a.js");
new Worker("./b.js");
new Worker("./c.js");

console.log("Done");
