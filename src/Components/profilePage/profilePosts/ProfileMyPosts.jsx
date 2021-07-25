import st from './ProfileMyPosts.module.css';
import MyPosts from "./Post/MyPosts";
import {dataPostsJs} from './../../../data';


const ProfileMyPosts = () => {

    let postEl = dataPostsJs.map(p => <MyPosts message={p.message} likesCount={p.likesCount}/>)
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
