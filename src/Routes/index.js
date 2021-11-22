import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../Pages/Home'
import Test from '../Pages/Test'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/testes" component={Test}/>
            <Route exact path="/" component={Home}/>
        </Switch>
    )
}

export default Routes