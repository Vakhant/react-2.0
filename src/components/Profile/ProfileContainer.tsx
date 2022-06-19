import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, updateStatus, getStatus, savePhoto, saveProfile } from '../../redux/profile-reducer';
import { withAuthRedirect } from "../../hocs/withAutRedirect";
import { compose } from "redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppStateType } from '../../redux/redux-store';
import { ProfileType } from '../../types/types';

type MapStatePropsT = ReturnType<typeof mapStateToProps>
type MapDispatchPtopsT = {
    savePhoto: (file:File)=>void
    getUserProfile: (userId: number)=>void
    getStatus: (userId: number)=>void
    updateStatus: (status: string)=>void
    saveProfile: (profile: ProfileType)=>Promise<any>
}

type PathParamsT = {
    userId: string
}

type PropsT = MapStatePropsT & MapDispatchPtopsT & RouteComponentProps<PathParamsT>

class ProfileContainer extends React.Component<PropsT> {

    refreshProfile(){
        let userId:number|null = +this.props.match.params.userId;
        
        if(!userId){
            userId = this.props.autherisedUserId
            // this.props.history.push("/login");
            if(!userId){
                console.error('ID should exist in URI params or in state(authorizedUserId)')
            }
        }
        this.props.getUserProfile(userId as number)
        this.props.getStatus(userId as number)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps:PropsT, prevState:PropsT) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){this.refreshProfile()}
    }

    render(){
        return(
            <Profile 
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            savePhoto={this.props.savePhoto}
            saveProfile={this.props.saveProfile}
            />
        )
    }
}

let mapStateToProps = (state:AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autherisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {savePhoto, getUserProfile, getStatus, updateStatus, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
