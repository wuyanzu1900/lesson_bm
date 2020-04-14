function f(n){
    const w = new Map(); //es6新的数据类型 map
    // 高层一样
    if(n>=40) throw new Error('内存溢出')
    if(n == 1)return 1;
    if(n == 2)return 2;
    if(w.has(n)){
        return w.get(n);
    }
    const ret = f(n-1) +f(n-2);
    // 存一下结果
    w.set(n,ret);
    // console.log(n,'------------')
    return ret;
}
console.log(f(29));