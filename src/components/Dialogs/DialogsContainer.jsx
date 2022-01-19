import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hocs/withAutRedirect';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onMessageClick: () => {
      dispatch(sendMessageCreator())
    },
    onNewMessageChange: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    }
  }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;