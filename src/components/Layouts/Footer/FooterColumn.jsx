import React from 'react';
import { Link } from 'react-router';

function FooterColumn({ title, link }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {link.map(item => (
          <li key={item.name}>
            <Link to={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;
