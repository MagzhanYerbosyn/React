type TMovie = {
  movieName: string;
  releaseDate: number;
  posterLink: string;
};

const MovieItem = (props: TMovie) => {
  const { movieName, releaseDate, posterLink } = props;

  return (
    <div className="movie-item">
      <div className="movie-item__poster-wrapper">
        <img src={posterLink} alt="movie poster" />
      </div>

      <ul className="movie-item__content">
        <li className="movie-item__content-item">
          <span className="left-col">Movie:</span> <span className="right-col">{movieName}</span>
        </li>
        <li className="movie-item__content-item">
          <span className="left-col">Release Date:</span>
          <span className="right-col">{releaseDate}</span>
        </li>
        <li className="movie-item__content-item">
          <span className="left-col">Poster Link:</span>{' '}
          <span className="right-col">
            <a href={posterLink}>Tap Here</a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default MovieItem;
