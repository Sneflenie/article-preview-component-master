const socials = document.querySelector(".open-share");
const triangle = document.querySelector(".triangle");
const shareBtn = document.getElementById("share");
const shareBtn2 = document.getElementById("share2");

shareBtn.addEventListener('click', () => {
    socials.classList.toggle('clicked');

})

shareBtn2.addEventListener('click', () => {
    socials.classList.remove('clicked')
})