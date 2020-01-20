import React, { useState, useEffect } from 'react';

const Nav = (props) => {
  // This is actually probably a fine time to use props but just wanted to play around with some hooks.
  const [navItems] = useState(props.items);
  console.log(navItems);

  useEffect(
    () => {} //console.log(`There are ${navItems.length} items in the nav.`)
  );

  const renderNavItems = () =>
    navItems.map((item, i) => {
      return (
        <li>
          <div className='workspace-img' href={item.url} src={item.icon}></div>
          <p>⌘ {i + 1}</p>
        </li>
      );
    });

  return (
    <nav className='nav-container'>
      <ul>{renderNavItems()}</ul>
    </nav>
  );
};

export default Nav;
