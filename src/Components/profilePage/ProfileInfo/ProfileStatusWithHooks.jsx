import React, {useState} from 'react';
import st from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                    <span onDoubleClick={activateEditMode}
                          className={st.status}>{props.status || "-------"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} value={''} onChange={onStatusChange} onBlur={deActivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )

}

export default ProfileStatusWithHooks;