import {repoList,tagList, downloadLocal} from './utils/git.js';
import ora from 'ora';//loading
import inquirer from 'inquirer';
import { version } from 'core-js';
let install = async ()=>{//
    //下载模板 选择模板使用
    //通过配置文件 获取模板信息(有哪些模板)   
    let loading = ora(`fetch template......`);
    loading.start();
    let list  = await repoList();
    loading.succeed();
    list = list.map(({name})=>name);
    let answer = await inquirer.prompt([{
        type:'list',
        name:'project',
        choices:list,
        questions:'please choice template'
    }])
    let project = answer.project;
    console.log('20',answer)
    loading = ora('fetching tag ......');
    loading.start();
    list = await tagList(project);
    loading.succeed();
    list = list.map(({name})=>name)
    answer = await inquirer.prompt([{
        type:'list',
        name:'tag',
        choices:list,
        questions:'please choice tag'
    }])
    let tag = answer.tag;

    console.log(project,tag);
    //下载文件(先下载到缓存文件中)
    // luck-cli init
    
    //下载
    loading = ora('fetching tag ......');
    loading.start();
    await downloadLocal(project,tag);
    loading.succeed();
}
export default install;