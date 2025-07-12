import React, { useState } from 'react';

import ReactDOM from 'react-dom';
import ChatBox from './ChatBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faXmark } from '@fortawesome/free-solid-svg-icons';

import classes from './LiveChat.module.css';

// selecting portal location
const chatOverlay = document.getElementById('chatOverlay');

function LiveChat() {
  const [showChat, setShowChat] = useState(false);

  const showChatHandler = () => {
    setShowChat(state => !state);
  };

  return (
    <div className={classes.liveChat}>
      <div className={classes.chatIcon} onClick={showChatHandler}>
        {!showChat && <FontAwesomeIcon icon={faCommentDots} />}
        {showChat && <FontAwesomeIcon icon={faXmark} />}
      </div>
      {showChat && ReactDOM.createPortal(<ChatBox />, chatOverlay)}
    </div>
  );
}

export default LiveChat;
