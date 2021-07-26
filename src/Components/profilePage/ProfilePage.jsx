import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileMyPosts from "./profilePosts/ProfileMyPosts";
import {dataPostsJs} from "../Redux/state";


const ProfilePage = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <ProfileMyPosts dataPostsJs={props.dataPosts} addPost={props.addPost} updTextArea={props.updTextArea}/>
        </div>
    )
};

export default ProfilePage;