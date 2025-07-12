import { useEffect, useState } from 'react';

import { io } from 'socket.io-client';
import { getLocalRoomId, setLocalRoomId } from '../store/localStorage';

const socket = io('http://localhost:5000/chat', {
  withCredentials: true,
  autoConnect: false,
  auth: {
    sessionID: getLocalRoomId(),
  },
});

export default function useSocket() {
  const [chatMessages, setChatMessages] = useState([]);
  const [roomId, setRoomId] = useState(getLocalRoomId());

  useEffect(() => {
    const loadMessageHandler = messages => {
      setChatMessages(messages);
    };

    const newMessageHandler = newMessage => {
      setChatMessages(prevMessages => [...prevMessages, newMessage]);
    };

    // Function save roomId which is sent from server
    const joinRoomHandler = payload => {
      switch (payload?.action) {
        case 'joinRoom':
          setLocalRoomId(payload.roomId);
          setRoomId(payload.roomId);
          break;
        case 'leaveRoom':
          setLocalRoomId();
          setRoomId(null);
          setChatMessages([]);
          break;
      }
    };

    socket.on('loadMessages', loadMessageHandler);

    socket.on('newMessage', newMessageHandler);

    socket.on('room', joinRoomHandler);

    return () => {
      // clear listener
      socket.off('newMessage', newMessageHandler);
      socket.off('loadMessages', loadMessageHandler);
      socket.off('room', joinRoomHandler);
    };
  }, []);

  useEffect(() => {
    // if (roomId) {
    // load messages when join room
    socket.emit('loadMessages');

    // update roomId query in socket
    socket.on('disconnect', () => {
      socket.auth.roomId = roomId;
    });

    return () => {
      socket.off('disconnect');
    };
    // }
  }, [roomId]);

  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect(); // disconnect when unmount
    };
  }, []);

  const sendMessage = message => {
    socket.emit('message', { message, roomId });
  };

  return { chatMessages, sendMessage };
}
