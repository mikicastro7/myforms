import React, { Component } from 'react'
import style from './FormElementsWatch.module.css'
import TextareaAutosize from 'react-textarea-autosize';

export default class FormElementsWatch extends Component {
    render() {
        let inputElement = null

        switch (this.props.inputtype) {
            case ('input'):
                inputElement = <input readOnly value={this.props.value} placeholder="Write here" className={style.input} />
                break;
            case ('textarea'):
                inputElement = <TextareaAutosize readOnly value={this.props.value} placeholder="Write here" className={style.textarea} />
                break;
            case ('multiSelector'):
                inputElement =
                    <div className={style.multiSelector}>
                        {this.props.options.map((opt) => {
                            return (
                                <div key={opt.id} className={style.checkbox}>
                                    <input readOnly checked={opt.checked} type="checkbox" value={opt.value} />
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
                            return (
                                <div key={opt.id} className={style.checkbox}>
                                    <input readOnly checked={opt.checked} name={this.props.id} type="radio" value={opt.value} />
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
                            return (
                                <div key={opt.id} className={style.checkbox}>
                                    <input checked={opt.checked} readOnly type="checkbox" value={opt.value} />
                                    <label >{" " + opt.value}</label>
                                </div>
                            )
                        })}
                        <TextareaAutosize value={this.props.value} readOnly style={{ marginTop: '20px' }} placeholder="Other Option" className={style.textarea} />
                    </div>
                break;
            case ('onlySelectorOther'):
                inputElement =
                    <div className={style.multiSelector}>
                        {this.props.options.map((opt) => {
                            return (
                                <div key={opt.id} className={style.checkbox}>
                                    <input readOnly name={this.props.id} type="radio" value={opt.value} checked={opt.checked} />
                                    <label>{" " + opt.value}</label>
                                </div>
                            )
                        })}
                        <TextareaAutosize value={this.props.value} readOnly style={{ marginTop: '20px' }} placeholder="Other Option" className={style.textarea} />
                    </div>
                break;
            case ('dropdown'):
                inputElement =
                    <select value={this.props.value} readOnly className={style.dropdown}>
                        <option hidden>Select one</option>
                        {this.props.options.map((opt) => {
                            return (
                                <option readOnly key={opt.id} value={opt.value}>{opt.value}</option>
                            )
                        })}
                    </select>
                break;
            default:
                inputElement = <input readOnly />
        }
        return (
            <div className={style.FormElement}>
                <label className={style.label}>{this.props.label}{this.props.required ? <span className={style.required}><i className="fas fa-asterisk"></i></span> : " "}</label>
                {inputElement}
            </div>
        )
    }
}
