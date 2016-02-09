slideInt = 1;
slideNext= 2;


$(document).ready(function(){
$('#image>img#1').fadeIn(1000);

  startSlider();
});

function startSlider(){

count = $('#image>img').size();
loop = setInterval(function(){
if(slideNext>count){
slideNext= 1;
slideInt= 1;

}

$('#image>img').delay(1200).fadeOut(1200);
$('#image>img#'+ slideNext).fadeIn(2200);
 slideInt=slideNext;
 slideNext = slideNext + 1;

},3000)



}

function prev(){

newSlide = slideInt-1;
showSlide(newSlide);

}

function next(){

newSlide = slideInt + 1;
showSlide(newSlide);

}

function showSlide(id){
 if(id>count){
 
 id = 1;

 
 }else{
 
 id = count;
 
 }
$('#slider > img').fadeOut(300);
$('#slider > img#'+slideNext).fadeIn(300);

slideInt = id;
slideNext =id +1;
}