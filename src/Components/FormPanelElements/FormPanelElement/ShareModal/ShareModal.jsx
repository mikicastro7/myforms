import React from 'react'
import style from './ShareModal.module.css'

const ShareModal = (props) => {
    if(!props.showShare) {
        return null
    }
    return (
        
        <div className={style.modal}>
            <div className={style.modalContent}>
                <div className={style.modalBody}>
                    <p>localhost:3000/respondForm/{props.form_key}</p>
                </div>
                <div className={style.modalButtons}>
                    <button className={style.cancelButton} onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default ShareModal
