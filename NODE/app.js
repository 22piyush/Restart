// common JS 
//--> Run Synchronously Run in main thread
// File extension optional
//if we give full file path We can load any file using cjs.
// it is a convention to add cjs in file extension
// we have to set type=commonjs in package.json its optional to set, because its default module system.
// in cjs this keyword points to module.exports by default
// cjs imports are not hoisted
// top level await is not allowed
// only one value exported in cjs
// import file or directory using __filename and __dirname
// Strict mode not enable by default


// ES6 Modules 
//--> Run Asynchronous run in background 
// File Extension Mandatory
// we cannot load any file, only js and mjs files are allowed
// it is a convention to add mjs in file extension
// we have to set type=module in package.json
// in mjs this keyword is undefined
// mjs import are hoisted
// top level await is allowed
// export multiple values in mjs
// import file or directory using import.meta
// string mode is enable by default