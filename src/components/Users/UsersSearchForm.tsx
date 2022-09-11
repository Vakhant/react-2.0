import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { FilterT, follow } from '../../redux/users-reducer';
import { getFilter } from '../../redux/users-selectors';


  const usersSearchFormValidate = (value:any) => {
    const errors = {}
    return errors
  }
  
  type FormT = {
    term: string
    friend: string
  }
  
  type PropsT = {
    onFillterChanged: (filter:FilterT)=>void
  }
  
  
  const UsersSearchForm: React.FC<PropsT> = React.memo((props) => {
    const filter = useSelector(getFilter)
    const submit = (values: FormT, { setSubmitting } : {setSubmitting:(isSubmitting : boolean) => void}) => {
      const filter: FilterT = {
        term: values.term,
        friend: values.friend === "null" ? null : values.friend === "true" ? true : false
      }
      
      props.onFillterChanged(filter);
      setSubmitting(false)
    }
    return (
      <div>
          <Formik
            enableReinitialize
            initialValues={{ term: filter.term, friend: String(filter.friend) }}
            validate={usersSearchFormValidate}
            onSubmit={submit}
          >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="term"/>
              <Field as='select' name="friend">
                <option value='null'>All</option>
                <option value='true'>Only followed</option>
                <option value='false'>Only unfollowed</option>
              </Field>
              <button type='submit' disabled={isSubmitting}>
                Find
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  })

export default UsersSearchForm;