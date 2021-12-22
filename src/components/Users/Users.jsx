import * as axios from 'axios';
import css from './Users.module.css';
import avatar from '../../assets/img/avatar.svg'
import React from 'react';

class Users extends React.Component{

  // componentDidMount(){
  //   axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
  //     this.props.setUsers(response.data.items)
  //     this.props.setTotalUsersCount(response.data.totalCount)
  //   })
  // }
  getUsers = () => {
    if(this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render(){
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    console.log(pages);
    return (
      <div className={css.user_list}>
        <div>
          {pages.map(p => {
            return <span className={css.page_number + ` ${this.props.currentPage === p && css.selectedPage}`}
            onClick={(e) => this.onPageChanged(p)}>{p}</span>
          })}
        </div>
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