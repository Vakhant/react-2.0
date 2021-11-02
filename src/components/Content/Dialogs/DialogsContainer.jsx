import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/dialogs-reducer';
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;