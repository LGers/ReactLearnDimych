import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./profilePosts/MyPosts";
import MyPostsContainer from "./profilePosts/MyPostsContainer";

const ProfilePage = (props) => {
    //debugger
    return (
        <div>
            <ProfileInfo/>

            {/*<MyPosts
                dataPostsJs={props.profilePage.dataPosts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />*/}
            <MyPostsContainer
                store={props.store}
                // dataPostsJs={props.store.profilePage.dataPosts}
                // newPostText={props.store.profilePage.newPostText}
                // dispatch={props.store.dispatch}
            />
        </div>
    )
};

export default ProfilePage;