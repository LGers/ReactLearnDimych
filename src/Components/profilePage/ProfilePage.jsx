import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileMyPosts from "./profilePosts/ProfileMyPosts";

const ProfilePage = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <ProfileMyPosts
                dataPostsJs={props.profilePage.dataPosts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
};

export default ProfilePage;