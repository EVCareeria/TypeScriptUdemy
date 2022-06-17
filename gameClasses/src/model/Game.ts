import {Genre} from './Genre'

interface GameInterface {
  name:string;
  genre:string;
}

export class Game {
  genreList = new Genre(this.data.genre)
  constructor(private data: GameInterface) {

  }

  GetInformation(propName:string):void {
     console.log(this.data[propName])
  }


 
}
