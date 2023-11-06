import { useContext, useState } from 'react';
import { AppContext } from './App.js';

export const AddMovie = () => {
  const defaultMovieValues = {
    name: '',
    date: '',
    studio: '',
    country: '',
    runtime: '',
    rating: '',
    userAdded: true,
  };
  const { serverLocation, setTriggerFetch } = useContext(AppContext);
  const [addMovie, setAddMovie] = useState(defaultMovieValues);
  const [returnInfo, setReturnInfo] = useState([]);

  const postMovie = () => {
    console.log('Posting movie');
    fetch(`${serverLocation}/movies`, {
      method: 'POST',
      body: JSON.stringify([addMovie]),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('return from post', data);
        setReturnInfo(data);
        setAddMovie(defaultMovieValues);
        setTriggerFetch(prev => !prev);
      });
  };

  return (
    <div>
      <h2>Movie to Add</h2>
      <div>
        <div></div>
        <span>Info</span>
        <div></div>
      </div>

      <label>
        <span>Title:</span>
        <input
          type='text'
          id='name'
          name='search'
          placeholder='name of movie'
          value={addMovie.name}
          onChange={e => {
            setAddMovie({ ...addMovie, name: e.target.value });
            console.log(addMovie);
          }}
          onKeyUp={e => {
            if (e.key === 'Enter') {
              console.log(e.target.value);
            }
          }}
        />
      </label>
      <label>
        <span>Date:</span>
        <input
          type='text'
          id='name'
          name='search'
          placeholder='Release date of movie'
          value={addMovie.date}
          onChange={e => {
            setAddMovie({ ...addMovie, date: e.target.value });
            console.log(addMovie);
          }}
          onKeyUp={e => {
            if (e.key === 'Enter') {
              console.log(e.target.value);
            }
          }}
        />
      </label>
      <label>
        <span>Studio:</span>
        <input
          type='text'
          id='name'
          name='search'
          placeholder='Studio of movie'
          value={addMovie.studio}
          onChange={e => {
            setAddMovie({ ...addMovie, studio: e.target.value });
            console.log(addMovie);
          }}
          onKeyUp={e => {
            if (e.key === 'Enter') {
              console.log(e.target.value);
            }
          }}
        />
      </label>
      <label>
        <span>Country:</span>
        <input
          type='text'
          id='name'
          name='search'
          placeholder='Country of movie'
          value={addMovie.country}
          onChange={e => {
            setAddMovie({ ...addMovie, country: e.target.value });
            console.log(addMovie);
          }}
          onKeyUp={e => {
            if (e.key === 'Enter') {
              console.log(e.target.value);
            }
          }}
        />
      </label>
      <label>
        <span>Runtime:</span>
        <input
          type='text'
          id='name'
          name='search'
          placeholder='Runtime of movie: Minutes'
          value={addMovie.runtime}
          onChange={e => {
            setAddMovie({ ...addMovie, runtime: e.target.value });
            console.log(addMovie);
          }}
          onKeyUp={e => {
            if (e.key === 'Enter') {
              console.log(e.target.value);
            }
          }}
        />
      </label>
      <label>
        <span>Rating:</span>
        <input
          type='text'
          id='name'
          name='search'
          placeholder='Rating of movie "0-100"'
          value={addMovie.rating}
          onChange={e => {
            setAddMovie({ ...addMovie, rating: e.target.value });
            console.log(addMovie);
          }}
          onKeyUp={e => {
            if (e.key === 'Enter') {
              console.log(e.target.value);
            }
          }}
        />
      </label>
      <button
        onClick={() => {
          console.log(addMovie);
          postMovie();
        }}
      >
        Submit
      </button>

      {returnInfo[0] === undefined ? null : (
        <>
            <span>Movie Added</span>
          <ul>
            <li>Rating: {returnInfo[0].rating}</li>
            <li>Studio: {returnInfo[0].studio}</li>
            <li>Release Date: {returnInfo[0].date}</li>
            <li>Country: {returnInfo[0].country}</li>
            <li>Runtime: {returnInfo[0].runtime}min</li>
          </ul>
        </>
      )}
    </div>
  );
};