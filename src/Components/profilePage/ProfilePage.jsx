import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileMyPosts from "./profilePosts/ProfileMyPosts";

const ProfilePage = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <ProfileMyPosts
                dataPostsJs={props.profilePage.dataPosts}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updNewPostText={props.updNewPostText}
            />
        </div>
    )
};

export default ProfilePage;