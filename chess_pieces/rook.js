const ChessPiece = require("./chess-piece.js");

class Rook extends ChessPiece {
  // Returns array of all possible moves for rook
  new(position) {
    // If passed position is not presented on chess board return warning
    if (!this.isOnBoard(position))
      return "Position selected by you is not on board!";

    const possibleMoves = [
      // Creates arrays of all possible moves in all possible directions
      this.repeatMoveToMethod(position, this.moveToTop).split(" "),
      this.repeatMoveToMethod(position, this.moveToRight).split(" "),
      this.repeatMoveToMethod(position, this.moveToLeft).split(" "),
      this.repeatMoveToMethod(position, this.moveToBottom).split(" "),
    ];

    // Serializes response to redable form
    return this.serializeResponse(possibleMoves);
  }
}

module.exports = Rook;
