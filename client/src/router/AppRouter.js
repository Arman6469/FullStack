import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from '../components/App'
import About from '../pages/About';
import Shop from '../pages/Shop';
import Navigation from '../components/Navigation'

export default function AppRouter() {
  return (
    
    <BrowserRouter>
        <Navigation />
        <Switch>

                <Route exact path ='/' component={App} />
                <Route path = '/about' component={About}/>
                <Route path = '/shop' component = {Shop}/>
                
        </Switch>
    
    </BrowserRouter>

  )
}
