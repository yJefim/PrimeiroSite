// FUNÇÃO PARA O SLIDER FICAR PASSANDO SOZINHO

let timeSlide = 1;
let timeSlidePause = 1;

document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 5000);

function nextImage(){
    timeSlide++;

    if (timeSlide > 5){
        timeSlide = 1;
    }

    document.getElementById("radio"+timeSlide).checked = true;
}