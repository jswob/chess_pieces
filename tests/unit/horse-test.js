const Horse = require("../../chess_pieces/horse");

const test = require("../helpers/test");
const areArraysEqual = require("../helpers/are-arrays-equal");

test("Unit :: Horse :: moveToTopLeft moves passed position two to up and one to left", function () {
  const horse = new Horse();

  const data = [
    { input: "b2", output: "a4" },
    { input: "b4", output: "a6" },
    { input: "c6", output: "b8" },
  ];

  const results = data.map(
    ({ input, output }) => horse.moveToTopLeft(input, horse) === output
  );

  return { data: data, results: results };
});

test("Unit :: Horse :: moveToTopRight moves passed position two to up and one to right", function () {
  const horse = new Horse();

  const data = [
    { input: "b2", output: "c4" },
    { input: "b4", output: "c6" },
    { input: "c6", output: "d8" },
  ];

  const results = data.map(
    ({ input, output }) => horse.moveToTopRight(input, horse) === output
  );

  return { data: data, results: results };
});

test("Unit :: Horse :: moveToRightTop moves passed position two to right and one to up", function () {
  const horse = new Horse();

  const data = [
    { input: "b2", output: "d3" },
    { input: "b4", output: "d5" },
    { input: "c6", output: "e7" },
  ];

  const results = data.map(
    ({ input, output }) => horse.moveToRightTop(input, horse) === output
  );

  return { data: data, results: results };
});

test("Unit :: Horse :: moveToRightBottom moves passed position two to right and one to down", function () {
  const horse = new Horse();

  const data = [
    { input: "b2", output: "d1" },
    { input: "b4", output: "d3" },
    { input: "c6", output: "e5" },
  ];

  const results = data.map(
    ({ input, output }) => horse.moveToRightBottom(input, horse) === output
  );

  return { data: data, results: results };
});

test("Unit :: Horse :: moveToBottomRight moves passed position two to down and one to right", function () {
  const horse = new Horse();

  const data = [
    { input: "c3", output: "d1" },
    { input: "d5", output: "e3" },
    { input: "e7", output: "f5" },
  ];

  const results = data.map(
    ({ input, output }) => horse.moveToBottomRight(input, horse) === output
  );

  return { data: data, results: results };
});

test("Unit :: Horse :: moveToBottomLeft moves passed position two to down and one to left", function () {
  const horse = new Horse();

  const data = [
    { input: "c3", output: "b1" },
    { input: "d5", output: "c3" },
    { input: "e7", output: "d5" },
  ];

  const results = data.map(
    ({ input, output }) => horse.moveToBottomLeft(input, horse) === output
  );

  return { data: data, results: results };
});

test("Unit :: Horse :: moveToLeftBottom moves passed position two to left and one to bottom", function () {
  const horse = new Horse();

  const data = [
    { input: "c3", output: "a2" },
    { input: "d5", output: "b4" },
    { input: "e7", output: "c6" },
  ];

  const results = data.map(
    ({ input, output }) => horse.moveToLeftBottom(input, horse) === output
  );

  return { data: data, results: results };
});

test("Unit :: Horse :: new method returns list of all possible moves for given position", function () {
  const horse = new Horse();

  data = [
    {
      input: "a1",
      output: ["b3", "c2"],
    },
    {
      input: "c3",
      output: ["b5", "d5", "e4", "e2", "d1", "b1", "a2", "a4"],
    },
    {
      input: "d4",
      output: ["c6", "e6", "f5", "f3", "e2", "c2", "b3", "b5"],
    },
    {
      input: "h7",
      output: ["g5", "f6", "f8"],
    },
    {
      input: "c7",
      output: ["e8", "e6", "d5", "b5", "a6", "a8"],
    },
  ];

  const results = data.map(({ input, output }) =>
    areArraysEqual(horse.new(input), output)
  );

  return { data: data, results: results };
});
