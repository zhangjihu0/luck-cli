export let butterRequire = (absPath)=>{
    let module = require(absPath);
    console.log('sss',module);
    if(module.default){
        console.log('sss11',absPath);
        return module.default;
    }
    console.log('sss22',absPath);
    return module;
}