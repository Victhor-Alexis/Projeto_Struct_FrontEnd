import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../Pages/Home'
import Test from '../Pages/Test'
import Category from '../Pages/Category'
import Product from '../Pages/Product'
import Profile from '../Pages/Profile'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/testes" component={Test}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/category/:id" component={Category}/>
            <Route exact path="/product" component={Product}/>
            <Route exact path="/profile" component={Profile}/>
            <Route path='*' component={Home}/>
        </Switch>
    )
}

export default Routes