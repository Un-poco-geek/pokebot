const {Client} = require("discord.js")
const {sucess} = require("./logger")
const {ping} = require("./messages/ping")
//Load .env file
const client = new Client();
require("dotenv").config()

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

client.on("message",(ctx)=>{
    if(ctx.author.id === process.env.BOT_ID){
        return
    }
    let message = parseMessage(ctx.content)
    if(!message.prefix){
        return
    }
    // Only add ur command
    if(message.command === "ping"){
        return ping(ctx)
    }
    return ctx.channel.send("`No existe el comando para referencias use !help`")

})

client.login(process.env.TOKEN)
