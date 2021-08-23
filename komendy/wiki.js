const fetch = require('node-fetch');

module.exports = async function(msg, args){
    if(args.length > 0){
        if (args[0]=== "random"){
            let response = await fetch('https://wikipedia.org/wiki/Special:Random');
            let data = await response.text();
            let dane = data.slice(data.search("<title>"),data.search(" - Wikipedia"));
            dane = dane.replace("<title>", "");
            dane = dane.replace(/\s/g, '_');
 //           console.log(dane);
            msg.channel.send(`https://wikipedia.org/wiki/${dane}`);
            }
        else{
            const keywords = args.join("_");
            let url = `https://pl.wikipedia.org/wiki/${keywords}`;
            msg.channel.send(url);
        }
            
    }
}