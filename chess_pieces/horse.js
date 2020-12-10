const ChessPiece = require("./chess-piece");

class Horse extends ChessPiece {
  // Moves chess piece position two to up and one to left
  moveToTopLeft([horizontal, vertical], context) {
    return context.changeHorizontalPosition(horizontal, -1) + (+vertical + 2);
  }

  // Moves chess piece position two to up and one to right
  moveToTopRight([horizontal, vertical], context) {
    return context.changeHorizontalPosition(horizontal, 1) + (+vertical + 2);
  }

  // Moves chess piece position two to right and one to up
  moveToRightTop([horizontal, vertical], context) {
    return context.changeHorizontalPosition(horizontal, 2) + (+vertical + 1);
  }

  // Moves chess piece position two to right and one to down
  moveToRightBottom([horizontal, vertical], context) {
    return context.changeHorizontalPosition(horizontal, 2) + (+vertical - 1);
  }

  // Moves chess piece position two to down and one to right
  moveToBottomRight([horizontal, vertical], context) {
    return context.changeHorizontalPosition(horizontal, 1) + (+vertical - 2);
  }

  // Moves chess piece position two to down and one to left
  moveToBottomLeft([horizontal, vertical], context) {
    return context.changeHorizontalPosition(horizontal, -1) + (+vertical - 2);
  }

  // Moves chess piece position two to left and one to down
  moveToLeftBottom([horizontal, vertical], context) {
    return context.changeHorizontalPosition(horizontal, -2) + (+vertical - 1);
  }

  // Moves chess piece position two to left and one to up
  moveToLeftTop([horizontal, vertical], context) {
    return context.changeHorizontalPosition(horizontal, -2) + (+vertical + 1);
  }

  // Returns array of all possible moves for horse
  new(position) {
    if (!this.isOnBoard(position))
      // If passed position is not presented on chess board return warning
      return "Postion selected by you is not on board!";

    const possibleMoves = [
      // Creates arrays of all possible moves in all possible directions
      this.moveToTopLeft(position, this),
      this.moveToTopRight(position, this),
      this.moveToRightTop(position, this),
      this.moveToRightBottom(position, this),
      this.moveToBottomRight(position, this),
      this.moveToBottomLeft(position, this),
      this.moveToLeftBottom(position, this),
      this.moveToLeftTop(position, this),
    ];

    // Serializes response to redable form
    return this.serializeResponse(possibleMoves);
  }
}

module.exports = Horse;
