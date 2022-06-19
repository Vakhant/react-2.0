import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppStateType } from '../redux/redux-store';


let mapStateToPropsForRedirect = (state:AppStateType) => ({
    isAuth: state.auth.isAuth
})

type MapPropsType = {
    isAuth: boolean
}
type DispatchPropsType = {
}

export function withAuthRedirect<WCP> (Component: React.ComponentType<WCP>) {
    const RedirectComponent: React.FC<DispatchPropsType & MapPropsType> = (props) => {
        let {isAuth, ...restPtops} = props
        if (!isAuth) return <Redirect to={'/login'} />


        return <Component {...restPtops as WCP}/>
    }

    // class RedirectComponent extends React.Component {
    //     render() {
    //         if (!this.props.isAuth) return <Redirect to={'/login'} />

    //         return <Component {...this.props} />
    //     }
    // }
    let ConnectedAuthRedirectComponent = connect<MapPropsType,DispatchPropsType,WCP,AppStateType>(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent;
}