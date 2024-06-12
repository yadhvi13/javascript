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
