import React from 'react'
import style from './FormElementEditButtons.module.css'

const FormElementEditButtons = (props) => {
    return (
        <div className={style.buttons}>
            <button onClick={() => props.deleteQuestionHandler(props.id)}><i className="fas fa-trash-alt"></i></button>
            <button onClick={() => props.addQuestionHandler(props.id)}><i className="fas fa-plus"></i></button>
            
            <div className={style.required}>
                <label>required </label>
                <input onChange={() => props.requiredHandler(props.id)} checked={props.required} type="checkbox"></input>
            </div>
            <select value={props.inputtype} onChange={e => props.inputTypeHandler(e.target.value, props.id)} className={style.questionTypeSelect}>
                <option  value="input">Short answare</option>
                <option  value="textarea">Long answare</option>
                <option  value="multiSelector">Multi value selector</option>
                <option  value="onlySelector">Only one value selector</option>
                <option  value="multiSelectorOther">Multi selector other value</option>
                <option  value="onlySelectorOther">Only selector other value</option>
                <option  value="dropdown">dropdown</option>
            </select>
        </div>
    )
}

export default FormElementEditButtons