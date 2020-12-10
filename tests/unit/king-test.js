const King = require("../../chess_pieces/king");

const test = require("../helpers/test");
const areArraysEqual = require("../helpers/are-arrays-equal");

test("Unit :: King :: new method returns list of all possible moves for given position", function () {
  const king = new King();

  data = [
    {
      input: "a1",
      output: ["b2", "a2", "b1"],
    },
    {
      input: "c3",
      output: ["d4", "b4", "d2", "b2", "c4", "d3", "b3", "c2"],
    },
    {
      input: "d4",
      output: ["e5", "c5", "e3", "c3", "d5", "e4", "c4", "d3"],
    },
    {
      input: "h7",
      output: ["g8", "g6", "h8", "g7", "h6"],
    },
    {
      input: "c7",
      output: ["d8", "b8", "d6", "b6", "c8", "d7", "b7", "c6"],
    },
  ];

  const results = data.map(({ input, output }) =>
    areArraysEqual(king.new(input), output)
  );

  return { data: data, results: results };
});
