/* const coding = ["js","cpp","ruby","python","java"]

const values = coding.forEach( (item)=> {
//console.log(item);
return item
} )
console.log(values);
*/


//in FILTER() condition should be given, the condition should be satisfy 
const mynum = [1,2,3,4,5,6,7,8,9,10]

const newnum = mynum.filter( (num)=> {
   return num > 4 // return should be here, because here {} starts a scope
} )
//console.log(newnum);



//WITH FOREACH()
const newnumber = []

mynum.forEach( (num)=>{
    if (num > 4) {
        newnumber.push(num)
    }
} )
//console.log(newnumber);


//EXAMPLE :-

const books = [
    {
    title:"book one", genre:"Fiction",publish: 1981,edition: 2004
},
{
    title:"book two", genre:"non-Fiction",publish: 1983,edition: 2004
},
{
    title:"book three", genre:"Game",publish: 1985,edition: 2004
},
{
    title:"book four", genre:"history",publish: 1988,edition: 2004
},
{
    title:"book five", genre:"science",publish: 1990,edition: 2008
},
{
    title:"book six", genre:"Fiction",publish: 1993,edition: 2010
},
{
    title:"book seven", genre:"non-Fiction",publish: 1998,edition: 2012
},
{
    title:"book eight", genre:"history",publish: 2011,edition: 2014
},
{
    title:"book nine", genre:"Game",publish: 2018,edition: 2020
},
];

//let userbooks = books.filter( (bk)=> {
//    return bk.genre == "history"
//} )
const userbooks = books.filter( (bk)=> {
    return bk.publish >= 1995 && bk.genre==="history"
} )
console.log(userbooks);