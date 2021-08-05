import st from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={st.header}>
            <img src='https://upload.wikimedia.org/wikipedia/ru/5/53/Garena_Free_Fire_Logo.png'></img>
            <div className={st.loginBlock}>
                {props.isAuth ? props.login :
                <NavLink to={'/login'}>
                    LOGIN
                </NavLink>
                }
            </div>
        </header>
    )
};

export default Header;