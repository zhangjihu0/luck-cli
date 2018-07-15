
//命令行的命令拿到后 这个就是主的流程控制；
import { butterRequire } from './utils/common.js';
import {resolve} from 'path';
let apply = (action,...args)=>{
    console.log('6',action,args);
    // babel-env export default =>module.exports={default:XXX}
    let moduleDefault = butterRequire(resolve(__dirname,`./${action}`));
    moduleDefault(...args)
}
export default apply;
