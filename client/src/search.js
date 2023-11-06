import { useContext } from "react";
import { AppContext } from "./App.js";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const { searchResults } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <>
      {searchResults.length > 0 ? (
        <div>
          {searchResults.map((movie, index) => (
            <button
              key={index}
              onClick={(e) => {
                console.log(movie);
                navigate(`/${movie.id}`);
              }}
            >
              <div>
                <span>{movie.name}</span>
                <ul>
                  <li>Rating: {movie.rating}</li>
                  <li>Studio: {movie.studio}</li>
                  <li>Release Date: {movie.date}</li>
                  <li>Country: {movie.country}</li>
                  <li>Runtime: {movie.runtime}min</li>
                </ul>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div>No Results</div>
      )}
    </>
  );
};
