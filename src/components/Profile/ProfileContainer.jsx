import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Profile from "./Profile";
import { getUserProfile, updateStatus, getStatus } from './../../redux/profile-reducer';
import { withAuthRedirect } from "../../hocs/withAutRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 10942
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render(){
        return(
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }  
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)
