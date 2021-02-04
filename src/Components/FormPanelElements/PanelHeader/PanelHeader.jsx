import style from './PanelHeader.module.css'
import {Link} from 'react-router-dom'

import React, { Component } from 'react'
import axios from 'axios'

export default class PanelHeader extends Component {

    state={
        responses : 0,
    }
    componentDidMount() {
        axios.get("form_response/uncheckeresponses")
            .then(response => {
                this.setState({
                    responses : response.data.unchecked
                })
            })
    }

    getActiveResponses(){
        if (  window.location.href.split("/")[3] === "responses") {
            return style.active
        } else {
            return ""
        }
    }

    getActiveMyForms(){
        if (  window.location.href.split("/")[3] !== "responses") {
            return style.active
        } else {
            return ""
        }
    }

    render() {
        return (
            <div>
                <div className={style.header}>
                    <React.Fragment>
                        <Link to="/"><p className={this.getActiveMyForms()}>MyForms</p></Link>
                        <Link to="/responses"><p className={this.getActiveResponses()}>Responses {this.state.responses}</p></Link>
                    </React.Fragment>
                </div>
            </div>
        )
    }
}
