const buttons = document.querySelectorAll('.pick-one button');
const pc_choose = buttons[Math.floor(Math.random()*buttons.length)].querySelector('img');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const user_choose = button.querySelector('img');
    document.location.href = 'winner.html';
  });
});
