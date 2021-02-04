import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import style from './FormElementEdit.module.css'
import FormEditButtons from './FormElementEditButtons'

const FormElementEdit = (props) => {
    let inputElement = null

    switch (props.inputtype){
        case ('input'):
            inputElement = <input disabled placeholder="Short Answare question" className={style.input}/>
            break;
        case ('textarea'):
            inputElement = <input disabled placeholder="Long Answare question" className={style.input}/>
            break;
        case ('multiSelector'):
            let inputsClassCheckbox = props.edit ?  ` ${style.multiSelectorInput} ` : ` ${style.multiSelectorInputNoBorder}`
            inputElement = <div className={style.multiSelectorInputs}>
                    {props.options.map(option => {
                        return (
                        <div key={option.id} className={style.multiSelector}>
                            <input checked={option.checked} value="holaa" className={style.multiSelectorCheckBox} type="checkbox" disabled/> 
                            <input onChange={e => props.changeValueInput(e.target.value, option.id, props.id)} value={option.value} className={inputsClassCheckbox}></input>
                            <button onClick={() => props.deleteOptionHandler(props.id, option.id)} className={style.deleteOption}>X</button>
                        </div>)
                    })}
                    <button className={style.addOption} onClick={() => props.addOptionHandler(props.id)}>Add Option +</button>
                </div>
            break;
        case ('onlySelector'):
            let inputsClassRadio = props.edit ?  ` ${style.multiSelectorInput} ` : ` ${style.multiSelectorInputNoBorder}`
            inputElement = <div className={style.multiSelectorInputs}>
                    {props.options.map(option => {
                        return (
                        <div key={option.id} className={style.multiSelector}>
                            <input checked={option.checked} value="holaa" className={style.multiSelectorCheckBox} type="radio" disabled/> 
                            <input onChange={e => props.changeValueInput(e.target.value, option.id, props.id)} value={option.value} className={inputsClassRadio}></input>
                            <button onClick={() => props.deleteOptionHandler(props.id, option.id)} className={style.deleteOption}>X</button>
                        </div>)
                    })}
                    <button className={style.addOption} onClick={() => props.addOptionHandler(props.id)}>Add Option +</button>
                </div>
            break;
        case ('multiSelectorOther'):
            let inputsClassCheckbox2 = props.edit ?  ` ${style.multiSelectorInput} ` : ` ${style.multiSelectorInputNoBorder}`
            inputElement = <div className={style.multiSelectorInputs}>
                    {props.options.map(option => {
                        return (
                        <div key={option.id} className={style.multiSelector}>
                            <input checked={option.checked} value="holaa" className={style.multiSelectorCheckBox} type="checkbox" disabled/> 
                            <input onChange={e => props.changeValueInput(e.target.value, option.id, props.id)} value={option.value} className={inputsClassCheckbox2}></input>
                            <button onClick={() => props.deleteOptionHandler(props.id, option.id)} className={style.deleteOption}>X</button>
                        </div>)
                    })}
                    {props.edit ? <button className={style.addOption} onClick={() => props.addOptionHandler(props.id)}>Add Option +</button> : ""}
                    <input disabled placeholder="Other Option" className={style.input}/>
                </div>
            break;
            case ('onlySelectorOther'):
            let inputsClassRadio2 = props.edit ?  ` ${style.multiSelectorInput} ` : ` ${style.multiSelectorInputNoBorder}`
            inputElement = <div className={style.multiSelectorInputs}>
                    {props.options.map(option => {
                        return (
                        <div key={option.id} className={style.multiSelector}>
                            <input checked={option.checked} value="holaa" className={style.multiSelectorCheckBox} type="radio" disabled/> 
                            <input onChange={e => props.changeValueInput(e.target.value, option.id, props.id)} value={option.value} className={inputsClassRadio2}></input>
                            <button onClick={() => props.deleteOptionHandler(props.id, option.id)} className={style.deleteOption}>X</button>
                        </div>)
                    })}
                    {props.edit ? <button className={style.addOption} onClick={() => props.addOptionHandler(props.id)}>Add Option +</button> : ""}
                    <input disabled placeholder="Other Option" className={style.input}/>
                </div>
            break;
            case ('dropdown'):
            let inputsClassdropdown = props.edit ?  ` ${style.multiSelectorInput} ` : ` ${style.multiSelectorInputNoBorder}`
            inputElement = <div className={style.multiSelectorInputs}>
                    {props.options.map(option => {
                        return (
                        <div key={option.id} className={style.multiSelector}>
                            <input onChange={e => props.changeValueInput(e.target.value, option.id, props.id)} value={option.value} className={inputsClassdropdown}></input>
                            <button onClick={() => props.deleteOptionHandler(props.id, option.id)} className={style.deleteOption}>X</button>
                        </div>)
                    })}
                    {props.edit ? <button className={style.addOption} onClick={() => props.addOptionHandler(props.id)}>Add Option +</button> : ""}
                </div>
            break;
        default: 
            inputElement = <input />
    }
    let classActive = () => {
        return props.edit ?  ` ${style.FormElement} ${style.editActive}` : `${style.FormElement}`
    }

    let textareaBorderBottom = () => {
        return props.edit ?  ` ${style.textareaQuestion} ` : `${style.textareaQuestion} ${style.textAreaShow}`
    }
    

    return (
        <div onClick={() => props.activeEdit(props.id)}>
            <div key={props.id} className={classActive()}>
            <TextareaAutosize onChange={e => props.changeQuestion(e.target.value, props.id)} className={textareaBorderBottom()} value={props.question} id={props.id} type="text"></TextareaAutosize>
            {inputElement}
            {props.edit ? <FormEditButtons inputtype={props.inputtype} inputTypeHandler={props.inputTypeHandler} deleteQuestionHandler={props.deleteQuestionHandler} addQuestionHandler={props.addQuestionHandler} id={props.id} requiredHandler={props.requiredHandler} required={props.required} /> : ""}
            
            </div>
        </div>
    )
}

export default FormElementEdit