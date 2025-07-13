let products = [
 {
   id: "1",
   item: "Shirt"
 },
 {
   id: "2",
   item: "Jeans"
 },
 {
   id: "3",
   item: "T-shirt"
 },
 {
   id: "4",
   item: "Denim Jacket"
 },
 {
   id: "5",
   item: "Casual Shoes"
 }
];
let index = arr.indexOf(30);
if (index !== -1) {
    arr.splice(index, 1);
}
console.log(arr);