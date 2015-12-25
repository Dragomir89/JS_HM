
function calcVolume(r){
    return r*r*r*Math.PI*(4/3);
}
var btn = document.getElementById('calc');

btn.addEventListener('click', function(){

    var radius = document.getElementById('radius').value;
    var result = document.getElementById('volume');

    result.value = calcVolume(radius);

});

