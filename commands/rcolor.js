const Discord = require("discord.js");
module.exports.run = async (client, message, args) =>{
  if(!message.member.roles.some(r=>["Admin","Administrator", "Moderator", "podkomisarze w Hyrule", "agent FBI w Hyrule", "właściciele", "Administracja"].includes(r.name)))
  return message.reply("Nie masz uprawnień")
  var name = args.join(" ").split(" | ")[0]
  const role = message.guild.roles.find("name", name)
  var color = args.join(" ").split(" | ")[1]
  role.setColor(color);
}
module.exports.help = {
  name: "role.color"
}
