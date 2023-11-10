let socialMediaDisplayed = 0;

const cardContentUser = document.getElementById("card-content__user");
const shareBtnOpen = document.getElementById('share-btn-open');
const socialMedia = document.getElementById('social-media')
const shareBtnClose = document.getElementById('share-btn-close');
const bodyElement = document.getElementsByTagName("BODY");

shareBtnOpen.addEventListener("click", displayHideMedia);
shareBtnClose.addEventListener("click", hideMedia);

// Hides Social Media block on window resize
bodyElement[0].onresize = hideMedia;


function displayHideMedia() {
  if(socialMediaDisplayed === 0) {
    displayMedia();
    socialMediaDisplayed = 1;
  } else {
    hideMedia();
  }
}

function displayMedia() {
  let windowWidth = window.innerWidth;
  if(windowWidth >= 1440) {
    cardContentUser.style.display = "flex";
  } else {
    cardContentUser.style.display = "none";
  }
  socialMedia.style.display = "flex";
}

function hideMedia() {
  cardContentUser.style.display = "flex";
  socialMedia.style.display = "none";
  socialMediaDisplayed = 0
}








