const jwt = require( 'jsonwebtoken');

const token = jwt.sign({name: 'Bilal'}, "secret");

console.log(Buffer.from('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQmlsYWwiLCJpYXQiOjE3Njc1Mzk1NDB9','base64url').toString());

