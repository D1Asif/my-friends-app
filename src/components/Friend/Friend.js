import React from 'react';
import './Friend.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Friend = (props) => {
    const {name, email, phone, id} = props.friend;
    return (
        <div className="friend-section">
            <img src={`https://randomuser.me/api/portraits/women/${id + 38}.jpg`} alt="" />
            <h2>{name}</h2>
            <h4>{email}</h4>
            <h4>{phone}</h4>
            <button onClick={() => {props.handleAddFriend(props.friend)}}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    );
};

export default Friend;