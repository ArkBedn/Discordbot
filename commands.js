const mathcalc = require("./komendy/mathcalc.js");
const suchar = require("./komendy/suchar.js");
const bomb = require("./komendy/bomb.js");
const swieto = require("./komendy/swieto.js");
const delta = require("./komendy/delta.js");
const gifs = require("./komendy/gifs.js");
const wiki = require("./komendy/wiki.js");
const ping = require("./komendy/ping.js");
const commands = { suchar, mathcalc, bomb, delta, swieto, wiki, gifs, ping};

module.exports = async function (msg) {
    let tokens = msg.content.split(" ");
    let command = tokens.shift();
    if (command.charAt(0) == "!"){
        command = command.substring(1);
        commands[command](msg, tokens);
    }
}