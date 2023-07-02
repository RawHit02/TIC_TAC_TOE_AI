document.addEventListener('DOMContentLoaded', function() {
  const playAgainButton = document.getElementById('play-again-btn');

  
  playAgainButton.addEventListener('click', resetGame);
  refreshButton.addEventListener('click', refreshPage);
  
  function resetGame() {
    // Reset the game state
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    currentPlayer = human;
    loop(); // Resume the game loop
  }
  
  function refreshPage() {
    location.reload();
  }
});
