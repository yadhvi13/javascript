let myName = "yogeeta     "
let myChannel = "chai     "

//console.log(myName.length);
//console.log(myChannel.trim().length);

let myHeros = ["thor","spiderman","shaktiman","hatim"]

let heropower = {
    thor : "hammer",
    spiderman : "sling",
    shaktiman : "Talvar",
    hatim : "Bhakti hi Shakti hai ",

    getspiderpower : function(){
        //console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    //console.log(`hitesh is present in all objects`);
}


Array.prototype.heyhitesh = function(){
   // console.log(`Hitesh says hello`);
}

heropower.hitesh()
myHeros.hitesh()
myHeros.heyhitesh()
//heropower.heyhitesh()-----> object fails here as hiearchy


//INHERITANCE

const user = {
    name : "chai",
    email : "chai@google.com"
}

const teacher ={
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : 'Js assignment',
    fullTime : true,
    __proto__ : teachingSupport
}

teacher.__proto__ = user

// modern Syntax
Object.setPrototypeOf(teachingSupport,teacher)

let anotherusername = "Javascript   "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.myName}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherusername.trueLength()
"hitesh".trueLength()
"icetea".trueLength()
