module.exports = function(msg, args){
        message.reply('calculating ping...').then((resultMessage) => {
            const ping = resultMessage.createdtimestamp - message.createdtimestamp;
            message.reply(`Bot latency: ${ping}, API Latency: ${client.ws.ping}`);
        })
    }
