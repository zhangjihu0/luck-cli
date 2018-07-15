import request from 'request';
import {getAll} from './rc.js';
import downLoadGit from 'download-git-repo';
import {DOWNLOAD} from './contants';
let fetch =async (url)=>{
    return new Promise((resolve,reject)=>{
        let config = {
            url,
            method:'get',
            headers:{
                'user-agent':'xxx'
            }
        }
        console.log('14',config);
        request(config,(err,response,body)=>{
            if(err){
                reject(err);
            }
            resolve(JSON.parse(body));
        })
    })
}
export let tagList = async (repo)=>{
    let config = await getAll();
    console.log('24',config)
    let api = `https://api.github.com/repos/${config.registry}/${repo}/tags`
    // let api = `https://api.github.com/repos/zhufeng-cli/vue-template/tags`
    return await fetch(api); 
}
export let repoList = async ()=>{
    let config = await getAll();
    console.log('31',config)
    let api = `https://api.github.com/${config.type}/${config.registry}/repos`;
    // let api = `https://api.github.com/orgs/zhufeng-cli/repos`;
    return await fetch(api); 
}

export let download = async (src,dest)=>{
    return new Promise((resolve,reject)=>{
        downLoadGit(src,dest,(err)=>{
            if(err){
                reject();
            }
            resolve();
        });
    })
}
export let downloadLocal = async (project,version)=>{
    let conf = await getAll();
    console.log(47,conf);
    let api = `${conf.registry}/${project}`;
    if(version){
        api += `#${version}`;
    }
    console.log(55,api,DOWNLOAD+'/'+project);
    return await download(api,DOWNLOAD+'/'+project);
}