const Bishop = require("../../chess_pieces/bishop");

const test = require("../helpers/test");
const areArraysEqual = require("../helpers/are-arrays-equal");

test("Unit :: Bishop :: new method returns list of all possible moves for given position", function () {
  const bishop = new Bishop();

  data = [
    {
      input: "a1",
      output: ["b2", "c3", "d4", "e5", "f6", "g7", "h8"],
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
      ],
    },
    {
      input: "h7",
      output: ["g8", "g6", "f5", "e4", "d3", "c2", "b1"],
    },
    {
      input: "c7",
      output: ["d8", "b8", "d6", "e5", "f4", "g3", "h2", "b6", "a5"],
    },
  ];

  const results = data.map(({ input, output }) =>
    areArraysEqual(bishop.new(input), output)
  );

  return { data: data, results: results };
});
