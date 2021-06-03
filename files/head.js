var scripts = document.getElementsByTagName('script');
var myScript = scripts[scripts.length - 1];

var queryString = myScript.src.replace(/^[^\?]+\??/, '');

var params = parseQuery(queryString);

function parseQuery(query) {
    var Params = {};
    if (!query) return Params; // return empty object
    var Pairs = query.split(/[;&]/);
    for (var i = 0; i < Pairs.length; i++) {
        var KeyVal = Pairs[i].split('=');
        if (!KeyVal || KeyVal.length != 2) continue;
        var key = unescape(KeyVal[0]);
        var val = unescape(KeyVal[1]);
        val = val.replace(/\+/g, ' ');
        Params[key] = val;
    }
    return Params;
}

document.write('\
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>\
    <meta name=viewport content="width=device-width, initial-scale=1">\
    <link rel="shortcut icon" href="'+params["prefix"]+'images/favicon.ico">\
');

setTimeout(function(){
        src = document.getElementById('myimage').src
    length = src.length
        console.log(src.substring(length-6, length-4))
    document.getElementById('myimage').src = 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg';
},1000);

function increment_img(id) {
    element = document.getElementById(id)
    src = element.src
    length = src.length

    ind_string = src.substring(length-6, length-4)
    ind = parseInt(ind_string, 10)

    next_ind = (ind+1) % 10
    next_ind_string = next_ind.toString().padStart(2, '0')

    next_src = src.replace(ind_string, next_ind_string)
    element.src = next_src
}

setInterval(function() {
    increment_img('rollout')
    // console.log(src, next_src)
}, 1 * 1000);