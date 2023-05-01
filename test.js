const c = new Promise((resolve, reject)=>{
    resolve('a')
});

const res = await c;

console.log('res>>>', res)
