var wrapperDiv = document.getElementsByClassName('imgWrapper')[0];

var x = Math.floor((Math.random() * 10) + 1);
x +='';
var oImg=document.createElement("img");
oImg.setAttribute('src', 'resurs/'+ x +'.jpg ');

wrapperDiv.appendChild(oImg);
