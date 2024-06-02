{}//....scope; come with functions, if-else statements etc,

//var c = 300..GLOBAL SCOPE
let a = 300
if(true){
    let a = 10
    const b = 20
    //console.log("INNER: ", a);
   // for (let i = 0; i < array.length; i++) {
    //    const element = array[i];
        
   // }
} // LOCAL SCOPE

//console.log(a);

// NESTED SCOPES
function one(){
    const username = "yogeeta"

    function two(){
        const website = "google"
     //   console.log(username);
    }
    //console.log(website);
    two()
}
//one()

if(true){
    const username= "sammy"
    if(username==="sammy"){
        const website=" youtube"
    //   console.log(username + website);
    }
  //  console.log(website); .. scope is global, hence not used
}
//console.log(username); 

// EXAMPLE ********
console.log(addone(5))
function addone(value){
    return value + 1
}

addtwo(5)
const addtwo = function(num){
    return num + 2
}
