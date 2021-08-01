import st from './../Users.module.css';
import {NavLink} from "react-router-dom";

const UserItem = (props) => {
    let pathItem = "/users/" + props.idItem;

    // return (
    //     <div className={st.user}>
    //         <div>
    //             <div className={st.center}>
    //                 <img className={st.avaImg} src={props.photoUrl}/>
    //             </div>
    //             <div className={st.center}>{
    //                 props.followed
    //                     ? <button className={st.center} onClick={props.unFollowClick(props.id)}>Follow</button>
    //                     : <button className={st.center} onClick={props.followClick(props.id)}>Unfollow</button>
    //             }
    //
    //             </div>
    //         </div>
    //         <div className={st.userDataCont}>
    //             <div>
    //                 <div className={st.userData}>
    //                     <div>
    //                         <div>id: {props.idItem}</div>
    //                         <div>{props.name}</div>
    //                     </div>
    //                     <div className={st.userLocation}>
    //                         <div className={st.userLocation}>Country: {props.location.country}</div>
    //                         <div className={st.userLocation}>City: {props.location.city}</div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className={st.userLocation}>status: {props.status}</div>
    //         </div>
    //
    //     </div>
    // )
}
export default UserItem;