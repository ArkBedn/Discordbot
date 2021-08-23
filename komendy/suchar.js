var fs = require('fs');
const { MessageEmbed } = require('discord.js');
var suchar1 = fs.readFileSync("./data/suchar.txt").toString('utf-8').split("\n"); 
var suchar2 = fs.readFileSync("./data/suchar2.txt").toString('utf-8').split("\n"); 


module.exports = function(msg, args) {
const index = Math.floor(Math.random() * suchar1.length);
msg.channel.send(suchar1[index]+ "\n" + suchar2[index]);
}