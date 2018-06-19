const Discord = require("discord.js");
module.exports.run = async (client, message, args) =>{
var text = message.content.substring(1);

       // Reverse the message
       var reversed = '';
       var i = text.length;

       while (i > 0) {
           reversed += text.substring(i - 1, i);
           i--;
       }

       // Reply to the user's message
       message.reply(reversed);
   }
   module.exports.help = {
     name: "reverse"
   }
