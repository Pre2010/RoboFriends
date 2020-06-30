import React from 'react';

// even more destructuring
const Card = ({ name, email, website, id }) => {
// const Card = (props) => {
    // destructuring
    // const { name, email, id } = props;
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}`} alt='robots' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{website}</p>
            </div>
        </div>
    )
}

export default Card;