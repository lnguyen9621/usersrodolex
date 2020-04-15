//file name: card-list.component.jsx ../src/components/card-list/card-list.component.jsx
import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

//desconstruct props.users passsing from App '<CardList users={filterUsers} />' to ( { users })
export const CardList = ({ users }) => {

    return (
        <div className="card-list">
            {users.map(user => (
                <Card key={user.id} user={user}/>
            ))}
        </div>
    );
}
