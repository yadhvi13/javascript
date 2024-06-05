
const mynums = [1,2,3]
//const mytotal = mynums.reduce( function(accumulator,currentvalue) {
//    console.log(`accumulator : ${accumulator} and curvalue: ${currentvalue}`);
//    return accumulator + currentvalue
//}, 0 )


// BY ARROW FUNCTION
const mytotal = mynums.reduce( (accumulator,currentvalue)=>{
      return accumulator + currentvalue
},0 )
console.log(mytotal);

const shoppingcart = [
    {
    itemname : "js course",
    price : 2999
},
{
    itemname : "python course",
    price : 1999
},
{
    itemname : "java course",
    price : 3999
},
{
    itemname : "backened course",
    price : 999
},
]
const total = shoppingcart.reduce( (acc,item)=>{
    return  acc + item.price
},0 )
console.log(total);