import React from 'react';
import st from './ProfileMyPosts.module.css';
import MyPosts from "./Post/MyPosts";
//import {dataPostsJs} from './../../../data';


const ProfileMyPosts = (props) => {
    // debugger;
    let postEl =
        props.dataPostsJs.map(p => <MyPosts message={p.message} name={p.name} age={p.age} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }
    let updateState = () => {
        let text = newPostElement.current.value;
        props.updTextArea(text);
        //props.updTextArea.
        //alert(text);
    }

    return <div>
            <div><h3>My posts Name of me</h3></div>
            <div className={st.addPost}>
                <div>
                    <textarea onChange={updateState} ref={newPostElement}></textarea>
                </div>
                <div>
                    {/*<button onClick={addPost}>Add post</button>*/}
                    {/*//<button>Add post</button>*/}
                    <button onClick={addPost}>Add post</button>

                </div>
            </div>
            <div className={st.Posts}>
                {postEl}
            </div>
        </div>

};

export default ProfileMyPosts;
