import * as axios from 'axios';
import css from './Users.module.css';
import avatar from '../../assets/img/avatar.svg'
import React from 'react';

class Users extends React.Component{

  getUsers = () => {
    if(this.props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        this.props.setUsers(response.data.items)
      })
    }
  }
  render(){
    return (
      <div className={css.user_list}>
      <button onClick={this.getUsers}>users list</button>
        {
          this.props.users.map( u => <div className={css.user_block} key={u.id}>
              <div className={css.user_logo}><img src={u.photos.small != null ? u.photos.small : avatar} alt="" /></div>
              <div className="user_full_name">
                {u.name}
              </div>
              <div className="user_status">
                {u.status}
              </div>
              {u.followed ? 
              <button onClick={()=>this.props.unfollow(u.id)}>follow</button> :
              <button onClick={()=>this.props.follow(u.id)}>unfollow</button>
              }
            </div>
          )
        }
      </div>
    );
  }
}

export default Users;