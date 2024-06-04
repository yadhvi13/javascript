// syntax
/*
for (let index = 0; index < 10; index++) {
    const element = index;
    if (element==5) {
        console.log("5 is best number");
    }
    console.log("value of array : ",element);
    
}
*/
for (let i = 1; i < 10; i++) {
   // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
      //  console.log(`Inner loop value: ${j} and Inner loop value: ${i}`);
   
     // console.log(i + '*' + j + '=' + i*j);
    }
}

let myarray = ["flash","batman","superman"]
//console.log(myarray.length);
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
   // console.log(element);
    
}

//KEYWORDS
//break and continue
for (let index = 1; index <= 20; index++) {
    if(index == 5){
      //  console.log(`detected 5`);
        break
    }
    //console.log(`value of i: ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i: ${index}`);
}