import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import {MatchData} from './MatchData';
import {CsvFileReader} from './CsvFileReader'


interface DataReader {
  read():void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(name: string):MatchReader {
    return new MatchReader(new CsvFileReader(name));
  }
  
  matches: MatchData[] = [];
  
  constructor(public Reader: DataReader) {}

  load():void {
    this.Reader.read()
    this.matches = this.Reader.data.map((row:string[]):MatchData  => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6]
      ];
    })
  }
  
}
