const Discord = require('discord.js')
const fs = require('fs')
const Jimp = require('jimp')
module.exports.run = async (client, message, args) => {
  Jimp.read(`https://www.minecraftskinstealer.com/achievement/a.php?i=2&h=Achievement+Get%21&t=${args.join}%28%22+%22%29`).then(async function (image) {
    // do stuff with the image
    await image.write('./' + args.join(" ") + ".png")
  }).catch(function (err) {
  });
  fs.readFile('./' + args.join(" ") + ".png", function (err, data) {
      message.channel.send({
        files: [data]
      })
    })
  }
module.exports.help ={
  name: "achivement"
}
//`https://www.minecraftskinstealer.com/achievement/a.php?i=2&h=Achievement+Get%21&t=${args.join}%28%22+%22%29`
