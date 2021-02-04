import axios from 'axios';
import React, { Component } from 'react'
import FormElement from '../Components/FormElements/FormElementRespond'
import style from './MyFormsRespond.module.css'
import { ToastContainer, toast } from 'react-toastify';
import SendSucces from '../Components/SendSuccess/SendSuccess'

export default class MyFormsRespond extends Component {

    state = {
        formElements: [],
        sended: false
    }

    componentDidMount() {
        let key = window.location.href.split("/").slice(-1)[0];

        axios.get("/form_question/getFormByKey/" + key)
            .then(response => {
                let formElementsArray = JSON.parse(response.data.form.form_elements)

                this.setState({
                    id: response.data.form.id,
                    title: response.data.form.title,
                    description: response.data.form.description,
                    edit: true,
                    formElements: formElementsArray.map(ele => {
                        if (ele.formType === "textarea" || ele.formType === "input") {
                            ele.value = ""
                        }
                        ele.editMode = "false"
                        return ele
                    })

                })
            })
    }

    updatevalueshandler = (value, elementid, optionid = null) => {

        if (optionid !== null) {
            this.setState({
                forms: this.state.formElements.map(ele => {
                    if (ele.id === elementid) {
                        if (ele.formType === "onlySelector" || ele.formType === "onlySelectorOther") {
                            ele.options.forEach(element => {
                                element.checked = false;
                            });
                        }
                        let i = ele.options.findIndex(ele => ele.id === optionid)
                        ele.options[i].checked = !ele.options[i].checked
                    }
                    return ele
                })
            })
        } else {
            this.setState({
                forms: this.state.formElements.map(ele => {
                    if (ele.id === elementid) {
                        ele.value = value;
                    }
                    return ele
                })
            })
        }
    }

    requiredChecker = () => {
        let okay = true;
        console.log(this.state)
        this.state.formElements.forEach(element => {
            if (element.require === true) {
                if (element.value === undefined) {
                    let onChecked = false;
                    console.log(element)
                    element.options.forEach(element => {
                        if (element.checked === true) {
                            onChecked = true;
                        }
                    });
                    if (onChecked === false) okay = false
                } else if (element.value !== undefined & element.options !== undefined & element.formType !== "dropdown") {
                    let onChecked = false;
                    if (element.value !== "") onChecked = true;
                    else {
                        element.options.forEach(element => {
                            if (element.checked === true) {
                                onChecked = true;
                            }
                        });
                    }
                    if (onChecked === false) okay = false
                } else {
                    if (element.value === "") okay = false
                }
            }
        });
        return okay
    }

    sendFormHandler = () => {
        if (this.requiredChecker()) {
            this.setState({
                sended: true
            })
            let formElements = this.state.formElements.map(ele => {
                delete ele.editMode
                delete ele.edit
                return ele
            })
            axios({
                method: 'post',
                url: 'form_response/sendForm',
                data: {
                    id: this.state.id,
                    title: this.state.title,
                    description: this.state.description,
                    form_elements: JSON.stringify(formElements)
                }
            })
        } else {
            toast.warning("Fill all the required questions marked with *");
        }
    }



    render() {
        return (
            !this.state.sended ?
                <div className={style.background}>
                    <div className={style.form}>
                        <div className={style.formHeader}>
                            <h1>{this.state.title}</h1>
                            <p>{this.state.description}</p>
                        </div>
                        {this.state.formElements.map((ele) => {
                            return <FormElement required={ele.require} updatevalueshandler={this.updatevalueshandler} value={ele.value} key={ele.id} id={ele.id} options={ele.options} label={ele.formLabel} inputtype={ele.formType}></FormElement>
                        })}
                        <div className={style.sendButtonContainer}>
                            <button onClick={this.sendFormHandler} className={style.sendButton}>Send</button>
                        </div>

                    </div>
                    <ToastContainer />
                </div> : <SendSucces />
        )
    }
}
