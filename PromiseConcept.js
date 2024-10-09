const randomNumPromise =  new Promise((resolve,reject)=>{

setTimeout(() => {
    const randomValue = Math.random();

    if(randomValue>0.5)
{
    resolve(randomValue)
}
else
{
    reject(new Error("value is too small"));
    
}
}, 2000);

});


randomNumPromise.then(result =>{
    console.log("Promise is fulfilled",result)
}).catch(error=>{
    console.error("Promise is rejected",error)
})