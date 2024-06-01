// singelton Object

const tinderUser = new Object()
// const tinderUser = {} ---> non-singelton user

tinderUser.id = "123abs"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
//console.log(tinderUser["name"]);

const regularuser = {
    email: "xyz@gamil.com",
    fullname : {
        userfullname : {
            firstname : "yogeeta",
            lastname : "chhimwal",
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}


//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2}   // spread way 
//console.log(obj3);

const users = [
    {
    id : 1,
    email: "h@gmail.com",
    },
    {
        id : 2,
    email: "y@gmail.com",
    },
    {
        id : 3,
    email: "w@gmail.com",
    }
]
console.log(users[0].email)
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));