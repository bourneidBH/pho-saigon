import React from 'react';
import './TrashButton.css';

function TrashButton(props) {
  const { onClick } = props;

  return(
    <button className="trash" onClick={onClick}>
        <i className="material-icons">delete_outline</i>
    </button>
  )
};

export default TrashButton;