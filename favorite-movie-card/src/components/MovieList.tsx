import MovieItem from './MovieItem';

const MovieList = () => {
  const movieArr = [
    {
      name: 'Joker',
      year: 2019,
      link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOWx5p_WcRojfeAqqW-wmqxnPzK-6R2PDjyP2TmCB47zhKoHjylZco8M&s=10',
    },
    {
      name: 'Avatar: The Way of Water',
      year: 2022,
      link: 'https://m.media-amazon.com/images/M/MV5BNWI0Y2NkOWEtMmM2OC00MjQ3LWI1YzItZGQxYzQ3NzI4NWZmXkEyXkFqcGc@._V1_.jpg',
    },
    {
      name: 'End of Watch',
      year: 2012,
      link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGzt7NKMcF9yFtCEo5nB8U5iQTJlTNo8wRi7ZDGQMwyA&s=10',
    },
  ];

  return (
    <div className="movie-list">
      {movieArr.map((movie) => {
        return (
          <MovieItem
            key={`${movie.name}-${movie.year}`}
            movieName={movie.name}
            releaseDate={movie.year}
            posterLink={movie.link}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
