import React from 'react'
import style from './FormResponseElement.module.css'

import { Link } from 'react-router-dom';

const FormResponseElement = (props) => {

    let formatDate = (date) => {
        let day = date.substring(0, 10).split("-").reverse().join("/")
        let hour = date.substring(11, 16)

        return day + " " + hour
    }

    let getTitleClass = () => {
        return props.checked === 1 ? style.titleChecked : style.titleUnchecked
    }

    return (
        <div>
            <div className={style.formContainer}>
                <h1 className={getTitleClass()}>{props.title.length > 17 ? props.title.substring(0, 17) + "..." : props.title}</h1>
                <h2>{props.description.length > 28 ? props.description.substring(0, 28) + "..." : props.description}</h2>
                <div className={style.times}>
                    <p><strong>Sent at: </strong> {formatDate(props.created_at)}</p>
                </div>
                <div className={style.buttons}>
                    <Link to={"/responses/watch/" + props.id}><button><i className="far fa-eye"></i></button></Link>
                    <button onClick={() => props.DeleteFormHandler(props.id)}><i className="fas fa-trash-alt"></i></button>
                </div>
            </div>
        </div>
    )
}

export default FormResponseElement