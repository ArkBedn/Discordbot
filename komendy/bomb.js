var i=0;
var bombinterval
var secs

module.exports = function (msg, args){
    secs = parseInt(args[0]);
    function bmbinter() {
        bombinterval = setInterval(bomb(),1000);
    }
    function bomb(secs, time){
        if (i<time){    
            msg.channel.send(secs-i);
            i++;
        }
        else{       
            msg.channel.send("boom");
            i=0;
            clearInterval(bombinterval);
        }
    }
}