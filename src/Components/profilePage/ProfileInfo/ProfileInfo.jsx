import st from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    //debugger
    return (
        <div>
            <div className={st.mainImgBlock}>
                <h2>Main content</h2>
                {/*<img src='https://www.visitboi.co.nz/wp-content/uploads/2016/10/90-Mile-Beach-1200-400.jpg'></img>*/}
            </div>
            <div className={st.decriptionBlock}>
                <div >Имя: <span className={st.profileName}>{props.profile.fullName}</span></div>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={'Hello samurays ReactJs'}/>
                <div>Обо мне: [{props.profile.aboutMe}]</div>
                <div>Контакты facebook: [{props.profile.contacts.facebook}]</div>
                <div>Контакты web: [{props.profile.contacts.website}]</div>

                
            </div>
        </div>
    )
}

export default ProfileInfo;