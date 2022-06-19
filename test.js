const img = document.querySelector('img');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const timing = {
  duration: 3000,
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

btn.addEventListener('click', () => {
  console.log('hello');
  img.animate(fade, timing);
});
