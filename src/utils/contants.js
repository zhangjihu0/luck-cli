import {version} from '../../package.json';

//查看当前的平台
//process.platform

export const VERSION = version;

//找到用户的根，目录

const HOME = process.env[process.platform ==='win32'?'USERPROFILE':'HOME'];

export const RC = `${HOME}/.luckclirc`;
// RC配置下载(模板)的地方；给github的api来用的
// export const DEFAULTS = {
//     registry:'luck-cli',//github 上的项目名称
//     type:'orgs'//用户
// }
export const DEFAULTS = {
    registry:'zhufeng-cli',//github的api 用的
    type:'orgs'//用户users/组织orgs
}
//下载目录
export const DOWNLOAD = `${HOME}/.template`;