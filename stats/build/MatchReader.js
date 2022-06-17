"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchReader {
    constructor(Reader) {
        this.Reader = Reader;
        this.matches = [];
    }
    static fromCsv(name) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(name));
    }
    load() {
        this.Reader.read();
        this.matches = this.Reader.data.map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    }
}
exports.MatchReader = MatchReader;
