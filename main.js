const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const timing = {
  duration: 1500,
};

const fade = [
  {
    // from
    opacity: 0.4,
  },
  {
    // to
    opacity: 1,
  },
];

/* Declaring the array of image filenames */
const images = [
  'images/pic1.jpg',
  'images/pic2.jpg',
  'images/pic3.jpg',
  'images/pic4.jpg',
  'images/pic5.jpg',
];
/* Looping through images and populates thumb-bar */
images.forEach((elem) => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', elem);
  thumbBar.appendChild(newImage);
});

thumbBar.addEventListener('click', (e) => {
  displayedImage.src = e.target.src;
});

prev.addEventListener('click', () => {
  const currentSlide = displayedImage.attributes.src.value;
  displayedImage.animate(fade, timing);
  displayedImage.src = images.at(images.indexOf(currentSlide) - 1);
});

next.addEventListener('click', () => {
  const currentSlide = displayedImage.attributes.src.value;
  displayedImage.animate(fade, timing);
  // handles undefined when on end of array
  displayedImage.src = images.at(images.indexOf(currentSlide) + 1) || images[0];
});
