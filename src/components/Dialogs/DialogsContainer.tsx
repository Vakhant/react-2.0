import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hocs/withAutRedirect';
import Dialogs from './Dialogs';
import { AppStateType } from '../../redux/redux-store';
import { actions } from '../../redux/dialogs-reducer';
import { ComponentType } from 'react';

let mapStateToProps = (state: AppStateType) => {
  return {
    state: state.dialogsPage
  }
}


export default compose<ComponentType>(
  connect(mapStateToProps, {sendMessage: actions.sendMessage}),
  withAuthRedirect
)(Dialogs)