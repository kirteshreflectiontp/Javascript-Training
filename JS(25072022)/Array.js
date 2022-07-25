var navigation = ['Home','About','Contact','Product','License'];
var navlink = '';
for( var a = 0; a < navigation.length; a++) {
    navlink += '<div class="nav-link">'+ navigation[a]+'</div>';
}
document.getElementById('navbar').innerHTML = navlink;


var items = ['image.png','image2.png','image3.png'];
var productlink = '';
for( var d = 0; d < items.length; d++) {
    productlink += '<img class ="product-link" src="'+items[d]+'"/>'
}
document.getElementById('products').innerHTML = productlink;