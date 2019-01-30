import React from 'react';

const emojiStyle = {
  fontSize: '5em'
}

const Emoji = props => (
    <span
        style = {emojiStyle}
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>

);

export default Emoji;
