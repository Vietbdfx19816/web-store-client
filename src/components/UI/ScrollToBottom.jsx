import { useEffect, useRef } from 'react';

const ScrollToBottom = () => {
  const messagesEndRef = useRef();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); // move div into view
  }); // rerun every time this component re-render

  return <div ref={messagesEndRef} />;
};

export default ScrollToBottom;
