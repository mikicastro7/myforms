import React, { Component } from 'react'

import MyFormsPanel from './Containers/MyFormsPanel'
import MyFormsEdit from './Containers/MyFormsEdit'
import MyFormsRespond from './Containers/MyFormsRespond'
import MyFormsResponsesPanel from './Containers/MyFormsResponsesPanel'
import MyFormsResponsesWatch from './Containers/MyFormsWatch'

import {Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Route  path={"/"} exact component={() => <MyFormsPanel  />}  />
        <Route  path={"/editForm/:id"} exact component={() => <MyFormsEdit  />}  />
        <Route  path={"/respondForm/:key"} exact component={() => <MyFormsRespond  />}  />
        <Route  path={"/responses"} exact component={() => <MyFormsResponsesPanel  />}  />
        <Route  path={"/responses/watch/:id"} exact component={() => <MyFormsResponsesWatch  />}  />
      </div>
    )
  }
}
