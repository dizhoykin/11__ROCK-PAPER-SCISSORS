const playButton = document.querySelector('.play-again');
const user_pick_img = document.querySelector('.your-pick img');
const pc_pick_img = document.querySelector('.computer-pick img');
const winner = document.querySelector('.winner');
const you_win = document.querySelector('h1.you-win');
const pc_win = document.querySelector('h1.computer-wins')

user_pick_img.alt = localStorage.getItem('user_choose_alt');
user_pick_img.src = localStorage.getItem('user_choose_src');

pc_pick_img.alt = localStorage.getItem('pc_choose_alt');
pc_pick_img.src = localStorage.getItem('pc_choose_src');

const youWin = () => {
  you_win.textContent = 'you win';
  pc_win.textContent = '';
  winner.classList.remove('computer-wins');
  winner.classList.add('you-win');
}

const pcWin = () => {
  you_win.textContent = '';
  pc_win.textContent = 'computer wins';
}

const draw = () => {
  you_win.textContent = '';
  pc_win.textContent = 'It is draw!';
  winner.classList.remove('computer-wins');
}

const chooser = (user, pc) => {
  if (user.alt == pc.alt) {
    draw();
  } else if (user.alt == 'Rock') {
      if (pc.alt == 'Scissors') {
        youWin();
      } else {
        pcWin();
      }
  } else if (user.alt == 'Paper') {
      if (pc.alt == "Rock") {
        youWin();
      } else {
        pcWin();
      }
  } else if (user.alt == 'Scissors') {
      if (pc.alt == 'Paper') {
        youWin();
      } else {
        pcWin();
      }
    }
};

chooser(user_pick_img, pc_pick_img);

playButton.addEventListener('click', () => {
  document.location.href = 'index.html';
});
