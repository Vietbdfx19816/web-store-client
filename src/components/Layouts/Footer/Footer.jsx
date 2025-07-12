import React from 'react';

import FooterColumn from './FooterColumn';

import classes from './Footer.module.css';

const DUMMY_FOOTER = [
  {
    title: 'Customer Services',
    link: [
      { name: 'Help & Contact us', url: '#' },
      { name: 'Return & Refunds', url: '#' },
      { name: 'Online Stores', url: '#' },
      { name: 'Terms & Conditions', url: '#' },
    ],
  },
  {
    title: 'Company',
    link: [
      { name: 'What We Do', url: '#' },
      { name: 'Available Services', url: '#' },
      { name: 'Latest Posts', url: '#' },
      { name: 'FAQs', url: '#' },
    ],
  },
  {
    title: 'Social Media',
    link: [
      { name: 'Twitter', url: '#' },
      { name: 'Instagram', url: '#' },
      { name: 'Facebook', url: '#' },
      { name: 'Pinterest', url: '#' },
    ],
  },
];

function Footer() {
  return (
    <footer id="footer" className={classes.footer}>
      <div className="container">
        <div className={classes.footerNav}>
          {DUMMY_FOOTER.map(item => (
            <FooterColumn
              key={item.title}
              title={item.title}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
