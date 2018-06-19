const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
 let info  = new Discord.RichEmbed()
  .setColor(config.embed_color)
  .setThumbnail(message.guild.iconURL)
  .setTitle(`Informacje o serwerze ${message.guild.name}`)
  .addField("Właściciel", `${message.guild.owner}`, inline = true)
  .addField("Data założenia", `${message.guild.createdAt}`, inline = true)
  .addField("Podstawowe statystyki",`Userzy: ${message.guild.members.size}\nKanały: ${message.guild.channels.size}`, inline = true)
  .addField("Poziom zabezpieczeń", `${message.guild.verificationLevel}`, inline = true)
  .addField("Liczba ról", `${message.guild.roles.size}`, inline = true)
  .addField("Strefa",`${message.guild.region}`, inline = true)
  .addField("Dodano bota", `${message.guild.joinedAt}`)
  message.channel.send({embed: info});
}
module.exports.help = {
  name: "server.info"
}
