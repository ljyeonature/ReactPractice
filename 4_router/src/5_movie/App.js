// App.js

import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./components/Movies";
import "../App.css";
import "./css/App.css";

const App = () => {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    await axios
      .get("https://yts.mx/api/v2/list_movies.json")
      .then((result) => {
        // console.log(result);
        const temp = result.data.data.movies;
        // temp의 내용들이 하나하나 담긴다
        setMovies([...temp]);
        setIsLoading(false);
      })
      .catch((err) => console.log("에러:", err));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      {isLoading
        ? "로딩중..."
        : movies.map((movie, idx) => {
            return (
              <Movie
                className="movies"
                id={movie.id}
                title={movie.title}
                year={movie.year}
                poster={movie.medium_cover_image}
                summary={movie.summary}
                genre={movie.genres}
              />
            );
          })}
    </div>
  );
};

export default App;
