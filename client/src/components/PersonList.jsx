import React from 'react';
import axios from 'axios';

const PersonList = (props) =>{
    const { people } = props;
    return (
        <div>
            {
                people.map((person, idx) =>{
                    return <p key={idx}>{person.userName}, {person.email}</p>
                })
            }
            
        </div>
    );
}
export default PersonList;