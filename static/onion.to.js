/*
 steal this code
 public domain

 2013 moritz bartl
*/

document.getElementById('hideWithoutJS').style.display = 'block';

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

String.prototype.startsWith = function (str){
    return this.slice(0, str.length) == str;
};

function openOnion()
{
    var form=document.getElementById("locationBar");
    var onion=form.elements["location"].value; 

    onion = onion.replace('http://', 'https://');
    if (onion.indexOf('://') == -1) {
     onion = 'https://' + onion;
    }
    if (onion.indexOf('onion.to') == -1) {
     onion = onion.replace('onion', 'onion.to');
    } 
    if (onion.indexOf('onion') == -1) {
     alert(onion + ' is not a valid Tor hidden service address');
    } else {
     window.location.href=onion; 
    }
    return false;
};
