import st from './MyPosts.module.css';

const MyPosts = (props) => {
    //console.log(props.message);
    //debugger;
    return (
        <div className={st.myPostsItem}>

            <div>
                <div className={st.nameClass}>
                    <span>Name: {props.name}</span>
                    <span>Age: {props.age}</span>
                </div>
                <img
                    src="http://www.youloveit.ru/uploads/posts/2020-04/1586360554_youloveit_ru_dipper_gravity_falls_na_avu01.jpg">
                </img>
            </div>

            <div>
                <p className={st.msgPost}><span className={st.msgSt}>Message: </span>{props.message}</p>
                <span>Likes {props.likesCount}</span>
            </div>
        </div>
    )
};

export default MyPosts;