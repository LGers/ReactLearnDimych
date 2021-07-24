import st from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={st.mainImgBlock}>
                <h2>Main content</h2>
                <img src='https://www.visitboi.co.nz/wp-content/uploads/2016/10/90-Mile-Beach-1200-400.jpg'></img>
            </div>
            <div className={st.decriptionBlock}>
                ava+descript
            </div>
        </div>
    )
}

export default ProfileInfo;