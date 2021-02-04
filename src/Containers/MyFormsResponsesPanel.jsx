import React, { Component } from 'react'
import Axios from 'axios';

import style from './MyFormsResponsesPanel.module.css'
import FormResponseElement from '../Components/FormResponseElement/FormResponseElement'
import Header from '../Components/Header/PrincipalPageHeader'
import PanelHeader from '../Components/FormPanelElements/PanelHeader/PanelHeader'

export default class MyFormsResponsesPanel extends Component {

    state = {
        forms: []
    }

    componentDidMount() {
        Axios.get('form_response/respondedForms')
            .then(response => {
                this.setState({ forms: response.data.forms })
            })
    }

    DeleteFormHandler = (id) => {
        this.setState({
            forms: this.state.forms.filter(form =>
                form.id !== id
            )
        })
        Axios.delete('form_response/delete/' + id)
    }

    render() {
        return (
            <div>
                <Header></Header>
                <PanelHeader />
                <div className={style.container}>
                    {this.state.forms.map(ele => {
                        return <FormResponseElement
                            id={ele.id}
                            key={ele.id}
                            title={ele.title}
                            created_at={ele.created_at}
                            description={ele.description}
                            checked={ele.checked}
                            DeleteFormHandler={this.DeleteFormHandler}
                        />
                    })}
                </div>
            </div>
        )
    }
}
