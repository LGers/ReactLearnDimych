import st from './Post.module.css';

const Post = (props) => {
  console.log(props.message);
  //debugger;
  return (
    <div className={st.myPostsItem}>
          <img src="http://www.youloveit.ru/uploads/posts/2020-04/1586360554_youloveit_ru_dipper_gravity_falls_na_avu01.jpg">
          </img>
          Post 1
          <div>
            <p>{props.message}</p>
            <span>Like</span>
            <span>Dislike</span>
          </div>
          <p>Name: {props.name}</p>
          <p>Age: {props.age}</p>
          
        </div>
        )
};

export default Post;