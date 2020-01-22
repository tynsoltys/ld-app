import React from 'react';

const Nav = (props) => {
  const navItems = props.items;
  const renderNavItems = () =>
    navItems.map((item, i) => {
      return (
        <li key={`workspace` + i + 1}>
          <div className='workspace-img' href={item.url} src={item.icon}></div>
          <p>⌘ {i + 1}</p>
        </li>
      );
    });

  return (
    <nav role='navigation' aria-label='workspaces' className='nav-container'>
      <ul>{renderNavItems()}</ul>
    </nav>
  );
};

export default Nav;
