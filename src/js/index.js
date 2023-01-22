const buttonVideo = document.querySelector('.button-trailer');
const closeButton = document.querySelector('.close-modal');
const video = document.getElementById('video');
const modal = document.querySelector('.modal');
const linkVideo = video.src;

function modeModal(){
    modal.classList.toggle('open');
} 

buttonVideo.addEventListener('click', () => {
    modeModal();    
    video.setAttribute('src', linkVideo);
});

closeButton.addEventListener('click', () => {
    modeModal();   
    video.setAttribute('src', '');
});