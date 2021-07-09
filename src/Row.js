import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
function Row({ title, getUrl, bigThumbnail }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(getUrl);
      setFilms(request.data.results);
    }
    fetchData();
  }, [getUrl]);
  console.log(films);
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_thumbnails">
        {films.map((film, data) => (
          <img
            className="row_poster"
            key={film.id}
            src={`${base_url}${
               film.backdrop_path
            }`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
