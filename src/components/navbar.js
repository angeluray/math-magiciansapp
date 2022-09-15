import React from 'react';
import { NavLink } from 'react-router-dom';

const MathNavbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      Text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      Text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      Text: 'Quote',
    },
  ];
  return (
    <>
      <nav className="navBar">
        <h1 className="navTitle">Math Magicians</h1>
        <ul>
          {links.map((nlink) => (
            // eslint-disable-next-line
            <li key={nlink.id} className={'li' + nlink.id.toString()}>
              <NavLink to={nlink.path}>{nlink.Text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MathNavbar;
