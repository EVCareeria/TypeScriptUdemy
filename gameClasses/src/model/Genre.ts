interface GenreInterface {
  genreName: string;
  count: number;
}

export class Genre {
  genresList = <GenreInterface>{};

  constructor(private genre: string) {
    console.log(this.genresList)
  }

  SetGenreList():void {
    if(!this.genresList[this.genre]) {
      this.genresList[this.genre] += 1
    }
    this.genresList[this.genre]++; 
  }

}
