import React, { useEffect, useMemo, useState, createContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Search } from './search.js';
import { AddMovie } from './addMovie.js';
import { MovieDetail } from './movieDetails.js';
export const AppContext = createContext();

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [displayUserMade, setDisplayUserMade] = useState(false);
  const [triggerFetch, setTriggerFetch] = useState(false);

  const navigate = useNavigate();
  const serverLocation = 'http://localhost:3001';

  const searchResults = useMemo(() => {
    if (!displayUserMade) {
      let result = movies.filter(movie =>
        movie.name.toLowerCase().includes(searchText.toLowerCase())
      );
      return result;
    } else {
      let result = movies.filter(
        movie =>
          movie.name.toLowerCase().includes(searchText.toLowerCase()) &&
          movie.userAdded
      );
      return result;
    }
  }, [displayUserMade, searchText, movies]);

  useEffect(() => {
    console.log('fetching all movies');
    fetch(`${serverLocation}/movies`)
      .then(res => res.json())
      .then(data => setMovies(data));
  }, [triggerFetch]);

  const setContext = {
    searchResults,
    displayUserMade,
    serverLocation,
    setTriggerFetch,
  };

  return (
    <AppContext.Provider value={setContext}>
      <div>
        <div>
          <div>
            <button>Movie List:</button>
          </div>
          <div>
            <input
              type='text'
              id='search'
              name='search'
              placeholder='Movie Name'
              value={searchText}
              onChange={e => {
                console.log(searchText);
                setSearchText(e.target.value);
              }}
              onKeyUp={event => {
                if (event.key === 'Enter') {
                  navigate('/');
                }
              }}
            ></input>
          </div>
          <div>
            Filters
            <button
              onClick={e => {
                setSearchText('');
              }}
            >
              Reset Search
            </button>
            <button
              onClick={e => {
                setDisplayUserMade(prev => !prev);
              }}
            >
              {`User-Made ${displayUserMade}`}
            </button>
          </div>
          <div>
            <button
              onClick={e => {
                navigate('/addMovie');
              }}
            >
              Add Movie
            </button>
            <button              onClick={e => {
                navigate('/');
              }}
            >
              Search Results
            </button>
          </div>
          <Routes>
            <Route path='/' element={<Search />} />
            <Route path='/addMovie' element={<AddMovie />} />
            <Route path='/:id' element={<MovieDetail />} />
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
};
// adding this comment so I can put another commit message
export default App;