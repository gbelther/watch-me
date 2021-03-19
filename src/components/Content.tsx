import { MovieCard } from "./MovieCard";

interface MoviesProps {
  movies: {
    Title: string;
    Poster: string;
    Ratings: Array<{
      Value: string;
    }>;
    Runtime: string;
  }[];
  selectedGenre: {
    title: string;
  };
}

export function Content({ movies, selectedGenre }: MoviesProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.Title}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
