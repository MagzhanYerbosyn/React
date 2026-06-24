import MovieItem from './MovieItem';

const MovieList = () => {
  return (
    <div className="movie-list">
      <MovieItem
        movieName="Joker"
        releaseDate={2019}
        posterLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOWx5p_WcRojfeAqqW-wmqxnPzK-6R2PDjyP2TmCB47zhKoHjylZco8M&s=10"
      />
      <MovieItem
        movieName="Avatar: The Way of Water"
        releaseDate={2022}
        posterLink="https://m.media-amazon.com/images/M/MV5BNWI0Y2NkOWEtMmM2OC00MjQ3LWI1YzItZGQxYzQ3NzI4NWZmXkEyXkFqcGc@._V1_.jpg"
      />
      <MovieItem
        movieName="End of Watch"
        releaseDate={2012}
        posterLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGzt7NKMcF9yFtCEo5nB8U5iQTJlTNo8wRi7ZDGQMwyA&s=10"
      />
    </div>
  );
};

export default MovieList;
