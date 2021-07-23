import st from './NavBar.module.css';


console.log(st);
const NavBar = () => {
  return (
    <div className={st.navBar}>
      <div className={`${st.navItem} ${st.active}`}>
        <a href="/profile">Profile</a>
      </div>
      <div className={st.navItem}>
        <a href="/messages">Messages</a>
      </div>
      <div className={st.navItem}>
        <a href="/news">News</a>
      </div>
      <div className={st.navItem}>
        <a href="/music">Music</a>
      </div>
      <div className={st.navItem}>
        <a href="/settings">Settings</a>
      </div>
    </div>
  )
};
export default NavBar;