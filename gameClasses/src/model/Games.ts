import { Game } from "./Game";
import { Genre } from "./Genre";

export class Games {
  GameList: Array<Game> = []
  
  constructor() {

  }

  AddGame(game:Game): void {
    if(this.GameList.length === 0 && game) {
      this.GameList.push(game);
    } else if (game)  {
      this.GameList.push(game);
    }
  }

  GetGames(): void {
    const length = this.GameList.length;
    if(length > 0) {
        console.log(this.GameList)
    }
  }

}
