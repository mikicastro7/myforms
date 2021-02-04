import React from 'react'
import style from './DeleteModal.module.css'

const DeleteModal = (props) => {
    if(!props.showDelete) {
        return null
    }
    return (
        
        <div className={style.modal}>
            <div className={style.modalContent}>
                <div className={style.modalBody}>
                    <p>Are you sure you want to delete this form</p>
                </div>
                <div className={style.modalButtons}>
                    <button className={style.cancelButton} onClick={props.onClose}>Cancel</button>
                    <button className={style.deleteButton} onClick={() => props.deleteFormHandler(props.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal