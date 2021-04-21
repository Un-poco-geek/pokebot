const { Message } = require("discord.js");

/**
 * 
 * @param {Message} ctx Message Context
 */
const ping = (ctx) => {
    return ctx.channel.send("`:ping_pong: Pong`")
}

module.exports = {ping}