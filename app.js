// when img is clicked...open full view

const images = document.querySelectorAll('img');

for(image of images){
  image.addEventListener('click', (e) => {
    console.log(e.path[0].currentSrc);
    const clickedImg = e.path[0];
    showFullImg(clickedImg);
  });
}

function showFullImg(clickedImg) {
  const webpage = document.querySelector('body');
  const fullScreen = document.createElement('div');
  const imgDiv = document.createElement('div');
  const imageEl = document.createElement('img');
  const closeBtn = document.createElement('button');

  fullScreen.classList.add('fullScreen');
  imgDiv.classList.add('imgDiv');
  imageEl.classList.add('fullImg');
  imageEl.setAttribute('src', clickedImg.currentSrc)
  closeBtn.classList.add('closeBtn');
  closeBtn.innerText = 'X';

  webpage.appendChild(fullScreen);
  fullScreen.appendChild(imgDiv)
  imgDiv.appendChild(imageEl);
  imgDiv.appendChild(closeBtn);

  closeBtn.addEventListener('click', () => {
    webpage.removeChild(fullScreen);
  });
}