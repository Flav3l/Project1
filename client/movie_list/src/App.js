import logo from './logo.svg';
import './App.css';

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

function App() {
  return (
    <div className="App">
      return(
      <header className="App-header">
          {movies.map((elm, index) => {
            return(
              <div key ={index}>
                <p>{elm.title}</p>
                </div>
          )})}
      </header>)
    </div>
  );
}

export default App;
