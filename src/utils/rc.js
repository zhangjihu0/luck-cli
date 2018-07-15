import {RC,DEFAULTS} from './contants';
//RC 是配置文件 DEFAULTS是默认配置

//promise化
import {promisify} from 'util';
import fs from 'fs';
//将对象转化为key=value的方式en,或者相反de;
import {decode,encode} from 'ini'

let exists = promisify(fs.exists);
let readFile = promisify(fs.readFile);
let writeFile = promisify(fs.writeFile);
export let get = async (k)=>{
    console.log(k);
    let has = await exists(RC);
    let opts;
    if(has){
        opts = await readFile(RC,'utf8');
        opts = decode(opts);
        return opts[k];
    }
    return "";
}
export let set= async (k,v)=>{
    let has = await exists(RC);

    let opts;
    if(has){
        opts = await readFile(RC,'utf8');
        opts = decode(opts);
        Object.assign(opts,{[k]:v});
    }else{
        opts = Object.assign(DEFAULTS,{[k]:v});
    }
        await writeFile(RC,encode(opts),'utf8');
}
export let remove= async (k)=>{
    let has = await exists(RC);
    let opts;
    if(has){
        opts = await readFile(RC,'utf8');
        opts = decode(opts);
        delete opts[k];
        await writeFile(RC,encode(opts),'utf8');
    }
}
export let getAll= async ()=>{
    let has = await exists(RC);
    console.log('49',has);
    let opts;
    if(has){
        opts = await readFile(RC,'utf8');
        opts = decode(opts);
        return opts;
    }
    return {

    }
}