import React, { useState } from 'react';
import style from './FormPanelElement.module.css'
import DeleteModal from './DeleteModal/DeleteModal'
import ShareModal from './ShareModal/ShareModal'

import { Link } from 'react-router-dom';


const FormPanelElement = (props) => {
    const [showDelete, setShowDelete] = useState(false)
    const [showShare, setShowShare] = useState(false)

    let formatDate = (date) => {
        let day = date.substring(0, 10).split("-").reverse().join("/")
        let hour = date.substring(11, 16)

        return day + " " + hour
    }
    return (
        <div className={style.formContainer}>
            <h1>{props.form.title.length > 17 ? props.form.title.substring(0, 17) + "..." : props.form.title}</h1>
            <h2>{props.form.description.length > 28 ? props.form.description.substring(0, 28) + "..." : props.form.description}</h2>
            <div className={style.times}>
                <p><strong>Created at: </strong> {formatDate(props.form.created_at)}</p>
                <p><strong>Updated at:</strong> {formatDate(props.form.updated_at)}</p>
            </div>
            <div className={style.buttons}>
                <Link to={"/editForm/" + props.form.id}><button><i className="fas fa-edit"></i></button></Link>
                <button onClick={() => props.copiFormHandler(props.form.id)}><i className="fas fa-copy"></i></button>
                <button onClick={() => setShowShare(true)}><i className="fas fa-share"></i></button>
                <button onClick={() => setShowDelete(true)}><i className="fas fa-trash-alt"></i></button>
            </div>
            <DeleteModal onClose={() => setShowDelete(false)} showDelete={showDelete} id={props.form.id} deleteFormHandler={props.deleteFormHandler} />
            <ShareModal onClose={() => setShowShare(false)} showShare={showShare} form_key={props.form.form_key} />
        </div>
    )
}

export default FormPanelElement