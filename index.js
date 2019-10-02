const mockData = require("./MOCK_DATA.json");

const maleCount = [];
const femaleCount = [];
mockData.forEach(element => {
  if (element.gender === "Male") {
    maleCount.push(element);
  } else if (element.gender === "Female") {
    femaleCount.push(element);
  }
});
const femaleFinalCount = femaleCount.length;
const maleFinalCount = maleCount.length;

console.log(
  "The female count is " +
    femaleFinalCount +
    ". " +
    "The male count is " +
    maleFinalCount
);
