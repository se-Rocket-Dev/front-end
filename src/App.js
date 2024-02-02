import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import { DisplayBoard } from "./components/DisplayBoard";
import { Movies } from "./components/Movies";
import CreateMovie from "./components/CreateMovie";
import { getAllMovies, createMovie } from "./services/MovieService";

function App() {
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);
  const [numberOfMovies, setNumberOfMovies] = useState(0);



  const movieCreate = (e) => {
    createMovie(movie).then((response) => {
      console.log(response);
      setNumberOfMovies(numberOfMovies + 1);
    });
  };

  const fetchAllMovies = () => {
    getAllMovies().then((movies) => {
      console.log(movies);
      setMovies(movies);
      setNumberOfMovies(movies.length);
    });
  };

  useEffect(() => {

    getAllMovies().then((movies) => {
      console.log(movies);
      setMovies(movies);
      setNumberOfMovies(movies.length);
    });
  }, []);

  const onChangeForm = (e) => {
    if (e.target.name === "movies_title") {
      movie.title = e.target.value;
    } else if (e.target.name === "movies_genre") {
      movie.genre = e.target.value;
    } else if (e.target.name === "movies_director") {
      movie.director = e.target.value;
    } else if (e.target.name === "movies_release") {
      movie.release_year = e.target.value;
    }
    setMovie(movie);
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-8">
            <CreateMovie
              movie={movie}
              onChangeForm={onChangeForm}
              createMovie={movieCreate}
            ></CreateMovie>
          </div>

          <div className="col-md-4">
            <DisplayBoard
              numberOfMovies={numberOfMovies}
              getAllMovies={fetchAllMovies}
            ></DisplayBoard>
          </div>

          <div className="col-md-12">
          <div className="row mrgnbtm">
            <Movies movies={movies}></Movies>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
