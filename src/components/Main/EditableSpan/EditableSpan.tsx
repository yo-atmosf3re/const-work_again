import React, { ChangeEvent, useState } from 'react'
import { EditableSpanPropsType } from './EditableSpan.types';



const EditableSpan: React.FC<EditableSpanPropsType> = ({ value }) => {
   const [editMode, setEditMode] = useState<boolean>(false)
   const [title, setTitle] = useState<string>(value)

   const turnEditMode = () => {
      setEditMode(true)
      setTitle(value)
   }

   const turnViewMode = () => {
      setEditMode(false)
      setTitle(title)
   }

   const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && setEditMode(false)

   const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
      e.currentTarget.value === '' ? setTitle('Введите значение') : setTitle(e.currentTarget.value)
   }

   return (
      editMode
         ?
         <input
            onChange={onChangeTitleHandler}
            onBlur={turnViewMode}
            onKeyDown={handleEnterPress}
            autoFocus
            value={title}
            className='row__text-field'
         />
         :
         <span
            onDoubleClick={turnEditMode}>
            {title}
         </span>
   )
}

export default EditableSpan
