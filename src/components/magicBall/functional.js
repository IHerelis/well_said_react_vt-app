export function animatedBall (e) {
  
  const currentBall = e.currentTarget;
  const insideBoard = currentBall.querySelector('.ball-board');

  currentBall.classList.add('animated-ball');
  insideBoard.classList.add('ball-board__visible');
  setTimeout(() => {
    currentBall.classList.remove('animated-ball');
    insideBoard.classList.remove('ball-board__visible');
  }, 2000);
}
