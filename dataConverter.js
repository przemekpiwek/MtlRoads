const csvToJson = require("convert-csv-to-json");

let rawData = "./car_accidents.csv";
let convertedData = "./public/data.json";

csvToJson
  .fieldDelimiter(",")
  .formatValueByType()
  .generateJsonFileFromCsv(rawData, convertedData);
