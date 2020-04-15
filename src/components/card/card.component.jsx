//file name: card.component.jsx ../src/components/card/card.component.jsx
import React from 'react';
import './card.styles.css';

//desconstruct props.user passing from CardList '<Card key={user.id} user={user}/>' to ({ user })
export const Card = ( { user }) => {

    return (
        <div className="card-container">
            <img src={`https://robohash.org/${user.id}?set=set5&size=180x180`} alt="userImage" />
            <h4>{user.name}</h4>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    );
}

