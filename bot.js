const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("517441811065864194")
setInterval(function() {
channel.send(`څۡــطــۑْۧــڕڅۡــطــۑْۧــڕڅۡــطــۑْۧــڕڅۡــطــۑْۧــڕڅۡــطــۑْۧــڕڅۡــطــۑْۧــڕڅۡــطــۑْۧــڕ`);
}, 30)
})

client.login(process.env.BOT_TOKEN);