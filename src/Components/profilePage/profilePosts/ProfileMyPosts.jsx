import Post from './Post/Post';
import st from './ProfileMyPosts.module.css';

const ProfileMyPosts = () => {
  return (
    <div>
      <div>My posts Name of me</div>
      <div /*className={st.myPostsItem}*/>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={st.Posts}>
        <Post message='Hi'/>
        <Post message='How are You'/>
        <Post message="I'm a best react production"/>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        {/* <div className={st.myPostsItem}>Post 2</div>
        <div className={st.myPostsItem}>Post 3</div>
        <div className={st.myPostsItem}>Post 4</div>
        <div className={st.myPostsItem}>Post 5</div>
        <div className={st.myPostsItem}>Post 6</div>
        <div className={st.myPostsItem}>Post 7</div> */}
      </div>
    </div>
  )
};

export default ProfileMyPosts;