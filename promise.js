swal({
    title: "Task 3 , 4 , 5 & 6 ",
    text: "First Promise , Second promise , Third promise & Forth promise!",
  });

// PROMISE 1
  let promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name : "John" , age : 15, car : "Aston Martin" , colour:"yellow"})
    },1000)
})

promiseOne.then(function(pro1){
    console.log(pro1)
})
// PROMISE 2
let promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name : "John" , age : 15, car : "Aston Martin" , colour:"yellow"})
    },2000)
})

promiseTwo.then(function(pro2){
    return pro2.name;

}).then(function(ok){
    console.log(ok)
})
promiseTwo.then(function(done){
    return done.car;

}).then(function(done2){
    console.log(done2)
})

// PROMISE 3
let promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if (!error){
            resolve({color:"yellow"})
        }
        else{
            reject("rejected")
        }
    },3000)
})
async function consumedPromiseThree(){
    try{
        let pro3 = await promiseThree;
        console.log(pro3);
    }
    catch(error){
        console.log(error);
    }
}
consumedPromiseThree()
// PROMISE 4
let promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if (!error){
            resolve({name : "John" , age : 15, car : "Aston Martin" , colour:"yellow"})
        }
        else{
            reject("Error in this js function")
        }
    },4000)
})
async function consumedPromiseFour(){
    try{
        let pro4 = await promiseFour;
        console.log(pro4);
    }
    catch(error){
        console.log(error);
    }
}
consumedPromiseFour()

