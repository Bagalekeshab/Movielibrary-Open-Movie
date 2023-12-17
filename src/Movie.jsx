

import React from 'react'
import { useGlobalContext } from './Context.js';
import { NavLink } from 'react-router-dom';

const Movie = () => {
    const { movie } = useGlobalContext();
  return (
    <>
    <section className='Movie_page'>
      <div className="grid">

      {movie.map((curMoive) => {
        const { imdbID, Title, Poster} = curMoive;

        const movieName = Title.substring(0,15)
        return(
          <NavLink to ={`movie/${imdbID}`} key={imdbID}>

            <div className="card">
              <div className="card_info">
                <h2>{movieName}</h2>
                <img src={Poster} alt={imdbID} />
              </div>
            </div>



          </NavLink>
        
        )

      })}


      </div>

    </section>
        
        
      
      
    
    </>
  )


      }

export default Movie
