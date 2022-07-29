var photos = ['image.png', 'image2.png', 'image3.png', 'footer.png'];
document.getElementById('imge').innerHTML = '<img id="image0" data-photo="0" src="' + photos[0] + '" />';

var dots = '';
for (var i = 0; i < images.length; i++) {
    dots += '<span onclick=" slider(' + i + ')" class=" dot" > ' + i + ' </span>'
}
document.getElementById('dots').innerHTML = dots;

function slider(i) {
    document.getElementById('imge').innerHTML = '<img id="picture' + (i) + '"  data-photo="' + (i) + '" src="' + photos[(i)] + '" />'
}

function next() {
    var pics = parseInt(document.querySelectorAll('#imge img')[0].dataset.photo);
    document.getElementById('imge').innerHTML = '<img id="picture' + (pics + 1) + '"  data-photo="' + (pics + 1) + '" src="' + photos[(pics + 1)] + '" />'

}
function back() {
    var pics = parseInt(document.querySelectorAll('#imge img ')[0].dataset.photo);
    document.getElementById('imge').innerHTML = '<img id="picture' + (pics - 1) + '"  data-photo="' + (pics - 1) + '" src="' + photos[(pics - 1)] + '" />'

}