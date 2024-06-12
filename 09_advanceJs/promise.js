// fetch('https://somthjing.com').then().catch().finally()

const promiseOne = new Promise(function(resolve , reject){
    // Do an ASync tasks
    // Db calls , cryptography, network

    setTimeout(function(){
        console.log('Async task is Complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
     console.log("Promise Consumed");
})                    //---> resolve


new Promise(function (resolve,reject) {
   setTimeout(function(){
    console.log("Async Task two");
    resolve()
   },1000) 
}).then(function(){
    console.log("Async 2 Resolved");
})


const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
       user = resolve({username : "Yogeeta", email : "yogeeta@example.com"})
    }, 1000)
})
PromiseThree.then(function(user){
   console.log(user);
})


const promisefour = new Promise(function(resolve,reject){
     setTimeout(function(){
     let error = true
     if(!error){
        resolve({username : "Hema", password : "345"})
      }
      else{
        reject('Error : Something went wrong')
      }
     },2000)
})
promisefour
.then((user)=>{
      console.log(user);
      return user.username
})
.then((myusername)=>{
    console.log(myusername)
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
   return console.log('finally the promise is either resolved or rejected');
})



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
           resolve({username : "js", password : "345"})
         }
         else{
           reject('Error : JS went wrong')
         }
     },2000)
});

async function consumedpromisefive(){
   try{
    const response = await promiseFive
    console.log(response);
   } catch(error){
    console.log(error);
   }
}
consumedpromisefive()



// async function getAllUsers(){
//    try {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//        console.log("E: ",error);
//    }
// }
// getAllUsers()



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    return console.log(data);
})
.catch((error)=>{
    return console.log(error);
})