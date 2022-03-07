import { reduxForm } from "redux-form";
import { Field } from "redux-form"
import { maxLengthCreator, requiredField } from "../../utils/validators/validators";
import { Input, Textarea } from "../common/FormsControls/FormsControls"
import css from './Profile.module.css';

const ProfileDataForm = ({handleSubmit, ...props}) => {
    return (<>
        <button onClick={props.deactivateEditMode}>&larr; return</button>
        <form onSubmit={handleSubmit}>
            <button>save</button>

            {props.error && <div>{props.error}</div>}

            <div><b>Full name:</b>
                <Field component={Input} name={'fullName'} type="text" placeholder="Full name"/>
            </div>
            
            <div><b>Looking for a job:</b> 
                <Field component={'input'} name={'lookingForAJob'} type="checkbox"/>
            </div>
            <div
                ><b>My proffesional skills:</b> 
                <Field component={Textarea} name={'lookingForAJobDescription'} placeholder="lookingForAJobDescription"/>
            </div>
            <div>
                <b>About me:</b>
                <Field component={Textarea} name={'aboutMe'} placeholder={'enter your message'} className={css.addpost_text_area}/>
            </div>
            <div>
                <b>Contacts:</b>
             {Object.keys(props.profile.contacts).map(key =>
                <div key={key}><b>{key}: </b> 
                    <Field component={'input'} name={`contacts.${key}`} type="text" placeholder={key}/>
                </div>)}
            </div>
        </form>
        </>
    )
  }

  const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm