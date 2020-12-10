const ChessPiece = require("../../chess_pieces/chess-piece");

const test = require("../helpers/test");
const areArraysEqual = require("../helpers/are-arrays-equal");

test("Unit :: ChessPiece :: isOnBoard works correctly", function () {
  const data = [
    { input: "a1", output: true },
    { input: "bad_input", output: false },
    { input: "c2", output: true },
    { input: "a", output: false },
    { input: "h9", output: false },
  ];

  const piece = new ChessPiece();

  const results = data.map(
    ({ input, output }) => piece.isOnBoard(input) === output
  );

  return { data: data, results: results };
});

test("Unit :: ChessPiece :: changeHorizontalPosition changes passed char code by given value", function () {
  const data = [
    { input: { value: "c", change: 2 }, output: "e" },
    { input: { value: "d", change: -1 }, output: "c" },
    { input: { value: "j", change: 1 }, output: "k" },
  ];

  const piece = new ChessPiece();

  const results = data.map(
    ({ input, output }) =>
      piece.changeHorizontalPosition(input.value, input.change) === output
  );

  return { data: data, results: results };
});

test("Unit :: ChessPiece :: moveToTop moves passed position one to up", function () {
  const data = [
    { input: "a1", output: "a2" },
    { input: "b4", output: "b5" },
    { input: "a2", output: "a3" },
    { input: "c7", output: "c8" },
    { input: "d1", output: "d2" },
  ];

  const piece = new ChessPiece();

  const results = data.map(
    ({ input, output }) => piece.moveToTop(input, piece) === output
  );

  return { data: data, results: results };
});

test("Unit :: ChessPiece :: moveToRight moves passed position one to right", function () {
  const data = [
    { input: "a1", output: "b1" },
    { input: "b4", output: "c4" },
    { input: "a2", output: "b2" },
    { input: "c7", output: "d7" },
    { input: "d1", output: "e1" },
  ];

  const piece = new ChessPiece();

  const results = data.map(
    ({ input, output }) => piece.moveToRight(input, piece) === output
  );

  return { data: data, results: results };
});

test("Unit :: ChessPiece :: moveToBottom moves passed position one to bottom", function () {
  const data = [
    { input: "b2", output: "b1" },
    { input: "b4", output: "b3" },
    { input: "a2", output: "a1" },
    { input: "c7", output: "c6" },
    { input: "d8", output: "d7" },
  ];

  const piece = new ChessPiece();

  const results = data.map(
    ({ input, output }) => piece.moveToBottom(input, piece) === output
  );

  return { data: data, results: results };
});

test("Unit :: ChessPiece :: moveToLeft moves passed position one to left", function () {
  const data = [
    { input: "b2", output: "a2" },
    { input: "b4", output: "a4" },
    { input: "h2", output: "g2" },
    { input: "c7", output: "b7" },
    { input: "c8", output: "b8" },
  ];

  const piece = new ChessPiece();

  const results = data.map(
    ({ input, output }) => piece.moveToLeft(input, piece) === output
  );

  return { data: data, results: results };
});

test("Unit :: ChessPiece :: moveToTopRight moves passed position one to top and one to right", function () {
  const data = [
    { input: "b2", output: "c3" },
    { input: "b4", output: "c5" },
    { input: "g2", output: "h3" },
    { input: "c7", output: "d8" },
    { input: "e7", output: "f8" },
  ];

  const piece = new ChessPiece();

  const results = data.map(
    ({ input, output }) => piece.moveToTopRight(input, piece) === output
  );

  return { data: data, results: results };
});

test("Unit :: ChessPiece :: moveToBottomRight moves passed position one to bottom and one to right", function () {
  const data = [
    { input: "b2", output: "c1" },
    { input: "b4", output: "c3" },
    { input: "g2", output: "h1" },
    { input: "c7", output: "d6" },
    { input: "e7", output: "f6" },
  ];

  const piece = new ChessPiece();

  const results = data.map(
    ({ input, output }) => piece.moveToBottomRight(input, piece) === output
  );

  return { data: data, results: results };
});

test("Unit :: ChessPiece :: moveToBottomLeft moves passed position one to bottom and one to left", function () {
  const data = [
    { input: "b2", output: "a1" },
    { input: "b4", output: "a3" },
    { input: "g2", output: "f1" },
    { input: "c7", output: "b6" },
    { input: "e7", output: "d6" },
  ];

  const piece = new ChessPiece();

  const results = data.map(
    ({ input, output }) => piece.moveToBottomLeft(input, piece) === output
  );

  return { data: data, results: results };
});

test("Unit :: ChessPiece :: moveToTopLeft moves passed position one to top and one to left", function () {
  const data = [
    { input: "b2", output: "a3" },
    { input: "b4", output: "a5" },
    { input: "g2", output: "f3" },
    { input: "c7", output: "b8" },
    { input: "e7", output: "d8" },
  ];

  const piece = new ChessPiece();

  const results = data.map(
    ({ input, output }) => piece.moveToTopLeft(input, piece) === output
  );

  return { data: data, results: results };
});

test("Unit :: ChessPiece :: repeatMoveMethod repeats moveMethod until position is out of board", function () {
  const piece = new ChessPiece();

  const data = [
    {
      input: { position: "a1", method: piece.moveToTop },
      output: "a2 a3 a4 a5 a6 a7 a8 ",
    },
    {
      input: { position: "c4", method: piece.moveToBottomLeft },
      output: "b3 a2 ",
    },
    {
      input: { position: "a1", method: piece.moveToBottom },
      output: "",
    },
  ];

  const results = data.map(
    ({ input, output }) =>
      piece.repeatMoveToMethod(input.position, input.method) === output
  );

  return { data: data, results: results };
});

test("Unit :: ChessPiece :: serializeResponse returns serialized array", function () {
  const piece = new ChessPiece();

  const data = [
    {
      input: [
        ["a1", "a2"],
        ["b1", "b2"],
        ["c1", "c2"],
        ["d1", "d2"],
      ],
      output: ["a1", "a2", "b1", "b2", "c1", "c2", "d1", "d2"],
    },
    {
      input: [],
      output: [],
    },
  ];

  const results = data.map(({ input, output }) =>
    areArraysEqual(piece.serializeResponse(input), output)
  );

  return { data: data, results: results };
});
