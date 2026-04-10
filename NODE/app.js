import { readFile } from 'node:fs/promises'

const fileContent = await readFile('./file-1.txt', 'utf-8')

const data = {}

for (let word of fileContent.split(" ")) {
     
    if(word in data){
        data[word] += 1
    }else{
        data[word] = 1
    }
}

console.log(data);


