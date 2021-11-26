import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../Pages/Home'
import Test from '../Pages/Test'
import Category from '../Pages/Category'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/testes" component={Test}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/category/:id" component={Category}/>
        </Switch>
    )
}

export default Routes