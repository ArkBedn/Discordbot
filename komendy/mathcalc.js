module.exports = function(msg, args){
    if(args.length > 0){
        const keywords = args.join(" ");
    }
    var a = parseInt(args[0]);
    var b = parseInt(args[2]);
    switch (args[1]) {
        case '+':
            var result = a+b;  
            msg.channel.send(a + " + " + b + " = "+ result);
            break;
        case '-':
            var result = a-b;  
            msg.channel.send(a + " - " + b + " = "+ result);
            break;
        case '*':
            var result = a*b;  
            msg.channel.send(a + " * " + b + " = "+ result);
            break;         
        case '/':
            var result = a/b;  
            msg.channel.send(a + " / " + b + " = "+ result);
            break;
        case '^':
            var result = Math.pow(a,b);  
            msg.channel.send(a + " ^ " + b + " = "+ result);
            break;
    }
}   