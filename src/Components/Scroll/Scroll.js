import React from 'react';

// makes it so that we only scroll the child component/CardList in this case
// so we can see the header and search bar even after scrolling to the bottom of the page
// {{}} = javascript expression
const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll', border:'5px solid black', height:'800px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;