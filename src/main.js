import program from 'commander';
import {version} from './utils/contants.js';
import main from './index.js';

// luck-cli config set a 1
// luck-cli install 
let actionMap = {
    install:{
        alias:'i',
        description:'install template',
        examples:[
            'luck-cli i',
            'luck-cli install'
        ]
    },
    config:{
        alias:'c',
        description:'config .luckclirc',
        examples:[
            'luck-cli config set <k> <v>',
            'luck-cli config get <k>',
            'luck-cli config remove <k>'
        ]
    },
    '*':{
        description:'not found',
        examples:[

        ]
    }
}

Object.keys(actionMap).forEach(action=>{
    program.command(action)
    .description(actionMap[action].description)
    .alias(actionMap[action].alias)
    .action(()=>{
        //判断一下你当前用的是什么操作；
        if(action ==='config'){
            // console.log('40',action,process.argv.slice(3))
            main(action,...process.argv.slice(3));
        }else if(action ==='install'){
            console.log('43',action);
            main(action);
            
        }

    })
})
 function help(){
     console.log('\r\n'+'how to use command');
     Object.keys(actionMap).forEach(action=>{
         actionMap[action].examples.forEach(example=>{
            console.log('   - '+example)
         })
     })
 }

program.on('-h',help);
program.on('--help',help);

program.version('1.0.0','-V --version').parse(process.argv);