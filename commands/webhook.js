const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
/*
  Send a message using a webhook
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create a new webhook
const hook = new Discord.WebhookClient('454310750127783947', 'EZFDVKeQAEJ7fp895HJnPlaMbMGCzNSqkPNWH6B8YiElfaH72vpqga4QyZLAuPHgaV-f');

// Send a message using the webhook
hook.send(args.join(" "));
}
module.exports.help = {
  name: "hook"
}
