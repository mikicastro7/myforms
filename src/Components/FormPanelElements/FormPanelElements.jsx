import React from 'react'
import FormPanelElement from './FormPanelElement/FormPanelElement'
import style from './FormPanelElements.module.css';
import PanelHeader from './PanelHeader/PanelHeader'

const FormPanelElements = (props) => {
    return (
        <React.Fragment>
            <PanelHeader/>
            <div className={style.container}> 
                {props.forms.map(form => {
                    return <FormPanelElement 
                    form={form} 
                    key={form.id}
                    deleteFormHandler={props.DeleteFormHandler}
                    copiFormHandler={props.copiFormHandler}
                    />
                })}
                <div onClick={props.AddFormHandler} className={style.addFor}>
                    <p>+</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FormPanelElements