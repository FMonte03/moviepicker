import React from 'react';
import MoviePoster from '../Components/MoviePoster';
import Question from '../Components/Question';

function Home({ handleSubmit}) {
    
    return (
      <div className='Survey'>
  
        <Question handleSubmit={handleSubmit}/>
      </div>
    );
}

export default Home;

