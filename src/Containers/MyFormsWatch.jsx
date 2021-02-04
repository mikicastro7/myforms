import React, { Component } from 'react'
import axios from 'axios';
import style from './MyFormsWatch.module.css'
import FormElement from '../Components/FormElementsWatch/FormElementsWatch'

export default class MyFormsWatch extends Component {
    state = {
        formElements: []
    }

    componentDidMount() {
        let id = window.location.href.split("/")[5];

        axios.get("/form_response/getForm/" + id)
            .then(response => {
                let formElementsArray = JSON.parse(response.data.form.form_elements)
                this.setState({
                    id: response.data.form.id,
                    title: response.data.form.title,
                    description: response.data.form.description,
                    edit: true,
                    formElements: formElementsArray
                })
                axios.put("/form_response/checkForm/" + response.data.form.id)
            })

    }

    render() {
        return (
            <div>
                <div className={style.background}>
                    <div className={style.form}>
                        <div className={style.formHeader}>
                            <h1>{this.state.title}</h1>
                            <p>{this.state.description}</p>
                        </div>
                        {this.state.formElements.map((ele) => {
                            return <FormElement required={ele.require} updatevalueshandler={this.updatevalueshandler} value={ele.value} key={ele.id} id={ele.id} options={ele.options} label={ele.formLabel} inputtype={ele.formType}></FormElement>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
