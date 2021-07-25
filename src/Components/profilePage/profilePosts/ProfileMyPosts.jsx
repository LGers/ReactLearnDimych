import st from './ProfileMyPosts.module.css';
import MyPosts from "./Post/MyPosts";
//import {dataPostsJs} from './../../../data';


const ProfileMyPosts = (props) => {
    //let pr = () => props.dataPostsJs;
    //debugger
    console.log(props)
    //let dataMsgsJs = () => props.dataMsgsJs;
     let postEl = props.dataPostsJs.map(p => <MyPosts message={p.message} likesCount={p.likesCount}/>)
    //let postEl = pr.map(p => <MyPosts message={p.message} likesCount={p.likesCount}/>)
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
