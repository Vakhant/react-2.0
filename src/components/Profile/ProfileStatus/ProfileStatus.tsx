import React, { ChangeEvent, useState } from 'react';
import { useEffect } from 'react';

type PropsT = {
  status: string
  updateStatus: (status: string)=>void
}

const ProfileStatus:React.FC<PropsT> = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus]     = useState(props.status);
  
    useEffect(() => setStatus(props.status), [props.status])
  
    const activateEditMode = () => setEditMode(true)
  
    const deactivateEditMode = () => {
      setEditMode(false);
      props.updateStatus(status);
    }
    
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)
    
      return (
        <div>
          {!editMode &&
          <div onClick={activateEditMode}>{props.status || "Добавить статус"}</div>
          }
          {editMode &&
            <input onChange={onStatusChange} onBlur={deactivateEditMode} value={status} type="text" />
          }
        </div>
      )
  }

export default ProfileStatus;