import React from 'react';
import MoviePoster from '../Components/MoviePoster';
import Question from '../Components/Question';

function Home({ handleSubmit}) {
    console.log('Home rendered');
    return (
      <div className='Survey'>
        <h2 style={{color:'#fff',textAlign:'center',marginTop:10}}>Home component mounted</h2>
        <Question handleSubmit={handleSubmit}/>
      </div>
    );
}

export default Home;

