export class Omdb {
  constructor(token: string) {
    //Your token goes here
    this.token = token;
  }

  token;

  async getMovieData(movie: string) {
    let response = await fetch(
      `http://www.omdbapi.com/?t=${movie}&apikey=${this.token}`
    );
    let data: MovieData | InvalidMovie = await response.json();
    return data;
  }
}

export type MovieData =
  | {
      Title: string;
      Year: string;
      Rated: string;
      Released: string;
      Runtime: string;
      Genre: string;
      Director: string;
      Writer: string;
      Actors: string;
      Plot: string;
      Language: string;
      Country: string;
      Awards: string;
      Poster: string;
      Ratings: { Source: string; Value: string }[];
      Metascore: string;
      imdbRating: string;
      imdbVotes: string;
      imdbID: string;
      Type: string;
      DVD: string;
      BoxOffice: string;
      Production: string;
      Website: string;
      Response: "True";
    };
type InvalidMovie = { Response: "False"; Error: string }