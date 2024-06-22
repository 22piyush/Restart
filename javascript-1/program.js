const arr = [10,20,30,40,10,20]
let count=0;

for(let i=0;i<arr.length-1;i++)
    {
        for(let j=i+1;j<arr.length;j++)
            {
                  if(arr[i]==arr[j])
                    {
                        console.log(arr[i]);
                        count++;
                        
                    }
            }      
    }
    console.log(count) 
   