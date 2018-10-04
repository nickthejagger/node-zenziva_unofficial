const urlencode = require('urlencode');
const request = require('request');

function zenziva_apismsmasking(user_key, passkey, phone_number,message){
    //urlencode message 
    var new_message = urlencode(message);
    var options = {
        url: 'https://alpha.zenziva.net/apps/smsapi.php?userkey='+ user_key +'&passkey='+ passkey +'&nohp='+ phone_number +'&pesan=' + new_message
    }
    request.get(options, function(err, resp, body){
        if(!err){
            return(body)
        } else{
            throw err
        }
    })
}

function zenziva_apismsreguler(user_key, passkey, phone_number,message){
    //urlencode message 
    var new_message = urlencode(message);
    var options = {
        url: 'https://reguler.zenziva.net/apps/smsapi.php?userkey='+ user_key +'&passkey='+ passkey +'&nohp='+ phone_number +'&pesan=' + new_message
    }
    request.get(options, function(err, resp, body){
        if(!err){
            return(body)
        } else{
            throw err
        }
    })
}


module.exports.masking = zenziva_apismsmasking;
module.exports.reguler = zenziva_apismsreguler;
