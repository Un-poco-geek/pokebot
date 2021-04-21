const { Message } = require("discord.js")
const {error} = require("../logger")
class command{

    constructor(){
        this.command = []
    }

    /**
     * 
     * @param {string} commandName the name for call!
     * @param {Function} controller The controller for the call
     */
    addCommand(commandName,controller){
        if(commandName === ""){
            error("Ingrese un nombre valido")
            process.exit(1)
        }
        this.command.push({
            command: commandName,
            controller
        })
        console.log(this.command);
    }
    /**
     * 
     * @param {string} commandName Name of the command 2 run
     * @param {Message} ctx Context
     * @returns If command find runs that controller
     */
    run(commandName,ctx){
        console.log(commandName);
        for(let i in this.command){
            let comando = this.command[i];
            console.log(comando);
            if(comando.command === commandName){
                return comando.controller(ctx)
            }
        }
        return ctx.channel.send("`No existe el comando para referencias use !help`")
    }
}
let Commands = new command()
module.exports = {Commands}