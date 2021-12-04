import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../Pages/Home'
import Test from '../Pages/Test'
import Category from '../Pages/Category'
import Product from '../Pages/Product'
import Profile from '../Pages/Profile'
import AdminPanel from '../Pages/AdminPanel'
import { useState } from 'react/cjs/react.development'

const Routes = () => {
    
    const [isAdmin, setIsAdmin] = useState(true); // Receber isAdmin do banco

    return (
        <Switch>
            <Route exact path="/testes" component={Test}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/category/:id" component={Category}/>
            <Route exact path="/product/:id" component={Product}/>
            <Route exact path="/profile" component={Profile}/>

            {
                isAdmin && 
                <Route exact path="/AdminPanel" component={AdminPanel}/>
            }

            <Route path='*' component={Home}/>
        </Switch>
    )
}

export default Routes