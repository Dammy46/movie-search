import React from 'react';
import Card from './Card';
const CardList = ({ movies }) => {

   return (
     <div>
       {movies.map((user, i) => {
         return (
           <Card
             key={i}
             id={movies[i].id}
             name={movies[i].name}
             img={movies[i].img}
             description={movies[i].description}
           />
         );
       })}
     </div>
   );
}

export default CardList;