// import React from 'react'
//import './ProfilePage.css';
import st from './ProfilePage.module.css';



const ProfilePage = () => {
  return (
    <div className={st.mainContent}>
      <div>
        Main content
        <img src='https://www.visitboi.co.nz/wp-content/uploads/2016/10/90-Mile-Beach-1200-400.jpg'></img>
      </div>
      <div>
        ava+descript
      </div>
      <div className={st.posts}>
        My posts
        <div className={st.postsItem}>
          New post
        </div>
      </div>
      <div className={st.posts}>
        <div className={st.navItem}>Post 1</div>
        <div className={st.postsItem}>Post 2</div>
        <div className={st.postsItem}>Post 3</div>
        <div className={st.postsItem}>Post 4</div>
      </div>


    </div>
  )

};

export default ProfilePage;