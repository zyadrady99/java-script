function new_pro(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            reslove("success");
        }, 3000)
    })
}

new_pro().then(m=>console.log(m));