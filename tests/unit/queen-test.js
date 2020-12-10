const Queen = require("../../chess_pieces/queen");

const test = require("../helpers/test");
const areArraysEqual = require("../helpers/are-arrays-equal");

test("Unit :: Queen :: new method returns list of all possible moves for given position", function () {
  const queen = new Queen();

  data = [
    {
      input: "a1",
      output: [
        "b2",
        "c3",
        "d4",
        "e5",
        "f6",
        "g7",
        "h8",
        "a2",
        "a3",
        "a4",
        "a5",
        "a6",
        "a7",
        "a8",
        "b1",
        "c1",
        "d1",
        "e1",
        "f1",
        "g1",
        "h1",
      ],
    },
    {
      input: "c3",
      output: [
        "d4",
        "e5",
        "f6",
        "g7",
        "h8",
        "b4",
        "a5",
        "d2",
        "e1",
        "b2",
        "a1",
        "c4",
        "c5",
        "c6",
        "c7",
        "c8",
        "d3",
        "e3",
        "f3",
        "g3",
        "h3",
        "b3",
        "a3",
        "c2",
        "c1",
      ],
    },
    {
      input: "d4",
      output: [
        "e5",
        "f6",
        "g7",
        "h8",
        "c5",
        "b6",
        "a7",
        "e3",
        "f2",
        "g1",
        "c3",
        "b2",
        "a1",
        "d5",
        "d6",
        "d7",
        "d8",
        "e4",
        "f4",
        "g4",
        "h4",
        "c4",
        "b4",
        "a4",
        "d3",
        "d2",
        "d1",
      ],
    },
    {
      input: "h7",
      output: [
        "g8",
        "g6",
        "f5",
        "e4",
        "d3",
        "c2",
        "b1",
        "h8",
        "g7",
        "f7",
        "e7",
        "d7",
        "c7",
        "b7",
        "a7",
        "h6",
        "h5",
        "h4",
        "h3",
        "h2",
        "h1",
      ],
    },
    {
      input: "c7",
      output: [
        "d8",
        "b8",
        "d6",
        "e5",
        "f4",
        "g3",
        "h2",
        "b6",
        "a5",
        "c8",
        "d7",
        "e7",
        "f7",
        "g7",
        "h7",
        "b7",
        "a7",
        "c6",
        "c5",
        "c4",
        "c3",
        "c2",
        "c1",
      ],
    },
  ];

  const results = data.map(({ input, output }) =>
    areArraysEqual(queen.new(input), output)
  );

  return { data: data, results: results };
});