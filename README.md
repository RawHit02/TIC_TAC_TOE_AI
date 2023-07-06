# TIC_TAC_TOE_AI
#Impossible Win 

🎉🎉🎉🎉🎉🎉👇🙌🙌🙌🙌🙌🙌🙌🙌😍😍😍😍😍😍😍😍😍😍👌👌👌👌👌👌👌👌

The minimax algorithm is a recursive algorithm used in game theory to determine the best possible move for a player in a two-player game with perfect information, such as Tic Tac Toe. It evaluates all possible moves and their outcomes to make an optimal decision.

Here's an explanation of how the minimax algorithm works in the context of the provided project:

The bestMove() function is called in the setup() function to initiate the AI's move.

The bestMove() function starts by calling the minimax() function, passing in the current state of the game board and the depth of the search tree. The depth represents how many moves ahead the algorithm will explore.

In the minimax() function, the base case checks if the game is over or if the maximum depth has been reached. If either condition is met, it evaluates the game state and returns the corresponding score: 1 for AI win, -1 for human win, or 0 for a tie.

If the base case is not met, the minimax() function continues to evaluate all possible moves recursively.

In the recursive step, it alternates between the maximizing player (AI) and the minimizing player (human) to simulate each possible move.

For each possible move, the minimax() function calls itself recursively with the updated game state and depth + 1.

The algorithm keeps track of the best score and best move. For the maximizing player (AI), it selects the move with the highest score, and for the minimizing player (human), it selects the move with the lowest score.

Finally, the bestMove() function updates the game board with the AI's optimal move.

By exploring all possible moves and their outcomes, the minimax algorithm ensures that the AI makes the best decision based on the current state of the game. It anticipates the moves of both players and selects the move that maximizes its chances of winning or minimizes the chances of losing. This allows the AI to play Tic Tac Toe strategically and make optimal moves.
