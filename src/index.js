if("serviceWorker" in navigator){
    navigator.serviceWorker.register('sw.js').then(reg=>{
        console.log('in index.js');
        console.log(reg);
    }).catch(err=>{
        console.log('error');
        console.log(err);
    })
}