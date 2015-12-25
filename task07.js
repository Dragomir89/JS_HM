function calculate(val,bool){
    return bool ? val *  2.20462262 : val /  2.20462262;
}

var button = document.getElementById('calculate');

var first = document.getElementById('first').value;
console.log(first);

button.addEventListener('click',function(){
    var input = Number(document.getElementById('val').value);
    var first = document.getElementById('first').value;
    var second = document.getElementById('second').value;
    var span = document.createElement('span');


    if(first != second){
        var result = first == 'kg' ? calculate(input,1) : calculate(input);
        span.innerText = result;
    }

    document.body.appendChild(span);
});