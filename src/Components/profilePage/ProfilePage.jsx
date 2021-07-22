import st from './ProfilePage.module.css';
import ProfileMyPosts from './profilePosts/ProfileMyPosts';

const ProfilePage = () => {
  return (
    <div>
      <div>
        Main content
        <img src='https://www.visitboi.co.nz/wp-content/uploads/2016/10/90-Mile-Beach-1200-400.jpg'></img>
      </div>
      <div>
        ava+descript
      </div>
      <ProfileMyPosts name='DIma' age='30' />
    </div>
  )
};

export default ProfilePage;