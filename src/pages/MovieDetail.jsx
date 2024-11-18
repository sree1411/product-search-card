import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export const MovieDetail = () => {

  const params = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie(){
      const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
      const json = await response.json()
      setMovie(json);
      console.log(json);
    }
    fetchMovie();
  }, [params.id]);

  return (
    <main>
      <div className="d-flex flex-wrap">
      <div className='card' style={{width: "19rem", margin:"3px", padding:"10px"}}>
      <img src={movie.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-text"> Title {movie.title}</p>
        <p className="card-text"> Description{movie.description}</p>
        <p className="card-text"> category{movie.category}</p>
        <p className="card-text"> Price{movie.price}</p>
        <Link className='btn btn-primary' to={'/'}> Back to Home</Link>
      </div>
  </div>
    </div>
  </main>
  )
}
