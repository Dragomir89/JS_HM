var imgWrapper = $('<div>');

var div = $('.imgPlace');

var counter = 11;

var images = [];

for(var i = 1; i < counter; i++){
    var img = $('<img>');
    img.attr('src', 'resurs/' + i + '.jpg');
    img.addClass('imgStyle');
    img.mouseover(function(e){

        console.log('here');
        var clone = e.target.cloneNode(true);
        clone.setAttribute('class','bigImg');
        console.log(clone);
        div.append(clone)
    });
    img.mouseout(function(e){
        console.log('remove event');
        $('.bigImg').remove();

    });
    imgWrapper.append(img);
    $('.wrapper').append(imgWrapper);

}




console.log(images);


