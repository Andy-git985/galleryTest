const slides = document.querySelectorAll('.slides');
const slideshow = document.querySelector('.slideshow');
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

/* Looping through images and populates thumb-bar */
slides.forEach((elem) => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', elem.attributes.src.value);
  thumbBar.appendChild(newImage);
});

let slideIndex = 0;
showSlides(slideIndex);
function showSlides(n) {
  if (n > slides.length - 1) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  slides[slideIndex].style.display = 'block';
  const hidden = Array.from(slides).filter((e, i) => i !== slideIndex);
  hidden.forEach((e) => (e.style.display = 'none'));
}

thumbBar.addEventListener('click', (e) => {
  const arr = Array.from(slides).map((e) => e.attributes.src.value);
  slideIndex = arr.indexOf(e.target.attributes.src.value);
  showSlides(slideIndex);
});

prev.addEventListener('click', () => {
  slideshow.animate(fade, timing);
  showSlides((slideIndex -= 1));
});

next.addEventListener('click', () => {
  slideshow.animate(fade, timing);
  showSlides((slideIndex += 1));
});
