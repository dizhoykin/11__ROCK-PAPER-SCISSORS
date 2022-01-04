const playButton = document.querySelector('.play-again');
const user_pick_img = document.querySelector('.your-pick img');
const pc_pick_img = document.querySelector('.computer-pick img');
const winner = document.querySelector('.winner');

user_pick_img.alt = localStorage.getItem('user_choose_alt');
user_pick_img.src = localStorage.getItem('user_choose_src');

pc_pick_img.alt = localStorage.getItem('pc_choose_alt');
pc_pick_img.src = localStorage.getItem('pc_choose_src');

if (user_pick_img.alt == pc_pick_img.alt) {
  winner.classList.remove('computer-wins');
}

playButton.addEventListener('click', () => {
  document.location.href = 'index.html';
});
