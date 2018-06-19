const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Nie mogę znaleźć tego użytkownika");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Zgłoszono uużytkownika")
    .setColor("#00a9ff")
    .addField("Zgłoszony użytkownik", `${rUser} ID: ${rUser.id}`)
    .addField("Zgłoszono przez", `${message.author} ID: ${message.author.id}`)
    .addField("Na kanale", message.channel)
    .addField("O godzinie", message.createdAt)
    .addField("Powód", rreason);

    let reportschannel = message.guild.channels.find(`name`, "logi");
    if(!reportschannel) return message.channel.send("Nie mogę znaleć kanału `logi`");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "report"
}
