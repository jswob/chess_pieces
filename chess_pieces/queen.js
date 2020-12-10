const ChessPiece = require("./chess-piece");

class Queen extends ChessPiece {
  // Returns array of all possible moves for queen
  new(position) {
    if (!this.isOnBoard(position))
      // If passed position is not presented on chess board return warning
      return "Position selected by you is not on board!";

    const possibleMoves = [
      // Creates arrays of all possible moves in all possible directions
      this.repeatMoveToMethod(position, this.moveToTopRight).split(" "),
      this.repeatMoveToMethod(position, this.moveToTopLeft).split(" "),
      this.repeatMoveToMethod(position, this.moveToBottomRight).split(" "),
      this.repeatMoveToMethod(position, this.moveToBottomLeft).split(" "),
      this.repeatMoveToMethod(position, this.moveToTop).split(" "),
      this.repeatMoveToMethod(position, this.moveToRight).split(" "),
      this.repeatMoveToMethod(position, this.moveToLeft).split(" "),
      this.repeatMoveToMethod(position, this.moveToBottom).split(" "),
    ];

    // Serializes response to redable form
    return this.serializeResponse(possibleMoves);
  }
}

module.exports = Queen;
