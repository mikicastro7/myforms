import React from 'react'
import style from './HeaderEdit.module.css'

const HeaderEdit = (props) => {
    return (
        <nav className={style.headerEdit}>
            <div className={style.buttons}>
                <button onClick={() => props.saveFormHandler()} className={style.saveButton}><span className={style.icon}><i className="fas fa-save"></i></span>Save</button>
                <button className={style.shareButton}><span className={style.icon}><i className="fas fa-share"></i></span>Share</button>
            </div>
        </nav>
    )
}

export default HeaderEdit