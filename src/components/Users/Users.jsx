import css from './Users.module.css';

const Users = (props) => {
  if(props.users.length === 0) {
    props.setUsers([
      {id:"1", photoUrl: "img1", followed: true, fullName: "Max", status: "kek", location:{country: "Russia", city: "Spb"}},
      {id:"2", photoUrl: "img2", followed: false, fullName: "Dmitry", status: "lol", location:{country: "Russia", city: "Moscow"}},
      {id:"3", photoUrl: "img3", followed: true, fullName: "Axie", status: "cheburan", location:{country: "Russia", city: "Ekaterinburg"}},
      {id:"4", photoUrl: "img4", followed: true, fullName: "Tvarina", status: "uran", location:{country: "Russia", city: "Novgorod"}},
  
    ])
  }
  return (
    <div className={css.user_list}>
      {
        props.users.map( u => <div className={css.user_block} key={u.id}>
            <div className="user_logo">{u.photoUrl}</div>
            <div className="user_full_name">
              {u.fullName}
            </div>
            <div className="user_status">
              {u.status}
            </div>
            <div className="user_location">
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </div>
            {u.followed ? 
            <button onClick={()=>props.unfollow(u.id)}>follow</button> :
            <button onClick={()=>props.follow(u.id)}>unfollow</button>
            }
          </div>
        )
      }
    </div>
  );
}

export default Users;