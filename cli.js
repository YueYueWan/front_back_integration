/*
 * @Descripttion: 
 * @version: 
 * @Author: maoyueer
 * @Date: 2023-02-27 17:59:49
 * @LastEditors: maoyueer
 * @LastEditTime: 2023-02-27 18:16:02
 */
import arg from 'arg';
// 解析命令行参数为 options
function parseArgumentsIntoOptions(rawArgs) {
    // 使用 arg 进行解析
    const args = arg({
        '--git': Boolean,
        '--yes': Boolean,
        '--install': Boolean,
        '-g': '--git',
        '-y': '--yes',
        '-i': '--install',
    }, {
        argv: rawArgs.slice(2),
    });
    return {
        skipPrompts: args['--yes'] || false,
        git: args['--git'] || false,
        template: args._[0],
        runInstall: args['--install'] || false,
    }
}
export function cli(args) {
    // 获取命令行配置
    let options = parseArgumentsIntoOptions(args);
    console.log(options);
}

 