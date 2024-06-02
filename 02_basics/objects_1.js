// singleton --> only by constructor
// Object.create --> singleton method 

// objects literals

const mysym = Symbol("Key1")

const JsUser = {
    name: "yogeeta",
    "full name" : "Yogeeta Chhimwal",
    [mysym]: "mykey1",
    age: 18,
    location: "faridabad",
    email: "yadhvi.ch@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
//console.log(JsUser.age)
//console.log(JsUser["age"]) 
//console.log(JsUser["full name"])  
//console.log(JsUser[mysym]) 
//console.log(typeof(JsUser[mysym])) 

JsUser.email="yogeeta@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email="yogeeta@youtube.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Yogeeta");
}

JsUser.greeting2= function(){
    console.log(`hello js user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());

