const Discord = require('discord.js')
const fs = require('fs')
const Jimp = require('jimp')
module.exports.run = async (client, message, args) => {
message.channel.send(`https://www.minecraftskinstealer.com/achievement/a.php?i=2&h=Achievement+Get%21&t=${args.join}%28%22+%22%29`)
}
module.exports.help ={
  name: "achivement"
}
//`https://www.minecraftskinstealer.com/achievement/a.php?i=2&h=Achievement+Get%21&t=${args.join}%28%22+%22%29`
