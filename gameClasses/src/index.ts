import { Game } from "./model/Game";
import { Games } from "./model/Games";

let game1 = new Game({name:'Heroes And Generals', genre: 'Action/RTS'})
let game2 = new Game({name:'Halo', genre: 'Action'})

game1.GetInformation('name')
game2.GetInformation('name')

const gamesList = new Games()

gamesList.AddGame(game1)
gamesList.AddGame(game2)

gamesList.GetGames()
