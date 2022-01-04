const playButton = document.querySelector('.play-again');
const user_pick_img = document.querySelector('.you-pick img');
const pc_pick_img = document.querySelector('.computer-pick img');
const winner = document.querySelector('.winner');
console.log(pc_choose);

user_pick_img.alt = user_choose.alt;
user_pick_img.src = user_choose.src;

pc_pick_img.alt = pc_choose.alt;
pc_pick_img.src = pc_choose.src;

if (user_choose.alt == pc_choose.alt) {
  winner.classList.remove('computer-wins');
}

playButton.addEventListener('click', () => {
  document.location.href = 'index.html';
});
