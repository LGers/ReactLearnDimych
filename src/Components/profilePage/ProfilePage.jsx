import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileMyPosts from "./profilePosts/ProfileMyPosts";
import {dataPostsJs} from "../../data";


const ProfilePage = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <ProfileMyPosts dataPostsJs={props.dataPostsJs}/>
        </div>
    )
};

export default ProfilePage;