import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Index from '../view/index/index';
import Book from '../view/book/book';
import About from '../view/about/index';
import Details from '../view/details/details';
import User from '../view/user/user';
export default class RouterIndex extends Component{
    render(){
        return(
            <Switch>
                <Route path="/" exact render={()=>(
                        <Redirect to="/index"/>
                )}/>
                <Route path="/index" component={Index}/>
                <Route path="/book" component={Index}/>
                <Route path="/about" component={Index}/>
                <Route path="/" component={Index}/>
                <Route path="/" component={Index}/>

            </Switch>
        )
    }
}