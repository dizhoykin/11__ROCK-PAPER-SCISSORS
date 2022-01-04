const buttons = document.querySelectorAll('.pick-one button');
const pc_choose = buttons[Math.floor(Math.random()*buttons.length)].querySelector('img');
localStorage.clear();
var user_choose;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    user_choose = button.querySelector('img');
    localStorage.setItem('user_choose_alt', user_choose.alt);
    localStorage.setItem('user_choose_src', user_choose.src);
    document.location.href = 'winner.html';
  });
});

localStorage.setItem('pc_choose_alt', pc_choose.alt);
localStorage.setItem('pc_choose_src', pc_choose.src);
