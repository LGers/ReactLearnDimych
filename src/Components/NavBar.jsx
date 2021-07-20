//import React from 'react';
import st from './NavBar.module.css';

const NavBar = () => {
  return (

    <nav className={st.navBar}>
      <div className={st.navItem}><a href='#a'>Profile</a></div>
      <div className={st.navItem}><a href='#a'>Messages</a></div>
      <div className={st.navItem}><a href='#a'>News</a></div>
      <div className={st.navItem}><a href='#a'>Music</a></div>
      <div className={st.navItem}><a href='#a'>Settings</a></div>
    </nav>


  )

};

export default NavBar;