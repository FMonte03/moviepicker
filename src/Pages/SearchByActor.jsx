import React from 'react';
import MovieSurvey from '../Components/MovieSurvey.jsx'
import Question from '../Components/Question.jsx';
import SearchByActorComponent from '../Components/SearchByActorComponent.jsx';


function SearchByActor() {
    return (<div className='Survey'>
       <SearchByActorComponent/>
         </div>
    );
}

export default SearchByActor;

