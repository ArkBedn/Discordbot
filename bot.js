console.log('Beep beep');

const Discord = require('discord.js');
const client = new Discord.Client();
client.login('ODcwMTg5Mzk3OTEwMzU2MDA4.YQJJBw.IfxYLZ9Nt7bOUmHTu-KFFT0ATVk');

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('lol');
}
const commandHandler = require("./commands");

client.on("message", commandHandler, Discord);