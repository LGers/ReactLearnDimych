import React from 'react';
import st from './ProfileMyPosts.module.css';
import MyPosts from "./Post/MyPosts";


const ProfileMyPosts = (props) => {
    let postEl =
        props.dataPostsJs.map(p => <MyPosts message={p.message} name={p.name} age={p.age} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updNewPostText(text);
    }

    return <div>
        <div><h3>My posts Name of me</h3></div>
        <div className={st.addPost}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={st.Posts}>
            {postEl}
        </div>
    </div>

};

export default ProfileMyPosts;
