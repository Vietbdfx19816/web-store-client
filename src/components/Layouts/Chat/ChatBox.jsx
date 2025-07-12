import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFaceSmile,
  faPaperPlane,
  faPaperclip,
} from '@fortawesome/free-solid-svg-icons';

import ScrollToBottom from '../../UI/ScrollToBottom';

import useSocket from '../../../hook/useSocket';

import classes from './ChatBox.module.css';

// Main component
function ChatBox() {
  const [chatInput, setChatInput] = useState('');
  const { chatMessages, sendMessage } = useSocket();

  const chatInputHandler = e => {
    setChatInput(e.target.value);
  };

  const sendChat = async e => {
    e.preventDefault();

    const text = chatInput.trim();
    if (text === '') return;

    sendMessage(text);
    setChatInput('');
  };

  return (
    <div className={classes.chatBox}>
      <div className={classes.recipient}>
        <p>Customer Support</p>
      </div>
      <div className={classes.chatContent}>
        {chatMessages.length !== 0 &&
          chatMessages.map(item => (
            <p
              key={item.createAt}
              className={item.role === 'Admin' ? classes.default : classes.user}
            >
              {item.message}
            </p>
          ))}
        <ScrollToBottom />
      </div>
      <form className={classes.chatInput} onSubmit={sendChat}>
        <input
          type="text"
          name="message"
          placeholder="Enter message!"
          value={chatInput}
          onChange={chatInputHandler}
        />
        <FontAwesomeIcon icon={faPaperclip} />
        <FontAwesomeIcon icon={faFaceSmile} />

        <FontAwesomeIcon icon={faPaperPlane} onClick={sendChat} />
      </form>
    </div>
  );
}

export default ChatBox;
