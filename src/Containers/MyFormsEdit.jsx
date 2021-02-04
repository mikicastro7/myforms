import React, { Component } from 'react'
import style from './MyFormsEdit.module.css'
import TextareaAutosize from 'react-textarea-autosize';
import FormElementEdit from '../Components/FormElements/FormElementsEdit/FormElementEdit'
import HeaderEdit from '../Components/FormElements/FormElementsEdit/HeaderEdit'
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class MyFormsEdit extends Component {
    
    state={
    
        formElements : []
        
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.autoSaveFormHandler();
          }, 30000);

        let id = window.location.href.split("/").slice(-1)[0];
        Axios.get('form_question/getForm/' + id)
          .then(response => {
              
              let formElementsArray = JSON.parse(response.data.form.form_elements)
            this.setState({
                id: response.data.form.id,
                title: response.data.form.title,
                description: response.data.form.description,
                edit: true,
                formElements : formElementsArray.map(ele => {
                    ele.editMode = "false"
                    return ele
                })
                
            })
          })
          
      }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    deleteOptionHandler = (questionId, optionId) => {
       
        this.setState({
            formElements : 
                this.state.formElements.map(formEle => {
                    if (formEle.id === questionId) {
                        formEle.options = formEle.options.filter(option => {
                            return option.id !== optionId
                        })
                    }
                    return formEle
                })
        })

    }

    addOptionHandler = (id) => {
        let i = this.state.formElements.findIndex(ele =>  ele.id === id)
        let newOption = {
            id : Math.random(),
            checked : false,
            value : "new Option"
        }
        
        this.setState({
            state : 
                this.state.formElements[i].options.push(newOption)
        })
    }

    changeValueInput = (value, optionId, questionId) => {
        let i = this.state.formElements.findIndex(ele =>  ele.id === questionId) 

        this.setState({
            state : 
                this.state.formElements[i].options.map(ele => {
                    if (optionId === ele.id) {
                        ele.value = value
                    }
                    return ele
                })
        })
    }

    inputTypeHandler = (value, id) => {
        console.log(value)
        this.setState({
            state: 
                this.state.formElements.map(ele => {
                    if (ele.id === id) {
                        ele.formType = value
                        if (value === "input" || value === "textarea") {
                            delete ele.options
                        } else if(ele.options === undefined){

                        
                        
                        
                        ele.options =
                    [
                        {
                            id : 1,
                            value: "opcio1",
                            checked : false
                        },
                    ]}
                    }
                    return ele;
                })
        })
    }


    inputHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    headerEdit = () => {
        this.setState({
            edit: true,
            state:
            this.state.formElements.map(ele => {
                ele.edit = false
                return ele
            })
        })
    }

    changeQuestion = (value, questionId) => {
        this.setState({
            state:
            this.state.formElements.map(ele => {
                if(ele.id === questionId){
                    ele.formLabel = value
                }
                return ele
            })
        })
    }

    activeEdit = (questionId = null) => {
        this.setState({
            edit : false,
            state:
            this.state.formElements.map(ele => {
                if(ele.id === questionId){
                    ele.edit = true
                } else {
                    ele.edit = false
                }
                return ele
            })
        })
    }

    requiredHandler = (questionId) => {
        this.setState({
            state:
            this.state.formElements.map(ele => {
                if (ele.id === questionId) {
                    ele.require = !ele.require
                }
                return ele
            })
        })
    }

    addQuestionHandler = (questionId = null) => {
        console.log(questionId)
        if (questionId === null) {
            this.setState({
                state:
                    this.state.formElements.splice(0 ,0,{
                    id: Math.random(),
                    formType: "input",
                    formLabel: "Prova",
                    editMode: "false",
                    require : false,

                    })
            })
        } else {
            let i = this.state.formElements.findIndex(ele =>  ele.id === questionId) 
            this.setState({
                state:
                    this.state.formElements.splice(i + 1,0,{
                    id: Math.random(),
                    formType: "input",
                    formLabel: "Prova",
                    editMode: "false",
                    require : false,
                    })
            })
        }
    }

    deleteQuestionHandler = (questionId) => {
        
        this.setState({
            formElements: 
                this.state.formElements.filter(ele => {
                    return ele.id !== questionId
                })
        })
    }

    saveFormHandler = () => {
        let formElements = this.state.formElements.map(ele =>{
            delete ele.editMode
            delete ele.edit
            return ele
        })
        Axios({
            method : 'post',
            url: 'form_question/saveForm',
            data:{
                id : this.state.id,
                title : this.state.title,
                description: this.state.description,
                form_elements : JSON.stringify(formElements)
            }
        }).then(response => {
            toast.success(response.data.message);
        })
    }

    autoSaveFormHandler = () => {
        let formElements = this.state.formElements.map(ele =>{
            delete ele.editMode
            delete ele.edit
            return ele
        })
        Axios({
            method : 'post',
            url: 'form_question/saveForm',
            data:{
                id : this.state.id,
                title : this.state.title,
                description: this.state.description,
                form_elements : JSON.stringify(formElements)
            }
        })
    }


    

    header1 = () => { return(
        this.state.edit ? 
        <React.Fragment>
            <input onChange={this.inputHandler} name="title" placeholder="Title of the form" className={style.formTitle} type="text" value={this.state.title}></input>
            <TextareaAutosize  onChange={this.inputHandler} name="description" placeholder="Description of the form" value={this.state.description} className={style.formDescription}/>
            <div className={style.buttons}>
                <button onClick={this.addQuestionHandler}><i className="fas fa-plus"></i></button>
            </div>
        </React.Fragment> : 
        <React.Fragment>
            <h1>{this.state.title}</h1>
            <p>{this.state.description}</p>
        </React.Fragment>)
    }

    render() {
        return (
            <div className={style.background}>
            <HeaderEdit 
                saveFormHandler={this.saveFormHandler}
            />
            <div className={style.form}>
                
                <div onClick={this.headerEdit}  className={style.formHeader}>
                {this.header1()}
                </div>
                {this.state.formElements.map((ele) => {
                    return <FormElementEdit requiredHandler={this.requiredHandler}
                                activeEdit={this.activeEdit}
                                changeQuestion={this.changeQuestion} 
                                addQuestionHandler={this.addQuestionHandler}
                                deleteQuestionHandler={this.deleteQuestionHandler}
                                inputTypeHandler={this.inputTypeHandler}
                                changeValueInput={this.changeValueInput}
                                addOptionHandler={this.addOptionHandler}
                                deleteOptionHandler={this.deleteOptionHandler}
                                edit={ele.edit} 
                                required={ele.require}  
                                key={ele.id} id={ele.id} 
                                options={ele.options} 
                                question={ele.formLabel} 
                                inputtype={ele.formType}
                                
                                >
                            </FormElementEdit>
                })}
            </div>
            <ToastContainer />
            </div>
        )
    }
}
