import st from './ProfileMyPosts.module.css';
import MyPosts from "./Post/MyPosts";


const ProfileMyPosts = () => {
    let postData = [
        {message: 'hi', likesCount: 15},
        {message: 'How are You', likesCount: 5},
        {message: 'I\'m a best react production', likesCount: 3},
        {message: 'I\'m a best react production1', likesCount: 7},
        {message: 'I\'m a best react production4', likesCount: 6}
    ]
    let postEl = postData.map(p => <MyPosts message={p.message} likesCount={p.likesCount}/>)
    return (
        <div>
            <div><h3>My posts Name of me</h3></div>
            <div className={st.addPost}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={st.Posts}>
                {postEl}
            </div>
        </div>
    )
};

export default ProfileMyPosts;
