const num = [1,2,3,4,5,6,7,8,9,10]

//const newnums = num.map( (number)=>{
//   return number + 10 
//} )

// CHAINING METHOD
//const newnums = num.map().map().filter()

const newnums = num
              .map( (nums)=> nums*10)
              .map( (nums)=> nums + 1 )
              .filter( (nums)=> nums >= 40 )
    
console.log(newnums);

