const King = require("./chess_pieces/king");
const Queen = require("./chess_pieces/queen");
const Bishop = require("./chess_pieces/bishop");
const Horse = require("./chess_pieces/horse");
const Rook = require("./chess_pieces/rook");

const king = new King();
const queen = new Queen();
const bishop = new Bishop();
const horse = new Horse();
const rook = new Rook();

const kingPosition = "a1";
const queenPosition = "c2";
const bishopPosition = "d5";
const horsePosition = "a2";
const rookPosition = "f7";

console.log(`King ${kingPosition}`);
console.log(king.new(kingPosition));

console.log(`Queen ${queenPosition}`);
console.log(queen.new(queenPosition));

console.log(`Bishop ${bishopPosition}`);
console.log(bishop.new(bishopPosition));

console.log(`Horse ${horsePosition}`);
console.log(horse.new(horsePosition));

console.log(`Rook ${rookPosition}`);
console.log(rook.new(rookPosition));
