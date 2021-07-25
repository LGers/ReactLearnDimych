import st from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let pathItem = "/dialogs/" + props.idItem;

    return (
        <div className={st.dialog + ' ' + st.active}>
            <NavLink to={pathItem} className={st.dialog + ' ' + st.active}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;