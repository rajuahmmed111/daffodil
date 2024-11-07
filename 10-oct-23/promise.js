const myPresent = true;

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        if(myPresent % 2 === 0){
            resolve('Bangladesh will  win in tne game');
        }
        else{
            reject('Bangladesh will not win in tne game');
        }
    })
})

myPromise.then( (res) => {
    console.log(res);
})
.catch( (error => {
    console.log(error);
}))

