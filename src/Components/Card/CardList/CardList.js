import React from 'react';
import Card from '../Card';

// destructuring the params from (props) to ({robots})
// so instead of props.robots[i].name it is now robots[i].name
const CardList = ({robots}) => {
    const cardsArray = robots.map((robot, i) => {
        // TODO need to update key to something more unique like an ID
        return(
         <Card 
        key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email}
        website={robots[i].website}

        />
        )
    });
    return (
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList;