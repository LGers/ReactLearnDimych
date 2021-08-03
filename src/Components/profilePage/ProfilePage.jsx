import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./profilePosts/MyPostsContainer";

const ProfilePage = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
};

export default ProfilePage;