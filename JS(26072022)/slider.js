
var photos = ['image.png','image2.png','image3.png','footer.png'];
var pics = '';
for(var a = 0; a < photos.length ;a++){
    pics +='<div class="photos" id="picture'+a+'"><img src="'+photos[a]+'"/></div>'  
}
document.getElementById('imge').innerHTML= pics;

function next(){
    debugger
    var slide ='';
    for(var a=0;a < photos.length;a++){
        if(document.getElementById('picture'+a).style.display == 'block'){
            slide = a;
        }
        if(document.getElementById('picture'+parseInt(slide+1))){
            document.getElementById('picture'+a).style.display = 'none';
        }
        }
        if(document.getElementById('picture'+parseInt(slide+1))){
        document.getElementById('picture'+parseInt(slide+1)).style.display = 'block';
        }
    }
       
function back(){
debugger
var slide ='';
for(var a=0;a < photos.length;a++){
if(document.getElementById('picture'+a).style.display == 'block'){
    slide = a;
}
if(document.getElementById('picture'+parseInt(slide-1))){
    document.getElementById('picture'+a).style.display = 'none';
}
}
if(document.getElementById('picture'+parseInt(slide-1))){
document.getElementById('picture'+parseInt(slide-1)).style.display = 'block';
}
}
