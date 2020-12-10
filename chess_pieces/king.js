const ChessPiece = require("./chess-piece");

class King extends ChessPiece {
  // Returns array of all possible moves for king
  new(position) {
    if (!this.isOnBoard(position))
      // If passed position is not presented on chess board return warning
      return "Position selected by you is not on board!";

    const possibleMoves = [
      // Creates arrays of all possible moves in all possible directions
      this.moveToTopRight(position, this),
      this.moveToTopLeft(position, this),
      this.moveToBottomRight(position, this),
      this.moveToBottomLeft(position, this),
      this.moveToTop(position, this),
      this.moveToRight(position, this),
      this.moveToLeft(position, this),
      this.moveToBottom(position, this),
    ];

    // Serializes response to redable form
    return this.serializeResponse(possibleMoves);
  }
}

module.exports = King;
