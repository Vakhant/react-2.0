import { reduxForm, InjectedFormProps } from 'redux-form';
import { Field } from "redux-form"
import { Input, Textarea } from "../common/FormsControls/FormsControls"
import css from './Profile.module.css';
import { FC } from 'react';
import { ProfileType } from '../../types/types';

type PropsT = {
    deactivateEditMode: ()=>void
    profile: ProfileType
}

const ProfileDataForm: FC<InjectedFormProps<ProfileType,PropsT> & PropsT> = 
({handleSubmit, deactivateEditMode, error, profile}) => {
    return (<>
        <button onClick={deactivateEditMode}>&larr; return</button>
        <form onSubmit={handleSubmit}>
            <button>save</button>

            {error && <div>{error}</div>}

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
             {Object.keys(profile.contacts).map(key =>
                <div key={key}><b>{key}: </b> 
                    <Field component={'input'} name={`contacts.${key}`} type="text" placeholder={key}/>
                </div>)}
            </div>
        </form>
        </>
    )
  }

  const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsT>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm