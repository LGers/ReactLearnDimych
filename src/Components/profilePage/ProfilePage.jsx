import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileMyPosts from "./profilePosts/ProfileMyPosts";
import {dataPostsJs} from "../Redux/state";

const ProfilePage = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <ProfileMyPosts

                dataPostsJs={props.profilePage.dataPosts}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updNewPostText={props.updNewPostText}
                // dataPostsJs={props.dataPosts}
                // addPost={props.addPost}
                // newPostText={props.newPostText}
                // updPostText={props.updPostText}
            />
        </div>
    )
};

export default ProfilePage;