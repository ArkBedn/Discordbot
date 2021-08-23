var aktrok, aktmies, aktdzien, dni;
var j;
module.exports = function(msg, args){
    var swieto = [[2,9,aktrok, "urodziny"], [24, 12, aktrok, "wigilia"], [1, 1, aktrok, "nowy rok"]];
    var today = new Date();
    aktrok = today.getFullYear();
    aktmies = today.getMonth();
    aktdzien = today.getDay();
    for (j = 0; j < swieto.length+1; j++) {
        if (j < swieto.length+1){
            if  (aktmies > swieto[j][1]){
                dni = Math.floor((new Date(aktrok+1, swieto[j][1]-1, swieto[j][0]) - today)/ 86400000);
                msg.channel.send(swieto[j][3] + " za "+ dni);
            }
            else if(aktmies == swieto[j][1]){
                if  (aktdzien > swieto[j][0]){
                    dni = Math.floor((new Date(aktrok+1, swieto[j][1]-1, swieto[j][0]) - today)/ 86400000);
                    msg.channel.send(swieto[j][3] + " za "+ dni);
                }
                else{
                    dni = Math.floor((new Date(aktrok, swieto[j][1]-1, swieto[j][0]) - today)/ 86400000);
                    msg.channel.send(swieto[j][3] + " za "+ dni);
                }
            }
            else if(aktmies < swieto[j][1]){
                dni = Math.floor((new Date(aktrok, swieto[j][1]-1, swieto[j][0]) - today)/ 86400000);
                msg.channel.send(swieto[j][3] + " za "+ dni);
            }
        }
    }
}
