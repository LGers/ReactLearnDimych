import st from './NavBar.module.css';

console.log(st);
const NavBar = () => {
  return (

    <div className={st.navBar}>
      {/* <p className={st.navItem}>Hi its p teg</p> */}
      <div className={`${st.navItem} ${st.active}`}>
        <a href="/profile">Profile</a>
      </div>
      <div className={st.navItem}>
        <a href="/messages">Messages</a>
      </div>
      <div className={st.navItem}>
        <a>News</a>
      </div>
      <div className={st.navItem}>
        <a>Music</a>
      </div>
      <div className={st.navItem}>
        <a>Settings</a>
      </div>
    </div>
  )
};

export default NavBar;