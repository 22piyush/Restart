import {readFile} from 'node:fs/promises';

const filePath = new URL('./index.html', import.meta.url);

const contents = await readFile(filePath, {encoding:'utf-8'});

const data = {
    name:"Sanket Singh",
    company:"Google",
    age:25,
}


