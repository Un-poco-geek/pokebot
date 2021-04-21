const {Client} = require("discord.js")
const {sucess} = require("./logger")
// Commands
const {ping} = require("./messages/ping")
const {PokeCommands} = require("./messages/pokeapi")

//Load .env file
const client = new Client();
require("dotenv").config()

//Import command controller
const {Commands} = require("./messages/commands")

client.on("ready",()=>{
    sucess(`Bot inicado como ${client.user.tag}`)
})

const parseMessage = (message) => {
    if(!message.startsWith(process.env.PREFIX)){
        return {
            prefix: false
        }
    }
    let prefix = message.split(process.env.PREFIX)[1];
    let msgWithoutPrefix = prefix.split(" ")
    let args = msgWithoutPrefix.slice(1).map(i => `${i} `).join("")
    return {
        prefix: true,
        command: msgWithoutPrefix[0],
        args
    }
}

// Add commands
Commands.addCommand("ping",ping)
Commands.addCommand("pokedex",PokeCommands.pokedex)

client.on("message",(ctx)=>{
    if(ctx.author.id === process.env.BOT_ID){
        return
    }
    let message = parseMessage(ctx.content)
    if(!message.prefix){
        return
    }
    // Only add ur command
    
    Commands.run(message.command,ctx)

})

client.login(process.env.TOKEN)
