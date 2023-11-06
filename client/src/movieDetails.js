import { useContext, useMemo } from 'react';
import { AppContext } from './App.js';
import { useNavigate, useParams } from 'react-router-dom';

export const MovieDetail = () => {
  const { searchResults, setTriggerFetch, serverLocation } =
    useContext(AppContext);
  const navigate = useNavigate();
  let { id } = useParams();
  id = id.toString();

  const CurrentMovieDetail = useMemo(() => {
    let results = searchResults.filter(movie => movie.id.toString() === id);
    return results;
  }, [id, searchResults]);

  const deleteMovie = () => {
    fetch(`${serverLocation}/movies/${id}`, {
      method: 'DELETE',
      body: JSON.stringify(),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log(response);
        setTriggerFetch(prev => !prev);
      })
      .catch(err => {
        console.log('error: ', err);
      });
  };

  console.log('id', id);
  console.log(CurrentMovieDetail);
  return (
    <>
      {CurrentMovieDetail[0] !== undefined ? (
        <div>
          <div>
            <span>{CurrentMovieDetail[0].name}</span>
            <div>
              <div></div>
              <span>
                Information
              </span>
            </div>
            <ul>
              <li>Rating: {CurrentMovieDetail[0].rating}</li>
              <li>Studio: {CurrentMovieDetail[0].studio}</li>
              <li>Release Date: {CurrentMovieDetail[0].date}</li>
              <li>Country: {CurrentMovieDetail[0].country}</li>
              <li>Runtime: {CurrentMovieDetail[0].runtime}min</li>
            </ul>
          </div>
          <button
            onClick={e => {
              console.log('call delete');
              deleteMovie();
              navigate('/');
            }}
          >
            Remove Movie
          </button>
        </div>
      ) : (
        <>loading</>
      )}
    </>
  );
};