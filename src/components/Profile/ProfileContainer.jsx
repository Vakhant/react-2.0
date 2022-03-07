import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Profile from "./Profile";
import { getUserProfile, updateStatus, getStatus, savePhoto, saveProfile } from './../../redux/profile-reducer';
import { withAuthRedirect } from "../../hocs/withAutRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {

    refreshProfile(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.autherisedUserId
            // this.props.history.push("/login");
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId){this.refreshProfile()}
    }

    render(){
        return(
            <Profile 
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            savePhoto={this.savePhoto}
            saveProfile={this.props.saveProfile}
            {...this.props}/>
        )
    }  
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autherisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {savePhoto, getUserProfile, getStatus, updateStatus, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
