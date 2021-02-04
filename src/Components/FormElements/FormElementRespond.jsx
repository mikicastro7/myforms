import React, { Component } from 'react'
import style from './FormElement.module.css'
import TextareaAutosize from 'react-textarea-autosize';

class FormElement extends Component {

    render(){
    
    
        let inputElement = null

    switch (this.props.inputtype){
        case ('input'):
            inputElement = <input onChange={e => this.props.updatevalueshandler(e.target.value, this.props.id)}  value={this.props.value} placeholder="Write here" className={style.input}/>
            break;
        case ('textarea'):
            inputElement = <TextareaAutosize onChange={e => this.props.updatevalueshandler(e.target.value, this.props.id)} value={this.props.value} placeholder="Write here" className={style.textarea}/>
            break;
        case ('multiSelector'):
            inputElement = 
            <div className={style.multiSelector}>
                {this.props.options.map((opt) => {
                    return(
                        <div key={opt.id} className={style.checkbox}>
                            <input onChange={e => this.props.updatevalueshandler(e.target.value, this.props.id, opt.id)} checked={opt.checked} type="checkbox" value={opt.value}/>
                            <label>{" " + opt.value}</label>
                        </div>
                    )
                })}
            </div>
            break;
        case ('onlySelector'):
            inputElement = 
            <div className={style.multiSelector}>
                {this.props.options.map((opt) => {
                    return(
                        <div key={opt.id} className={style.checkbox}>
                            <input onChange={e => this.props.updatevalueshandler(e.target.value, this.props.id, opt.id)} checked={opt.checked} name={this.props.id} type="radio" value={opt.value}/>
                            <label>{" " + opt.value}</label>
                        </div>
                    )
                })}
            </div>
            break;
            case ('multiSelectorOther'):
            inputElement = 
            <div className={style.multiSelector}>
                {this.props.options.map((opt) => {
                    return(
                        <div key={opt.id} className={style.checkbox}>
                            <input checked={opt.checked} onChange={e => this.props.updatevalueshandler(e.target.value, this.props.id, opt.id)} type="checkbox" value={opt.value}/>
                            <label >{" " + opt.value}</label>
                        </div>
                    )
                })}
                <TextareaAutosize onChange={e => this.props.updatevalueshandler(e.target.value, this.props.id)} style={{marginTop : '20px'}} placeholder="Other Option" className={style.textarea}/>
            </div>
            break;
        case ('onlySelectorOther'):
            inputElement = 
            <div className={style.multiSelector}>
                {this.props.options.map((opt) => {
                    return(
                        <div key={opt.id} className={style.checkbox}>
                            <input onChange={e => this.props.updatevalueshandler(e.target.value, this.props.id, opt.id)} name={this.props.id} type="radio" value={opt.value}/>
                            <label>{" " + opt.value}</label>
                        </div>
                    )
                })}
                <TextareaAutosize onChange={e => this.props.updatevalueshandler(e.target.value, this.props.id)} style={{marginTop : '20px'}} placeholder="Other Option" className={style.textarea}/>
            </div>
            break;
        case ('dropdown'):
            inputElement = 
            <select value={this.props.value} onChange={e => this.props.updatevalueshandler(e.target.value, this.props.id)} className={style.dropdown}>
                <option  hidden>Select one</option>
                {this.props.options.map((opt) => {
                    return(
                        <option key={opt.id} value={opt.value}>{opt.value}</option>
                    )
                })}
            </select>
            break;    
        default: 
            inputElement = <input onChange={e => this.handleChange(e)} />
    }
        return (
            <div className={style.FormElement}>
                <label className={style.label}>{this.props.label}{this.props.required ? <span className={style.required}><i className="fas fa-asterisk"></i></span> : " "}</label>
                {inputElement}
            </div>
        )
    }
}

export default FormElement