const maru = document.querySelector('.maru');

const removeJump = () => maru.classList.remove('maru-jump');
document.addEventListener('keydown', (event) => {
  maru.classList.add('maru-jump');
  setTimeout(removeJump, 500);
});