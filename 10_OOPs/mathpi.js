//Object.getOwnPropertyDescriptor(Math)

/*
console.log(Math.PI);
Math.PI = 7
console.log(Math.PI);  */

const obj = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(obj);

const chai = {
    name : 'ginger chai',
    price: 250,
    isAvailable : true
}
console.log(Object.getOwnPropertyDescriptor(chai,"isAvailable"));
/*
Object.defineProperty(chai,"isAvailable",{
    writable : false,
    enumerable : false,
})

console.log(Object.getOwnPropertyDescriptor(chai,"isAvailable"));
*/
