module.exports = function(msg, args){
    if(args.length > 0){
        const keywords = args.join(" ");
    }
    var a = parseInt(args[0]);
    var b = parseInt(args[1]);
    var c = parseInt(args[2]);
    var delt = Math.pow(b,2)- (4*a*c);
    var pdelt = Math.sqrt(delt);
    if (delt < 0){
        msg.channel.send("Rozwiązanie tego równania znajduje się w przedziale liczb zespolonych");
    }
    else if (delt === 0){
        var x1 = (-1*b)/(2*a);
        msg.channel.send("Istnieje jedno rozwiązanie tego równania x = "+ x1);
    }
    else if (delt > 0){
        var x1 = (-1*b - pdelt)/(2*a);
        var x2 = (-1*b + pdelt)/(2*a);
        msg.channel.send("Istnieją dwa rozwiązania tego równania x1 = "+ x1 +" oraz x2 = "+x2);
    }
}