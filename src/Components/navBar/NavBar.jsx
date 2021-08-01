import st from './NavBar.module.css';
import {NavLink} from "react-router-dom";


console.log(st);
const NavBar = () => {
    return (
        <nav className={st.navBar}>
            <div className={st.navItem}>
                <NavLink to="/profile" activeClassName={st.active}>Profile</NavLink>
            </div>
            <div className={st.navItem}>
                <NavLink to="/dialogs" activeClassName={st.active}>Dialogs/Msgs</NavLink>
            </div>
            <div className={st.navItem}>
                <NavLink to="/users" activeClassName={st.active}>Users</NavLink>
            </div>

            <div className={st.navItem}>
                <NavLink to="/news" activeClassName={st.active}>News</NavLink>
            </div>
            <div className={st.navItem}>
                <NavLink to="/music" activeClassName={st.active}>Music</NavLink>
            </div>
            <div className={st.navItem}>
                <NavLink to="/settings" activeClassName={st.active}>Settings</NavLink>
            </div>
        </nav>
    )
};
export default NavBar;