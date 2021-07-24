import st from './ProfilePage.module.css';
//import ProfileMyPosts from './profilePosts/ProfileMyPosts';
//import MyPosts from "./profilePosts/Post/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileMyPosts from "./profilePosts/ProfileMyPosts";


const ProfilePage = () => {
    return (
        <div>
            <ProfileInfo/>
            <ProfileMyPosts/>
        </div>
    )
};

export default ProfilePage;