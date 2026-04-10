import fs from 'node:fs/promises'

// const contentBuffer = fs.readFileSync('./index.html', 'utf-8');
// const content = contentBuffer.toString();

// const content = fs.readFile('./index.html', (err, data) => {
//     console.log(data);
//     console.log(data.toString());
// });


const a = await fs.readFile('./index.html')
console.log(a.toString());
console.log("END");         
