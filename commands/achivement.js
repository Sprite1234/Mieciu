const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  var embed = new Discord.RichEmbed()
  message.channel.send(
    {
      files: [`https://www.minecraftskinstealer.com/achievement/a.php?i=2&h=Achievement+Get%21&t=${args.join}%28%22+%22%29`]
    }
  )
}
module.exports.help ={
  name: "achivement"
}
