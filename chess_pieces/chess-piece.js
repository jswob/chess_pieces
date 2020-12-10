class ChessPiece {
  // It's a list of all possible positions which chess piecee can have
  board = [
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "g1",
    "g2",
    "g3",
    "g4",
    "g5",
    "g6",
    "g7",
    "g8",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "h7",
    "h8",
  ];

  // This method checks whether the passed position is located on board
  isOnBoard(move) {
    return this.board.includes(move);
  }

  // This method is a helper for changing horizontal (which is a letter) position by given value
  changeHorizontalPosition(value, change) {
    return String.fromCharCode(value.charCodeAt(0) + change);
  }

  // Moves chess piece position one to up
  moveToTop([horizontal, vertical]) {
    return horizontal + (+vertical + 1);
  }

  // Moves chess piece position one to bottom
  moveToBottom([horizontal, vertical]) {
    return horizontal + (+vertical - 1);
  }

  // Moves chess piece position on to right
  moveToRight([horizontal, vertical], context) {
    return context.changeHorizontalPosition(horizontal, 1) + vertical;
  }

  // Moves chess piece position one to left
  moveToLeft([horizontal, vertical], context) {
    return context.changeHorizontalPosition(horizontal, -1) + vertical;
  }

  // Moves chess piece position one up and one left
  moveToTopRight([horizontal, vertical], context) {
    return context.changeHorizontalPosition(horizontal, 1) + (+vertical + 1);
  }

  // Moves chess piece position one up and one left
  moveToTopLeft([horizontal, vertical], context) {
    return context.changeHorizontalPosition(horizontal, -1) + (+vertical + 1);
  }

  // Moves chess piece position one down and one right
  moveToBottomRight([horizontal, vertical], context) {
    return context.changeHorizontalPosition(horizontal, 1) + (+vertical - 1);
  }

  // Moves chess piece position one down and one left
  moveToBottomLeft([horizontal, vertical], context) {
    return context.changeHorizontalPosition(horizontal, -1) + (+vertical - 1);
  }

  // This recursive function repeats passed moveTo method until chess piece is out of board
  repeatMoveToMethod(currentPosition, moveToMetod) {
    // Next position is created by passed moveToMethod
    const nextPosition = moveToMetod(currentPosition, this);

    if (!this.isOnBoard(nextPosition)) return "";

    return (
      // It returns data in format a1 a2 b3 ...
      nextPosition + " " + this.repeatMoveToMethod(nextPosition, moveToMetod)
    );
  }

  // Serializes given array of moves to correct form
  serializeResponse(response) {
    let serializedResponse = [];
    response.flat().forEach((value) => {
      if (value === "") return;
      if (!this.isOnBoard(value)) return;

      serializedResponse.push(value);
    });

    return serializedResponse;
  }
}

module.exports = ChessPiece;
