import React from 'react';
import MovieSurvey from '../Components/MovieSurvey'
import Question from '../Components/Question';

function Home({ handleSubmit}) {
    return (<div className='Survey'>
       <Question handleSubmit={handleSubmit}/>
         </div>
    );
}

export default Home;

