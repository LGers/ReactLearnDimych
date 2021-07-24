import st from './ProfileMyPosts.module.css';
import MyPosts from "./Post/MyPosts";

let dataMsgs=[
    [message: 'hi', likesCount: '15'],
    [message: 'How are You', likesCount: '5'],
    [message: 'I\'m a best react production', likesCount: '3'],
    [message: 'I\'m a best react production', likesCount: '7'],
    [message: 'I\'m a best react production', likesCount: '6']
];
const ProfileMyPosts = () => {
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
                <MyPosts message='Hi' likesCount='10'/>
                <MyPosts className={st.postsBlock} message='How are You' likesCount='15'/>
                <MyPosts className={st.postsBlock} message="I'm a best react production" likesCount='5'/>
                <MyPosts className={st.postsBlock} message="I'm a best react production" likesCount='3'/>
                <MyPosts className={st.postsBlock} message="I'm a best react production" likesCount='7'/>
                <MyPosts className={st.postsBlock} message="I'm a best react production" likesCount='6'/>
            </div>
        </div>
    )
};

export default ProfileMyPosts;

// <MyPosts className ={st.postsBlock} message='Hi' likesCount='1'/>
// <MyPosts message='How are You???' likesCount='1'/>
// <MyPosts message="I'm a best react production" likesCount='1'/>
// <MyPosts message="I'm a best react production" likesCount='1'/>
// <MyPosts message="I'm a best react production" likesCount='1'/>
// <MyPosts message="I'm a best react production" likesCount='1'/>