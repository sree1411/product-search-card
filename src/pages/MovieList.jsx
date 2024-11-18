import React from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { UserData } from "../UserContext";
import { useTitle } from "../hooks/useTitle";
 
 

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(title)
  const {searchQuery} = UserData()
  
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
 
  

  return (
    <main>
      <div className="d-flex flex-wrap">
        {filteredMovies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};
